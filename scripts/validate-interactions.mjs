/** Local-only browser regression checks. Tool dependencies may live in a temporary directory. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
const require = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = require('playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const output = resolve(process.argv[4] ?? 'output/visual-validation');
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

await fs.mkdir(output+'/screenshots',{recursive:true});
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:320,height:740},reducedMotion:'reduce',acceptDownloads:true});const page=await context.newPage();
const checks=[];const check=(name)=>{checks.push(name);console.log('PASS',name)};
await page.goto(base+'/');await page.getByRole('button',{name:'Menu',exact:true}).click();
assert.equal(await page.getByRole('button',{name:'Sluiten',exact:true}).getAttribute('aria-expanded'),'true');assert.equal(await page.locator('#mobile-navigation a').count(),7);assert(await page.locator('#mobile-navigation').isVisible());
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),320);check('Mobile menu exposes all destinations without overflow');
await page.keyboard.press('Escape');assert.equal(await page.getByRole('button',{name:'Menu',exact:true}).getAttribute('aria-expanded'),'false');assert(await page.getByRole('button',{name:'Menu',exact:true}).evaluate(e=>e===document.activeElement));check('Escape closes menu and returns focus');
await page.getByRole('button',{name:'Menu',exact:true}).click();await page.locator('#mobile-navigation').getByRole('link',{name:'Onze visie'}).click();await page.waitForURL('**/onze-visie');assert(await page.getByRole('button',{name:'Menu',exact:true}).isVisible());check('Menu links navigate and close');
await page.locator('details.vision-position summary').first().click();assert(await page.locator('details.vision-position').first().getAttribute('open')!==null);check('Vision disclosures open');
await page.goto(base+'/standpunten');await page.locator('details summary').first().click();assert(await page.locator('details').first().getAttribute('open')!==null);check('Standpoint research disclosures open');
await page.goto(base+'/doe-mee?type=bron&context=hive#bijdrage');await page.waitForFunction(()=>!document.querySelector('fieldset').disabled);
assert.equal(await page.locator('#contribution-type').inputValue(),'bron');assert.equal(await page.locator('#contribution-context').inputValue(),'hive');assert(await page.locator('#contribution-source').isVisible());
await page.locator('#contribution-message').fill('Welke bron ontbreekt nog bij dit bouwplan?');await page.locator('#contribution-source').fill('https://example.org/bron');
const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Bewaar bijdrage als tekstbestand'}).click();const download=await downloadPromise;const path=await download.path();const body=await fs.readFile(path,'utf8');assert(body.includes('HIVE'));assert(body.includes('Een bron delen'));assert(body.includes('https://example.org/bron'));assert(await page.getByRole('status').innerText().then(s=>s.includes('niets naar BOUW verstuurd')));check('Context-aware contribution download contains the prepared source and message');
await page.goto(base+'/doe-mee');assert(!await page.locator('#contribution-context').innerText().then(s=>s.includes('CLARKE')));await page.goto(base+'/doe-mee?context=clarke');assert.equal(await page.locator('#contribution-context').inputValue(),'clarke');check('CLARKE contribution context remains discreet');
await page.goto(base+'/volg-bouw');assert(await page.getByText('Er is op deze website nog geen geverifieerd sociaal volgkanaal', {exact:false}).isVisible());assert.equal(await page.locator('form').count(),0);check('Follow page retains honest observation-only behavior');
await page.goto(base+'/');assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');check('Reduced motion disables smooth scrolling');
await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement?.textContent),'Ga naar inhoud');await page.keyboard.press('Enter');assert(await page.evaluate(()=>location.hash==='#main'));check('Skip link works with keyboard');
for (const [old,current] of [['agria','grow'],['habitary','hive'],['lifted','rise'],['cytara','mend']]){const response=await context.request.get(base+'/projecten/'+old,{maxRedirects:0});assert.equal(response.status(),308);assert.equal(response.headers().location,'/projecten/'+current)}check('All four permanent redirects remain');
for(const route of ['/resultaten','/resultaten/fictief','/projecten/onbekend','/voorstellen/onbekend'])assert.equal((await context.request.get(base+route)).status(),404);check('Unpublished results and unknown slugs stay unavailable');
await page.goto(base+'/');assert(!await page.locator('main').innerText().then(t=>t.includes('CLARKE')));await page.goto(base+'/projecten');assert.equal(await page.locator('.project-card').count(),5);assert(await page.locator('.project-discovery a').getAttribute('href')==='/projecten/clarke');check('Five flagship projects and separate CLARKE discovery preserved');
// A client-side transition must not leak the vision stylesheet into the project/home composition.
await page.setViewportSize({width:1440,height:900});await page.locator('.desktop-nav').getByRole('link',{name:'Onze visie'}).click();await page.waitForURL('**/onze-visie');await page.getByRole('link',{name:'BOUW — naar home'}).click();await page.waitForURL(base+'/#home');assert.equal(await page.locator('h1').innerText(),'MINDER\nAFHANKELIJK.\nMEER MOGELIJK.');check('Cross-page navigation preserves homepage styling/content');
const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const noPage=await noJS.newPage();await noPage.goto(base+'/doe-mee');assert(await noPage.locator('noscript').isVisible());assert(await noPage.locator('#contribution-message').isDisabled());check('JavaScript-disabled contribution fallback remains honest');await noPage.goto(base+'/');assert(await noPage.locator('footer a[href="/standpunten"]').isVisible());assert(await noPage.locator('.hero img').evaluate(e=>e.complete&&e.naturalWidth>0));check('Core navigation and imagery remain accessible without JavaScript');await noJS.close();
await fs.writeFile(output+'/interactions.json',JSON.stringify({checks},null,2));await browser.close();
