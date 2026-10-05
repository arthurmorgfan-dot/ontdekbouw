import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
const cache = new Map();
function readModule(file) {
  if (cache.has(file)) return cache.get(file);
  const result = { exports: {} }; cache.set(file, result.exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  const requireLocal = name => readModule(path.resolve(process.cwd(), name.replace('@/', 'src/')) + '.ts');
  vm.runInNewContext(code, {exports:result.exports, module:result, require:requireLocal}, {filename:file});
  return result.exports;
}

import assert from 'node:assert/strict';
const { experiments, getPublishedExperiment, isPublishableExperiment } = readModule(path.resolve('src/data/experiments.ts'));
assert.equal(experiments.length, 0); assert.equal(getPublishedExperiment('onbekend'), undefined);
// Isolated, synthetic guard fixture. Never stored in application data or published.
const fixture = { id:'guard-test', slug:'guard-test', title:'Guard fixture', projectSlug:'loop', question:'Test?', hypothesis:'Test', plannedMethod:'Planned', cost:{state:'onbekend'}, sources:[{id:'s',title:'Fixture',url:'https://example.invalid/evidence',kind:'data',verifiedAt:'test',limitations:'Synthetic'}], artifacts:[], measurements:[{id:'m',label:'Fixture',method:'Test method',state:'gemeten',value:'Synthetic',measuredAt:'test',sourceIds:['s'],limitations:'Synthetic'}], status:'gepubliceerd',publishedAt:'test',reviewedAt:'test',completed:{actualMethod:'Test',outcome:'Synthetic',failures:'Unknown',limitations:'Synthetic',conclusion:'Fixture',cannotConclude:'Anything real',decision:'stoppen',nextStep:'None',outcomeSourceIds:['s']}};
assert.equal(isPublishableExperiment(fixture), true);
function reject(change){ const record=structuredClone(fixture); change(record); assert.equal(isPublishableExperiment(record),false); }
reject(r=>r.status='gepland'); reject(r=>r.measurements[0]={id:'m',label:'Fixture',method:'Planned',state:'gepland',target:'Future'}); reject(r=>r.completed.outcomeSourceIds=['missing']); reject(r=>r.reviewedAt=''); reject(r=>r.completed.cannotConclude=''); reject(r=>r.projectSlug='missing'); reject(r=>r.cost={state:'werkelijk',amount:12,currency:'EUR',sourceIds:[]}); reject(r=>r.artifacts=[{id:'a',title:'Fixture',url:'/fixture',kind:'prototypebewijs',sourceIds:[]}]); reject(r=>r.sources.push({...r.sources[0]}));
console.log('PASS: no published records; publication rejects plans, missing observations/evidence/review/limitations, unknown projects, untraceable actual costs and unsupported prototype evidence');
