/** Local review: multilingual rendering, accessibility, links and full-page screenshots. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const localRequire = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = localRequire('playwright');
const { default: AxeBuilder } = localRequire('@axe-core/playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3100';
const output = resolve(process.argv[4] ?? 'docs/homepage-redesign');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const results = [];
try {
  for (const locale of ['nl', 'en']) {
    const path = locale === 'en' ? '/en' : '/';
    for (const width of [320, 390, 768, 1024, 1200, 1440, 1920]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
      const response = await page.goto(base + path);
      assert.equal(response.status(), 200);
      assert.equal(await page.locator('html').getAttribute('lang'), locale);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('main').count(), 1);
      assert(await page.locator('#hive-chapter .story-boundary').innerText().then(text => text.includes(locale === 'nl' ? 'Geen Cell, kostenmodel, prototype, pilot, partners of bewezen besparingen.' : 'No Cell, cost model, prototype, pilot, partners or proven savings.')));
      assert.equal(await page.locator('#projecten .project-gateways article').count(), 5);
      assert.equal(await page.locator('#hive-chapter a').getAttribute('href'), (locale === 'en' ? '/en' : '') + '/projecten/hive');
      for (const image of await page.locator('img').all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(e => e.decode());
      }
      await page.locator('header img').evaluateAll(es => Promise.all(es.map(e => e.decode())));
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        duplicateIDs: [...document.querySelectorAll('[id]')].map(e => e.id).filter((id, index, all) => all.indexOf(id) !== index),
        brokenImages: [...document.querySelectorAll('img')].filter(e => !e.complete || !e.naturalWidth).map(e => e.src),
        clippedHeadings: [...document.querySelectorAll('main h1, main h2, main h3')].filter(e => { const r = e.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1; }).map(e => e.textContent),
      }));
      assert(!state.overflow && !state.duplicateIDs.length && !state.brokenImages.length && !state.clippedHeadings.length, JSON.stringify({ locale, width, state }));
      await page.evaluate(() => scrollTo(0, 0));
      if ([390, 1440].includes(width)) {
        await page.waitForTimeout(350);
        await page.screenshot({ path: `${output}/${locale}-${width === 390 ? 'mobile' : 'desktop'}.png`, fullPage: true });
        const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        const violations = audit.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }));
        results.push({ locale, width, violations, ...state });
        assert.equal(violations.length, 0, JSON.stringify(violations, null, 2));
      } else results.push({ locale, width, ...state });
      console.log('PASS homepage', locale, width);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + path);
    await page.locator('.menu-toggle').click();
    assert(await page.locator('#mobile-navigation').isVisible());
    await page.keyboard.press('Escape');
    assert(!(await page.locator('#mobile-navigation').isVisible()));
    assert(await page.locator('.menu-toggle').evaluate(e => document.activeElement === e));
    await page.locator('#hive-chapter a').click();
    await page.waitForURL(base + (locale === 'en' ? '/en' : '') + '/projecten/hive');
    assert((await page.locator('h1').innerText()).includes('HIVE'));
    await page.goto(base + path);
    await page.keyboard.press('Tab');
    assert(await page.locator('.skip-link').evaluate(e => e === document.activeElement));
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    const links = await page.locator('main a').evaluateAll(es => es.map(e => e.getAttribute('href')));
    for (const href of new Set(links)) {
      if (!href?.startsWith('/')) continue;
      const url = new URL(href, base);
      const response = await context.request.get(url.href);
      assert.equal(response.status(), 200, href);
      if (url.hash) {
        await page.goto(url.href);
        assert.equal(await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count(), 1, href);
      }
    }
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJS.newPage();
  for (const path of ['/', '/en']) {
    const response = await staticPage.goto(base + path);
    assert.equal(response.status(), 200);
    assert(await staticPage.locator('#hero-heading').isVisible());
    assert(await staticPage.locator('#hive-chapter .story-boundary').isVisible());
    assert.equal(await staticPage.locator('#hive-chapter a').count(), 1);
  }
  await noJS.close();
  assert.equal(errors.length, 0, JSON.stringify(errors));
} finally {
  await fs.writeFile(`${output}/validation.json`, JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}
console.log('PASS bilingual homepage, seven widths, axe, no-JS, menu/keyboard, enlargement, links and screenshots');
