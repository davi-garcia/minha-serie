self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('my-cache').then(cache => {
          return cache.addAll([
              '/index.html',
              '/styles.css',
              '/script.js'
          ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request)
          .then(response => {
              return response || fetch(event.request);
          })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
              console.log('Service Worker registrado com sucesso:', registration);
          })
          .catch(error => {
              console.error('Registro de Service Worker falhou:', error);
          });
  });
}