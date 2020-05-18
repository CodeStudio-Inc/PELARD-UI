

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
'images/EU.png',
'images/gwed.jpg',
'images/hurifo.jpg',
'images/onbod1.png',
'images/onbod2.png',
'images/onbod3.png',
'images/pelard.png',
'images/sol.png'
];


self.addEventListener('install',event =>{
    console.log('Service worker install event!');
    event.waitUntil(
            caches.open(cacheName)
            .then(cache =>{
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('activate', function(event) {

    console.log('sw activated');

});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
          .then(cache => cache.match(event.request, {ignoreSearch: true}))
          .then(response => {
            return response || fetch(event.request);
          })
    );
  });
  