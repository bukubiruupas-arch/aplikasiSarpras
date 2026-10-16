// Service Worker Sederhana untuk Aktivasi PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through request ke jaringan
  event.respondWith(fetch(event.request));
});
