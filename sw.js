const cacheName = "p-cultural";
const filesToCache = [
    "/",
    "/index.html",
    "/ar.html",
    "./js/index.js",
    "./js/lib/aframe-ar.min.js",
    "./js/lib/aframe-extras.loaders.min.js",
    "./js/lib/aframe.min.js",
    "./css/style.css",
    "./assets/icons/android.svg",
    "./assets/icons/ios.svg",
    "./assets/icons/logo.svg",
    "./assets/icons/info.svg",
    "./assets/icons/team.svg",
    "./assets/icons/github.svg",
    "./assets/models/space.gltf"
];

self.addEventListener("install", event => {
    console.log("[ServiceWorker**] - Install");
    event.waitUntil(
        caches.open(cacheName)
          .then(cache => {
            console.log("[ServiceWorker**] - Caching app shell");
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", event => {
    caches.keys().then(keyList => {
        return Promise.all(
            keyList.map(key => {
                if (key !== cacheName) {
                    console.log("[ServiceWorker] - Removing old cache", key);
                    return caches.delete(key);
                }
            })
        );
    });
    event.waitUntil(self.clients.claim());
});

