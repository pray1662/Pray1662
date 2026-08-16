const CACHE = '1662-daily-prayer-v0.2.2';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './src/app.js',
  './src/styles.css',
  './src/calendar.js',
  './src/office.js',
  './data/psalter.js',
  './data/lectionary.js',
  './data/ordinary-lessons.js',
  './icons/icon.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Always try the network first for page navigations. This prevents an old
  // cached index.html from trapping users on a broken release after an update.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Static assets remain cache-first for offline use.
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(cached => cached || fetch(event.request))
  );
});
