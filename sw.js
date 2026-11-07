// Mocidade Gideões — cache para abrir rápido e funcionar sem internet (Bíblia, Harpa, cifras).
// Abre o que está guardado na hora e atualiza por trás: a versão nova aparece na abertura seguinte.
const V = 'mg-v1';
const ARQUIVOS = ['./', 'index.html', 'manifest.webmanifest', 'apple-touch-icon.png',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png',
  'fonts/inter-400.woff2', 'fonts/inter-500.woff2', 'fonts/inter-600.woff2', 'fonts/inter-700.woff2', 'fonts/inter-800.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;   // a planilha (outro endereço) nunca passa pelo cache
  const chave = r.mode === 'navigate' ? 'index.html' : r;
  e.respondWith(caches.match(chave, { ignoreSearch: true }).then(guardado => {
    const rede = fetch(r).then(res => {
      if (res.ok) { const copia = res.clone(); caches.open(V).then(c => c.put(chave, copia)); }
      return res;
    }).catch(() => guardado);
    return guardado || rede;
  }));
});
