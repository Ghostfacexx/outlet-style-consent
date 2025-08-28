const CACHE_NAME = 'outlet-style-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  // Add critical CSS and JS files
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    // Cache external images and fonts
    if (event.request.url.includes('unsplash.com') || 
        event.request.url.includes('theoutnet.com') ||
        event.request.url.includes('fonts.googleapis.com')) {
      event.respondWith(
        caches.open(DYNAMIC_CACHE)
          .then((cache) => {
            return cache.match(event.request)
              .then((response) => {
                if (response) return response;
                
                return fetch(event.request)
                  .then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                  });
              });
          })
      );
    }
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Fetch from network and cache the response
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache error responses
            if (!networkResponse.ok) {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(event.request, responseClone);
              });

            return networkResponse;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
          });
      })
  );
});