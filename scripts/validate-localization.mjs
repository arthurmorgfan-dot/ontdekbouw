/** Checks localization coverage and the real draft composer without sending mail. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
const dictionary = JSON.parse(fs.readFileSync('src/i18n/en.json', 'utf8'));
const identity = new Set(['BOUW','LOOP','GROW','HIVE','RISE','MEND','CLARKE','Candidate 020','SOURCE','ASSUMPTION','CALCULATION','UNKNOWN','MEASURED','MODEL','Tether','Prototype','Wind','Water','Scenario','Baseline','Comfort','Cell → Block → District → City','Cell','Block','District','City','Requirements','Cell design','Local adaptation','Cost model','Infrastructure model','Measure','Improve','Repeat or stop','Shop-in-shop','Model','Plan','Home','Show the idea.','Show the system.','Then show the math.']);
const structural = new Set(['id','slug','projectSlug','experimentSlug','href','route','url','image','heroImage','tone','accent','position','demoHref','state','stage','currency']);
const covered = value => !/[a-zA-ZÀ-ÿ]/.test(value) || structural.has(value) || identity.has(value) || Object.hasOwn(dictionary, value.replace(/\s+/g,' ').trim());
let checked = 0;
function walk(directory) {
  for (const entry of fs.readdirSync(directory)) {
    const file = path.join(directory,entry);
    if (fs.statSync(file).isDirectory()) { walk(file); continue; }
    if (!/\.tsx?$/.test(file)) continue;
    const source = ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);
    function visit(node) {
      if (ts.isCallExpression(node) && node.expression.getText(source)==='t' && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
        const value=node.arguments[0].text;
        assert(covered(value),`${file}: missing English UI copy: ${value}`); checked++;
      }
      if (file.startsWith('src/data/') && (ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node))) {
        const parent=node.parent;
        if (ts.isPropertyAssignment(parent)&&structural.has(parent.name.getText(source))) return;
        // Module references, discriminants and property-key access are not prose.
        if (ts.isImportDeclaration(parent)||ts.isExportDeclaration(parent)||ts.isElementAccessExpression(parent)||ts.isBinaryExpression(parent)||ts.isLiteralTypeNode(parent)) return;
        const value=node.text;
        if (value.startsWith('@/')||value.startsWith('./')||value.startsWith('/')||value.startsWith('http')||['string','onbekend','geraamd','werkelijk','gepubliceerd','gemeten','lopend','prototypebewijs'].includes(value)) return;
        assert(covered(value),`${file}: missing English content: ${value}`); checked++;
      }
      ts.forEachChild(node,visit);
    }
    visit(source);
  }
}
walk('src/components'); walk('src/views'); walk('src/app'); walk('src/data');
const cache = new Map(); const notices=[];
const mocks = {
  react: { useState: value=>[value, next=>notices.push(next)], useSyncExternalStore:()=>true },
  'react/jsx-runtime': { jsx:(type,props)=>({type,props}), jsxs:(type,props)=>({type,props}) },
};
const browser={location:{href:''}};
function readModule(file) {
  if(cache.has(file)) return cache.get(file);
  const result={exports:{}};cache.set(file,result.exports);
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX,resolveJsonModule:true,esModuleInterop:true}}).outputText;
  const requireLocal=name=>{
    if(mocks[name])return mocks[name];
    if(name==='@/i18n/client')return {useI18n:()=>readModule(path.resolve('src/i18n/shared.ts')).createI18n('en')};
    const resolved=name.startsWith('@/')?path.resolve('src',name.slice(2)):path.resolve(path.dirname(file),name);
    if(resolved.endsWith('.json'))return JSON.parse(fs.readFileSync(resolved,'utf8'));
    return readModule(fs.existsSync(resolved+'.ts')?resolved+'.ts':resolved+'.tsx');
  };
  vm.runInNewContext(code,{exports:result.exports,module:result,require:requireLocal,window:browser,FormData:class{constructor(value){this.value=value;}get(key){return this.value[key]??null;}}},{filename:file});
  return result.exports;
}
const {createI18n,localizedPath}=readModule(path.resolve('src/i18n/shared.ts'));
assert.equal(createI18n('nl').t('Nog geen resultaten.'),'Nog geen resultaten.');
assert.equal(createI18n('en').t('Nog geen resultaten.'),'No results yet.');
for(const route of ['/','/projecten/loop','/doe-mee?type=bron&context=hive#bijdrage']){
  const en=localizedPath(route,'en'); assert.equal(localizedPath(en,'nl'),route);
}
assert.equal(localizedPath('/#voorstellen','en'),'/en#voorstellen');
assert.equal(localizedPath('https://www.loopfood.nl/demo','en'),'https://www.loopfood.nl/demo');
const Composer=readModule(path.resolve('src/components/participation/ContributionComposer.tsx')).default;
const form=Composer({contactEmail:'local-test@example.invalid',initialType:'bron',initialContext:'hive',contexts:[{id:'hive',title:'HIVE'}]});
form.props.onSubmit({preventDefault(){},currentTarget:{message:'A missing source',context:'hive',source:'https://example.invalid/source'}});
const mailto=new URL(browser.location.href);
assert.equal(mailto.protocol,'mailto:');assert.equal(mailto.searchParams.get('subject'),'BOUW — Share a source — HIVE');
assert.equal(mailto.searchParams.get('body'),'A missing source\n\nSubject: HIVE\nContribution: Share a source\nSource: https://example.invalid/source');
assert(notices[0].includes('has not sent or stored anything'));
console.log(`PASS: ${checked} content/UI strings covered; stable routes/IDs; English contextual email draft prepared without sending mail`);
