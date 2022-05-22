const timestamp = 1653245128454;
const build = [
  "/_app/start-290adf1e.js",
  "/_app/pages/__layout.svelte-b89f32a0.js",
  "/_app/assets/pages/__layout.svelte-83e27890.css",
  "/_app/pages/__error.svelte-47ef0619.js",
  "/_app/assets/pages/__error.svelte-c85d621d.css",
  "/_app/pages/index.svelte-b97b4f89.js",
  "/_app/assets/pages/index.svelte-53f826c8.css",
  "/_app/pages/projects.svelte-58f371d6.js",
  "/_app/assets/pages/projects.svelte-5efa5222.css",
  "/_app/pages/contact.svelte-4b1f9335.js",
  "/_app/assets/pages/contact.svelte-43b08cb6.css",
  "/_app/pages/about.svelte-2b66f1da.js",
  "/_app/assets/pages/about.svelte-44dc8e91.css",
  "/_app/chunks/vendor-817c2599.js"
];
const files = [
  "/.nojekyll",
  "/CNAME",
  "/images/favicon.png",
  "/images/pwa/icon-128x128.png",
  "/images/pwa/icon-144x144.png",
  "/images/pwa/icon-152x152.png",
  "/images/pwa/icon-192x192.png",
  "/images/pwa/icon-384x384.png",
  "/images/pwa/icon-48x48.png",
  "/images/pwa/icon-512x512.png",
  "/images/pwa/icon-72x72.png",
  "/images/pwa/icon-96x96.png",
  "/manifest.json"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
