const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetcher', event => {
  const request = event.request;
  if (request.method !== 'GET') return
  
  //Response con una respuesta que esta en cache o hace la peticion en caso de no existir
  event.responseWith(cachedResponse(request));

  //Actualiza cache_
  event.waitUntil(updateCache(request));
});

const precache = async () => {
  const cache = await caches.open(VERSION)
  cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ])
}

const cachedResponse = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

const updateCache = async (request) => {
  const cache = await caches.open(VERSION);
  const resposne = await fetch(request);
  return cache.put(request, resposne);
}