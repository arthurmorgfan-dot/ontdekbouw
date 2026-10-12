/** BOUW 3.0: retained content, HIVE concepts, localized preview assets and review captures. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';
const requireLocal = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = requireLocal('playwright');
const AxeBuilder = requireLocal('@axe-core/playwright').default;
const base = process.argv[2] ?? 'http://127.0.0.1:3100';
const output = resolve(process.argv[4] ?? 'docs/bouw-3-0/review');
await fs.mkdir(output, { recursive: true });
const baseline = JSON.parse(await fs.readFile('docs/bouw-3-0/content-baseline.json', 'utf8'));
const browser = await chromium.launch();
const context = await browser.newContext({ reducedMotion: 'reduce', acceptDownloads: true });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', e => { if (e.type() === 'error') errors.push(e.text()); });
const report = { content: [], social: [], screenshots: [], os: [], errors };
const normalise = text => text.replace(/\s+/g, ' ').trim();
try {
  for (const old of baseline) {
    const response = await page.goto(base + old.path);
    assert.equal(response.status(), 200);
    const text = normalise(await page.locator('main').textContent());
    const missing = ['/', '/en'].includes(old.path) ? [] : old.content.map(normalise).filter(value => value && !text.includes(value));
    assert.deepEqual(missing, [], `Existing project information missing: ${old.path}`);
    report.content.push({ path: old.path, retained: true });
  }
  for (const locale of ['nl', 'en']) {
    const prefix = locale === 'en' ? '/en' : '';
    for (const [name, path] of [['home', '/'], ['bouwjaar', '/bouwjaar'], ['loop', '/projecten/loop'], ['hive', '/projecten/hive'], ['projects', '/projecten']]) {
      const url = prefix + (path === '/' ? '' : path) || '/';
      for (const width of [390, 1440]) {
        await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
        await page.goto(base + url);
        for (const image of await page.locator('img').all()) {
          await image.scrollIntoViewIfNeeded();
          await image.evaluate(e => e.decode());
        }
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        await page.evaluate(() => scrollTo(0, 0));
        await page.waitForTimeout(350);
        const file = `${locale}-${name}-${width === 390 ? 'mobile' : 'desktop'}.png`;
        await page.screenshot({ path: `${output}/${file}`, fullPage: true });
        report.screenshots.push(file);
      }
    }
    await page.goto(base + prefix + '/projecten/hive');
    await page.waitForFunction(() => !document.querySelector('.os-controls').disabled);
    await page.locator('#os-temperature').press('End');
    for (let i = 0; i < 3; i++) await page.locator('#os-temperature').press('ArrowLeft');
    await page.locator('.os-room-bedroom').click();
    assert.equal(await page.locator('#os-temperature').inputValue(), '21');
    await page.locator('#os-temperature').press('Home');
    for (let i = 0; i < 2; i++) await page.locator('#os-temperature').press('ArrowRight');
    await page.locator('.os-room-living').click();
    assert.equal(await page.locator('#os-temperature').inputValue(), '23');
    await page.locator('.os-navigation button').nth(1).click();
    await page.locator('.os-scenes button').last().click();
    assert.equal(await page.locator('#os-brightness').inputValue(), '15');
    await page.locator('#os-colour').selectOption('cool');
    await page.locator('.os-toggle').click();
    assert.equal(await page.locator('.home-os').getAttribute('data-exterior'), 'true');
    await page.locator('.os-navigation button').nth(2).click();
    assert.equal(await page.locator('.os-energy-grid strong').allTextContents().then(values => values.every(value => value === '—')), true);
    await page.locator('#os-energy-mode').selectOption('manual');
    await page.locator('.os-navigation button').nth(3).click();
    await page.locator('.os-toggle').click();
    await page.locator('.os-reset').click();
    await page.locator('.os-navigation button').first().click();
    assert.equal(await page.locator('#os-temperature').inputValue(), '21');
    for (const index of [0, 1, 2, 3]) {
      await page.locator('.os-navigation button').nth(index).click();
      const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      assert.deepEqual(audit.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `HIVE Home OS ${locale} panel ${index}`);
    }
    for (const [name, index] of [["home-os", 0], ["energy", 2]]) {
      await page.locator('.os-navigation button').nth(index).click();
      await page.evaluate(() => { document.activeElement?.blur(); scrollTo(0, 0); });
      await page.waitForTimeout(400);
      const bounds = await page.locator('#home-os').boundingBox();
      const screenshot = await page.screenshot({ fullPage: true });
      await sharp(screenshot).extract({ left: Math.floor(bounds.x), top: Math.floor(bounds.y), width: Math.floor(bounds.width), height: Math.floor(bounds.height) }).png().toFile(`${output}/${locale}-${name}.png`);
    }
    await page.reload();
    await page.waitForFunction(() => !document.querySelector('.os-controls').disabled);
    assert.equal(await page.locator('#os-temperature').inputValue(), '21');
    report.os.push({ locale, independentRoomSettings: true, lightingAndExterior: true, noLiveEnergyData: true, resetAndNoPersistence: true, allPanelsAxe: true });
    for (const [path, name] of [['/', null], ['/bouwjaar', 'bouwjaar'], ['/projecten/loop', 'loop'], ['/projecten/hive', 'hive']]) {
      const url = prefix + (path === '/' ? '' : path) || '/';
      const response = await context.request.get(base + url, { headers: { 'User-Agent': 'Twitterbot/1.0' } });
      const html = await response.text();
      const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
      assert(head);
      const tags = [...head.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]*)"/g)].map(m => [m[1],m[2]]);
      const expected = name ? `https://www.ontdekbouw.nl/social/${name}-${locale}.jpg` : 'https://www.ontdekbouw.nl/og-image.jpg';
      for (const key of ['og:image', 'twitter:image']) assert.deepEqual(tags.filter(t => t[0] === key).map(t => t[1]), [expected]);
      assert.equal(tags.find(t => t[0] === 'twitter:card')?.[1], 'summary_large_image');
      const imageResponse = await context.request.get(base + new URL(expected).pathname);
      assert.equal(imageResponse.status(), 200);
      assert(imageResponse.headers()['content-type'].includes('image/jpeg'));
      const image = await sharp(await imageResponse.body()).metadata();
      assert.equal(image.width, 1200);
      assert.equal(image.height, 630);
      report.social.push({ url, image: expected, status: 200, width: 1200, height: 630 });
    }
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base + '/projecten/hive');
  assert(await staticPage.locator('.os-controls').evaluate(e => e.disabled));
  assert(await staticPage.locator('.os-controls button').first().isDisabled());
  assert(await staticPage.locator('noscript').isVisible());
  await noJS.close();
  assert.deepEqual(errors, []);
} finally {
  await fs.writeFile(`${output}/validation.json`, JSON.stringify(report, null, 2));
  await browser.close();
}
console.log('PASS: existing content on 32 routes; HIVE controls/privacy/no-JS; eight social previews; 20 bilingual full-page review screenshots');
