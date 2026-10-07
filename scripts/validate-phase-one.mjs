/** Phase 1 story, preserved links, evidence boundaries and header-width regression checks. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const localRequire = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = localRequire('playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const output = resolve(process.argv[4] ?? '/tmp/bouw-phase-one');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ reducedMotion: 'reduce', acceptDownloads: true });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const checks = [];
try {
 for (const prefix of ['', '/en']) {
  await page.goto(base + (prefix || '/'));
  assert.deepEqual(await page.locator('.home-page > section').evaluateAll(es => es.map(e => e.id || e.className)), ['hero', 'mogelijkheden', 'bouwjaar', 'loop', 'projecten', 'werkwijze', 'doe-mee']);
  assert.equal(await page.locator('.life-sequence li').count(), 9);
  for (const id of ['home', 'main', 'visie', 'mogelijkheden', 'bouwjaar', 'loop', 'projecten', 'voorstellen', 'werkwijze', 'doe-mee', 'meebouwen', 'grow', 'hive', 'rise', 'mend']) assert.equal(await page.locator(`[id="${id}"]`).count(), 1, `Stable anchor ${prefix}#${id}`);
  assert.deepEqual(await page.locator('.desktop-nav a').allTextContents(), ['BOUW', 'BOUWJAAR', 'LOOP', prefix ? 'Projects' : 'Projecten']);
  await page.goto(base + prefix + '/bouwjaar?review=1#open-vragen');
  await page.locator('.language-control a').filter({ hasText: prefix ? 'NL' : 'EN' }).click();
  await page.waitForURL(base + (prefix ? '' : '/en') + '/bouwjaar?review=1#open-vragen');
  assert.equal(await page.locator('html').getAttribute('lang'), prefix ? 'nl' : 'en');
  await page.goto(base + prefix + '/bouwjaar');
  assert.equal(await page.locator('#open-vragen details').count(), 6);
  assert.equal(await page.locator('#verkennen .editorial-list > div').count(), 7);
  await page.locator('#open-vragen summary').first().click();
  assert(await page.locator('#open-vragen details').first().getAttribute('open') !== null);
  assert(await page.locator('#open-vragen details').first().locator('p').isVisible());
  await page.locator('a[href*="context=bouwjaar"]').click();
  await page.waitForURL('**/doe-mee?type=meedenken&context=bouwjaar#bijdrage');
  assert.equal(await page.locator('#contribution-context').inputValue(), 'bouwjaar');
  await page.goto(base + prefix + '/projecten/loop');
  assert.equal(await page.locator('#loop-in-het-kort .project-introduction > div').count(), 4);
  assert(await page.evaluate(() => !!(document.querySelector('#loop-in-het-kort').compareDocumentPosition(document.querySelector('#experiment-001')) & Node.DOCUMENT_POSITION_FOLLOWING)));
  assert((await page.locator('#experiment-001').innerText()).replace(/\s+/g, '').includes(prefix ? '€18.47' : '€18,47'));
  assert((await page.locator('#experiment-001').innerText()).includes('CALCULATION'));
  for (const route of ['', '/bouwjaar', '/projecten', '/projecten/loop', '/projecten/hive']) {
   await page.goto(base + prefix + (route || (prefix ? '' : '/')));
   for (const width of [320, 390, 768, 1024, 1100, 1200, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const state = await page.evaluate(() => ({
     overflow: document.documentElement.scrollWidth > innerWidth,
     clipped: [...document.querySelectorAll('header.header a, header.header button, main h1, main h2, main h3')].filter(e => e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden').filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 1 || r.left < -1; }).map(e => e.textContent)
    }));
    assert(!state.overflow && !state.clipped.length, JSON.stringify({ prefix, route, width, ...state }));
    checks.push({ route: prefix + route || '/', width });
   }
   if (['', '/bouwjaar', '/projecten/loop'].includes(route)) {
    for (const width of [390, 1440]) {
     await page.setViewportSize({ width, height: 900 });
     await page.screenshot({ path: output + '/' + (prefix ? 'en' : 'nl') + (route.replaceAll('/', '-') || '-home') + '-' + width + '.png', fullPage: true });
    }
   }
  }
 }
 assert.equal(errors.length, 0, JSON.stringify(errors));
 await fs.writeFile(output + '/phase-one.json', JSON.stringify({ checks, errors, story: 'Seven ordered chapters; nine framework themes; new equivalent routes; contextual contribution; preserved anchors and notebook' }, null, 2));
 console.log('PASS Phase 1 story, equivalent switching, contextual contribution, anchors, LOOP notebook and ' + checks.length + ' route/width checks');
} finally { await browser.close(); }
