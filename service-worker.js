const CACHE = '1662-daily-prayer-v0.2.1';
const ASSETS = [
  './', './index.html', './manifest.webmanifest', './src/app.js', './src/styles.css', './src/calendar.js', './src/office.js',
  './data/psalter.js', './data/lectionary.js', './data/ordinary-lessons.js', './icons/icon.svg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
