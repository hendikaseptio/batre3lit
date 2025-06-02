self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('batre3lit-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './site.webmanifest',
        './android-chrome-192x192.png',
        './android-chrome-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
