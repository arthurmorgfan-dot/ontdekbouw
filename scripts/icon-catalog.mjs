// Repository-local catalog. Uses the production artwork; never publishes an app route.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const directory = path.dirname(fileURLToPath(import.meta.url));
import ts from 'typescript';
const source = path.resolve(directory, '../src/components/icons/artwork.ts');
const compiled = ts.transpileModule(fs.readFileSync(source, 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { iconArtwork } = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));
const svg = (name, size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" aria-hidden="true">${iconArtwork[name]}</svg>`;
const output = process.argv[2] || '/tmp/bouw-icon-catalog.html';
const cells = Object.keys(iconArtwork).map(name => `<article><h2>${name}</h2><div>${[16,20,24,32].map(size => svg(name,size)).join('')}</div><p>16 / 20 / 24 / 32 px</p></article>`).join('');
fs.writeFileSync(output, `<!doctype html><html lang="nl"><meta charset="utf-8"><title>BOUW icon family</title><style>body{background:#f7f7f3;color:#14271f;font:14px system-ui;margin:40px}h1{font:48px Georgia}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px}article{border-top:1px solid #b89460;padding:16px}h2{font-size:14px}article div{display:flex;align-items:center;gap:24px}p{font-size:11px}svg{flex-shrink:0}</style><h1>BOUW / tekenfamilie</h1><main>${cells}</main></html>`);
console.log(`Catalog: ${output} (${Object.keys(iconArtwork).length} original icons)`);
