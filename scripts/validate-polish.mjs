/** Focused polish checks: first-screen meaning, mobile pacing and retained safeguards. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const requireLocal = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = requireLocal('playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const output = resolve(process.argv[4] ?? '/tmp/bouw-polish');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ reducedMotion: 'reduce' });
const results = [];
try {
 for (const prefix of ['', '/en']) {
  for (const [width, height] of [[1440, 900], [768, 1024], [390, 844]]) {
   await page.setViewportSize({ width, height });
   await page.goto(base + (prefix || '/'));
   if (width < 1200) {
    const brand = page.locator('.hero-brand-line');
    assert(await brand.isVisible());
    const bounds = await brand.boundingBox();
    assert(bounds.y >= 0 && bounds.y + bounds.height <= height, 'Opening brand line ' + prefix + width);
    assert((await brand.innerText()).includes(prefix ? 'No promises.' : 'Geen beloftes.'));
   }
   const pacing = await page.evaluate(() => ({ total: document.documentElement.scrollHeight, loop: document.querySelector('#loop').getBoundingClientRect().top + scrollY, journey: document.querySelector('#mogelijkheden').getBoundingClientRect().height, method: document.querySelector('#werkwijze').getBoundingClientRect().height }));
   assert.equal(await page.locator('.life-sequence li').count(), 9);
   assert((await page.locator('#mogelijkheden').innerText()).includes(prefix ? 'not a proven causal chain' : 'geen bewezen causale keten'));
   assert.equal(await page.locator('.method-support a').getAttribute('href'), prefix + '/onze-visie#vrijheidstest');
   await page.getByRole('button', { name: 'Menu', exact: true }).click();
   const current = page.locator('#mobile-navigation [aria-current=page]');
   assert.equal(await current.evaluate(e => getComputedStyle(e).textDecorationLine), 'underline');
   await page.keyboard.press('Escape');
   await page.goto(base + prefix + '/projecten/loop');
   const lead = page.locator('.blueprint-hero-copy .blueprint-lead');
   const leadBox = await lead.boundingBox();
   assert(leadBox.y >= 0 && leadBox.y + leadBox.height <= height, 'LOOP household concept outside first viewport ' + prefix + width);
   assert((await lead.innerText()).includes(prefix ? 'households regularly' : 'regelmatig naar huishoudens'));
   assert((await lead.innerText()).includes(prefix ? 'milkman' : 'melkboer'));
   assert.equal(await page.locator('.blueprint-hero-copy > a.blueprint-text-link').getAttribute('href'), '#loop-in-het-kort');
   assert((await page.locator('.blueprint-stage-note').innerText()).includes(prefix ? 'not a validated diet or measured weekly cost' : 'geen gevalideerd dieet of gemeten weekkost'));
   results.push({ locale: prefix ? 'en' : 'nl', width, height, ...pacing, householdLeadBottom: leadBox.y + leadBox.height });
  }
  await page.goto(base + prefix + '/onze-visie#vrijheidstest');
  const freedom = await page.locator('#vrijheidstest').innerText();
  for (const phrase of prefix ? ['needlessly takes away freedom', 'necessary and proportionate', 'What could go wrong?'] : ['onnodig vrijheid wegneemt', 'noodzakelijk en proportioneel', 'Wat kan er misgaan?']) assert(freedom.includes(phrase), 'Preserved freedom safeguard: ' + phrase);
  await page.goto(base + prefix + '/bouwjaar');
  for (const detail of await page.locator('#open-vragen details').all()) {
   await detail.locator('summary').click();
   assert(await detail.locator('p').isVisible());
  }
 }
 await fs.writeFile(output + '/polish.json', JSON.stringify(results, null, 2));
 console.log('PASS brand line, LOOP first viewport/CTA, nine ideas, menu ruler and accessible retained questions/freedom safeguards');
} finally { await browser.close(); }
