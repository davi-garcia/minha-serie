self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('my-cache').then(cache => {
          return cache.addAll([
              '/minha-serie/',
              '/minha-serie/index.html',
              '/minha-serie/styles.css',
              '/minha-serie/script.js',
              '/minha-serie/manifest.js',
              '/minha-serie/service-worker.js'
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

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('v1').then((cache) => {
          return cache.addAll([
              '/minha-serie/',
              '/minha-serie/index.html',
              '/minha-serie/styles.css',
              '/minha-serie/script.js',
              '/minha-serie/manifest.js',
              '/minha-serie/service-worker.js'
          ]);
      })
  );
});