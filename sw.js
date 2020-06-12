

const cacheName = "cache-v1";
const resourcesToPrecache=[
'/',
'index.html',
'register.html',
'report.html',
'submitted.html',
'forgot.html',
'settings.html',
'css/auth.css',
'css/styles.css',
'css/settings.css',
'js/cardtoggle.js',
'js/login.js',
'js/recovery.js',
'js/register.js',
'js/report.js',
'js/idb.js',
'js/settings.js',
'images/avatar-9.png',
'images/EU.jpg',
'images/gwed.jpg',
'images/hurifo.jpg',
'images/onbod1.png',
'images/onbod2.png',
'images/onbod3.png',
'images/sol.png'
];

self.addEventListener("install", async (event) => {
  console.log('Service worker installing!');
//”caches” is an instance of the CacheStorage
//the method “open” returns a promise that resolves to 
//the cache object matching the cache name
  const cache = await caches.open(cacheName);
  await cache.addAll(resourcesToPrecache);
  //allow the newly installed service worker to move on to activation
  return self.skipWaiting();
});

// self.addEventListener('install',event =>{
//     console.log('Service worker install event!');
//     event.waitUntil(
//             caches.open(cacheName)
//             .then(cache =>{
//                 return cache.addAll(resourcesToPrecache);
//             })
//     );
// });


self.addEventListener("activate", event => {
  self.clients.claim();
  console.log('sw activated');
}); 

// self.addEventListener('activate', function(event) {

//     console.log('sw activated');

// });



// //serviceWorker.js
// self.addEventListener("fetch", async event => {
//   const req = event.request;
//   const url = new URL(req.url);
// //check if the request is requiring data from our own application(location)
//   if (url.origin === location.origin) {
// //check our cache
//     event.respondWith(checkCache(req));
//   } 
// //else, fetch from the network and cache that result
//   else {
//     event.respondWith(checkNetwork(req));
//   }
// });

// async function checkCache(req) {
// //open our cache
//   const cache = await caches.open(cacheName);
// //check if there’s data there that match with what the request requires
//   const cachedData = await cache.match(req);
// //if there’s data cached, return it, else fetch from the network
//   return cachedData || fetch(req);
// }

// async function checkNetwork(req) {
// //open our cache
//   const cache = await caches.open(cacheName);
// //try to fetch data from the network
//   try {
// //save the fetched data
//     const freshData = await fetch(req);
// //save a copy of the response to your cache
//     await cache.put(req, freshData.clone());
// //send the response back (returned the fetched data)
//     return freshData;
//   } 
// //if we are unable to fetch from the network (offline)
//   catch (err) {
// //match the request with data from the cache
//     const cachedData = await cache.match(req);
// //return the cached data
//     return cachedData;
//   }
// }
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
          .then(cache => cache.match(event.request, {ignoreSearch: true}))
          .then(response => {
            return response || fetch(event.request);
          })
    );
  });
  
 