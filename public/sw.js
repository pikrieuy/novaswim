// NEXWEAR Service Worker — Cache static assets only
// Do NOT intercept API/Supabase requests
const CACHE_NAME = 'nexwear-v2';
const STATIC_ASSETS = ['/', '/index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip: Supabase API, auth, storage — let them go directly to network
  if (url.hostname.includes('supabase.co')) return;

  // Skip: non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip: browser extensions
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetch(event.request);
        
        // Only cache successful responses for same-origin assets
        if (networkResponse.ok && url.origin === self.location.origin) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        // Network fetch failed (e.g., offline)
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If it's a navigation request (SPA route like /detail/:id), fallback to index.html
        if (event.request.mode === 'navigate') {
          const indexResponse = await caches.match('/index.html') || await caches.match('/');
          if (indexResponse) {
            return indexResponse;
          }
        }

        // Ultimate fallback to prevent "TypeError: Failed to convert value to 'Response'"
        return new Response('Network error or offline', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' }),
        });
      }
    })()
  );
});
