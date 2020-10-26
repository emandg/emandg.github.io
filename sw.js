const OFFLINE_VERSION = 4;

// const cacheName = 'escnet-pwa';
// const filesToCache = [
//     '/',
//     '/index.html',
//     '/css/style.css',
//     '/js/main.js',
//     '/images/logo.png'
// ];

// /* Start the service worker and cache all of the app's content */
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(cacheName).then((cache) => {
//             return cache.addAll(filesToCache);
//         })
//     );
// });

// // /* Serve cached content when offline */
// // self.addEventListener('fetch', function (event) {
// //     event.respondWith(
// //         caches.match(event.request)
// //         .then((response)=>{
// //             return response || fetch(event.request);
// //         })
// //     );
// // });
// self.addEventListener('fetch', event => {
//     //Let the browser do its default thing for non-GET requests.
//     if (event.request.method != 'GET') {
//         console.debug("Let the browser do its default thing for non-GET requests.");
//         return;
//     }

//     event.respondWith(async function () {
//         console.debug("Prevent the default, and handle the request ourselves. ", event.request.url);
//         console.log("Try to get the response from a cache.");
//         const cache = await caches.open(cacheName);
//         const cachedResponse = await cache.match(event.request);

//         if (cachedResponse) {
//             console.debug("If we found a match in the cache, return it, but also update the entry in the cache in the background.");
//             event.waitUntil(cache.add(event.request));
//             return cachedResponse;
//         }

//         console.debug("If we didn't find a match in the cache, use the network.");
//         return fetch(event.request);
//     }());
// });