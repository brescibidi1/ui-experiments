import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 5187);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.ttf':'font/ttf', '.txt':'text/plain; charset=utf-8' };
const server = createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405,{ Allow:'GET, HEAD' }); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.includes('\\') || pathname.split('/').some(part=>part.startsWith('.'))) throw Error('Not found');
    if (pathname !== '/' && pathname !== '/index.html' && !pathname.startsWith('/nav_37/')) throw Error('Not found');
    let file = path.resolve(root, '.'+pathname);
    if (file !== path.resolve(root) && !file.startsWith(root)) throw Error('Not found');
    if ((await stat(file)).isDirectory()) file = path.join(file,'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type':types[path.extname(file)]||'application/octet-stream', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff' });
    res.end(req.method==='HEAD' ? undefined : body);
  } catch { res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}); res.end('Page introuvable.'); }
});
server.on('error', error => { console.error(error.code==='EADDRINUSE' ? 'Le port '+port+' est occupé. Choisis-en un autre avec la variable PORT.' : error.message); process.exitCode=1; });
server.listen(port,'127.0.0.1',()=>console.log('UI Experiments : http://127.0.0.1:'+port+'/'));
