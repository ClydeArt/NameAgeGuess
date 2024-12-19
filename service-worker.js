importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://api.agify.io'),
        new workbox.strategies.NetworkFirst()
    );
}