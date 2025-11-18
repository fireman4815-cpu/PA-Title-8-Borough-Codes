// Basic service worker to enable PWA installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Network-first strategy
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
