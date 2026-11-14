import { mkdir, readFile, writeFile, copyFile, lstat, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../',import.meta.url));
const output = path.resolve(root,'site');
if (path.relative(root,output) !== 'site') throw Error('Unexpected output directory');
try {
  const info = await lstat(output);
  if (info.isSymbolicLink() || !info.isDirectory()) throw Error('Output must be a normal directory');
  if ((await readFile(path.join(output,'.ui-experiments-output'),'utf8').catch(() => { throw Error('Refusing to replace an unmanaged directory'); })) !== 'generated') throw Error('Refusing to replace an unmanaged directory');
  await rm(output,{ recursive:true });
} catch (error) { if (error.code !== 'ENOENT') throw error; }
await mkdir(output,{ recursive:true });
await writeFile(path.join(output,'.ui-experiments-output'),'generated');
await copyFile(path.join(root,'index.html'),path.join(output,'index.html'));
let count = 1;
async function copyDirectory(source,destination) {
  await mkdir(destination,{ recursive:true });
  for (const entry of await readdir(source,{ withFileTypes:true })) {
    if (entry.name.startsWith('.')) continue;
    const from = path.join(source,entry.name), to = path.join(destination,entry.name);
    if (entry.isDirectory()) await copyDirectory(from,to);
    else if (entry.isFile() && /\.(html|css|js|svg|ttf|txt)$/.test(entry.name)) { await copyFile(from,to); count++; }
  }
}
await copyDirectory(path.join(root,'nav_37'),path.join(output,'nav_37'));
console.log(count+' fichiers statiques prêts dans site/. Brouillons et ancien dist exclus.');
