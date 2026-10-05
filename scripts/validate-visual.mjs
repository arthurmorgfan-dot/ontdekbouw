/** Local-only browser regression checks. Tool dependencies may live in a temporary directory. */
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
const require = createRequire(resolve(process.argv[3] ?? '.', 'package.json'));
const { chromium } = require('playwright');
const base = process.argv[2] ?? 'http://127.0.0.1:3000';
const output = resolve(process.argv[4] ?? 'output/visual-validation');
const AxeBuilder = require('@axe-core/playwright').default;
import fs from 'node:fs/promises';
const routes=['/','/projecten',...['loop','grow','hive','rise','mend','clarke'].map(s=>'/projecten/'+s),...['vers-eten-moet-goedkoper','gezond-eten-als-basis','iedere-dag-bewegen'].map(s=>'/voorstellen/'+s),'/onze-visie','/standpunten','/doe-mee','/volg-bouw','/pagina-bestaat-niet'];
const widths=[320,375,390,430,768,1024,1440,1920];
await fs.mkdir(output+'/screenshots',{recursive:true});
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({reducedMotion:'reduce'}); const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(String(e)));
const report={checks:[],accessibility:[],errors};
for (const route of routes) {
 for(const width of widths) {
  await page.setViewportSize({width,height:width<768?844:1000});
  const response=await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:15000});
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForFunction(()=>[...document.querySelectorAll('img[loading=eager]')].every(i=>i.complete),{},{timeout:15000});
  console.log('Viewport',route,width);
  const state=await page.evaluate(()=>{
   const visible=e=>{const s=getComputedStyle(e);return s.display!=='none'&&s.visibility!=='hidden'&&e.getClientRects().length>0;};
   const overflow=[...document.querySelectorAll('main *,header *,footer *')].filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1||r.left<-1;}).slice(0,20).map(e=>({tag:e.tagName,class:e.getAttribute('class'),text:e.textContent?.slice(0,100)}));
   const clippedText=[];
   for(const el of document.querySelectorAll('h1,h2,h3,h4,p,dt,dd,summary,a,button,blockquote,li')) {
    if(!visible(el))continue;
    for(const n of el.childNodes)if(n.nodeType===Node.TEXT_NODE&&n.textContent.trim()){
     const range=document.createRange();range.selectNodeContents(n);
     for(const r of range.getClientRects())if(r.right>innerWidth+1||r.left<-1){clippedText.push({tag:el.tagName,class:el.getAttribute('class'),text:n.textContent.slice(0,90)});break;}
    }
   }
   const tiny=[...document.querySelectorAll('main p,main a,main span,main dt,main dd')].filter(visible).filter(e=>e.textContent.trim()&&parseFloat(getComputedStyle(e).fontSize)<12).map(e=>({class:e.className,font:getComputedStyle(e).fontSize}));
   const brokenImages=[...document.querySelectorAll('img')].filter(e=>e.complete&&e.naturalWidth===0).map(e=>e.src);
   return {viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,overflow,clippedText,tiny,brokenImages,h1:document.querySelectorAll('h1').length,main:document.querySelectorAll('main').length,canonical:document.querySelector('link[rel=canonical]')?.href,lang:document.documentElement.lang};
  });
  const expectedCanonical = new URL(route==='/'?'/':route, 'https://ontdekbouw.nl').href.replace(/\/$/, '');
  if(route!=='/pagina-bestaat-niet' && state.canonical?.replace(/\/$/, '')!==expectedCanonical) throw new Error('Incorrect canonical: '+route);
  if(state.lang!=='nl') throw new Error('Missing Dutch language: '+route);
  report.checks.push({route,width,status:response.status(),...state});
  await fs.writeFile(output+'/audit.json',JSON.stringify(report,null,2));
  if([390,1440].includes(width)) {
   await page.screenshot({path:output+'/screenshots/'+(route==='/'?'home':route.replaceAll('/','-'))+'-'+width+'-audit.png',fullPage:true});
   const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
   report.accessibility.push({route,width,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:axe.incomplete.map(v=>({id:v.id,count:v.nodes.length}))});
  }
 }
 console.log('Checked',route,'at all 8 widths');
 await fs.writeFile(output+'/audit.json',JSON.stringify(report,null,2));
}
await browser.close();
const failing=report.checks.filter(c=>c.status!==(c.route==='/pagina-bestaat-niet'?404:200)||c.scrollWidth>c.width||c.overflow.length||c.clippedText.length||c.tiny.length||c.brokenImages.length||c.h1!==1||c.main!==1);
console.log(JSON.stringify({checks:report.checks.length,failures:failing,accessibility:report.accessibility.filter(a=>a.violations.length),errors},null,2));
if(failing.length||report.accessibility.some(a=>a.violations.length)||errors.length) process.exitCode=1;
