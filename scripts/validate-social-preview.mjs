/** Validate crawler-visible metadata and the actual JPEG, locally or after deployment. */
import assert from 'node:assert/strict';
import sharp from 'sharp';
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const imageURL = 'https://www.ontdekbouw.nl/og-image.jpg';
const descriptions = {
  nl: 'Concrete ideeën voor wonen, voedsel, vaardigheden en een sterkere basis voor de toekomst.',
  en: 'Concrete ideas for housing, food, skills and a stronger foundation for the future.',
};
for (const [locale, path, title] of [
  ['nl', '/', 'BOUW — Geen beloftes. Bouwplannen.'],
  ['en', '/en', 'BOUW — No promises. Plans to build.'],
]) {
  for (const agent of ['Twitterbot/1.0', 'facebookexternalhit/1.1', 'LinkedInBot/1.0', 'BOUW-preview-validator/1.0']) {
    const response = await fetch(new URL(path, base), { headers: { 'User-Agent': agent } });
    assert.equal(response.status, 200);
    const html = await response.text();
    const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
    assert(head, 'Initial HTML must contain a head');
    const tags = Object.fromEntries([...head.matchAll(/<meta (?:property|name)="([^"]+)" content="([^"]*)"/g)].map(m => [m[1], m[2]]));
    for (const [key, value] of Object.entries({
      'og:title': title, 'og:description': descriptions[locale],
      'og:url': new URL(path, 'https://www.ontdekbouw.nl').href,
      'og:type': 'website', 'og:site_name': 'BOUW',
      'og:locale': locale === 'en' ? 'en_GB' : 'nl_NL',
      'og:image': imageURL, 'og:image:width': '1200', 'og:image:height': '630',
      'twitter:card': 'summary_large_image', 'twitter:title': title,
      'twitter:description': descriptions[locale], 'twitter:image': imageURL,
    })) assert.equal(key === 'og:url' ? new URL(tags[key]).href : tags[key], value, `${path} ${agent}: ${key}`);
    assert(html.includes(`<html lang="${locale}"`));
  }
}
const response = await fetch(new URL('/og-image.jpg', base));
assert.equal(response.status, 200);
assert(response.headers.get('content-type')?.includes('image/jpeg'));
const bytes = Buffer.from(await response.arrayBuffer());
const metadata = await sharp(bytes).metadata();
assert.equal(metadata.format, 'jpeg');
assert.equal(metadata.width, 1200);
assert.equal(metadata.height, 630);
console.log(`PASS ${base}: NL/EN metadata in initial head for four crawlers; JPEG HTTP 200, 1200 × 630, ${bytes.length} bytes`);
