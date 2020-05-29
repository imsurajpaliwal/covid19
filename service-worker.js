if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"57b3ea368642998deb6ea7a97e6245fa","url":"404.html"},{"revision":"f421e8705f913d07193df994d3bf01fd","url":"blog/index.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"57b3ea368642998deb6ea7a97e6245fa","url":"index.html"},{"revision":"428d9be032aad95aa8d64065316c031d","url":"precache-manifest.428d9be032aad95aa8d64065316c031d.js"},{"revision":"cb740fc90ec139afa150d1df7e351d57","url":"static/css/13.93b3b32d.chunk.css"},{"revision":"2f6270eda5270d0b74ae3088a7359a70","url":"static/css/main.962af12f.chunk.css"},{"revision":"a8c031668e9c87f2faa51b48651e491c","url":"static/js/0.4a2f490b.chunk.js"},{"revision":"78fde426f8b37180462f06c26f6a3945","url":"static/js/1.486dccbc.chunk.js"},{"revision":"65fba80779000ca63cdb12afa1e63235","url":"static/js/11.b45c5920.chunk.js"},{"revision":"ef9f8c52d63913a83ca9f0a1b0ebddbe","url":"static/js/12.1af9d03f.chunk.js"},{"revision":"23ed39925e3b2dad3fbe9504a83ae727","url":"static/js/13.d0968699.chunk.js"},{"revision":"d1788d2f6892f63ddb8e04b134f2e735","url":"static/js/14.fe02c85f.chunk.js"},{"revision":"e3e68af286080260af7123e3273d5cfa","url":"static/js/15.472134a7.chunk.js"},{"revision":"589fa41aad4f1d671588824c9b638f64","url":"static/js/2.ff26105b.chunk.js"},{"revision":"163688cc0c221330f40b2f0d3b94b646","url":"static/js/DeepDive.8ad42c23.chunk.js"},{"revision":"100f1933b1638ddb5abfa658d7c9ec81","url":"static/js/Essentials.04e1a0bf.chunk.js"},{"revision":"c2b86b73c085b063dc84e242ef0619b0","url":"static/js/FAQ.451d5dbf.chunk.js"},{"revision":"b8be3ef91bfdadc37a88ad595c9190e7","url":"static/js/Home.4e04b08d.chunk.js"},{"revision":"96a34894b9b9c84b9b0ea67c43b1624c","url":"static/js/main.8b607e61.chunk.js"},{"revision":"e081636c19fc7d73fe15e9c26afa8410","url":"static/js/PatientDB.6c34065e.chunk.js"},{"revision":"e32f8e32d1f15d3ac2f8ccec2b289748","url":"static/js/runtime-main.2807910e.js"},{"revision":"e79d43512370878d3a323050236acdc7","url":"static/js/State.b78ad66c.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
