'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/arabictranslate.png": "71cd6fd3bcea667b7ffed3d126cf9611",
"assets/arabictranslate25.png": "e5a5370cdda42ea09dbf98df0eb561e4",
"assets/AssetManifest.bin": "3adf5ab4aa3a2790c879cce64bdc9d97",
"assets/AssetManifest.bin.json": "6cb76eec74876d0c6fbb4d3396c7681c",
"assets/AssetManifest.json": "97adac74180b93581b60dde60bc3cd78",
"assets/assets/arabictranslate.png": "71cd6fd3bcea667b7ffed3d126cf9611",
"assets/assets/arabictranslate25.png": "e5a5370cdda42ea09dbf98df0eb561e4",
"assets/assets/audit.png": "ac7ce4715ce01c7b09b178e475d18355",
"assets/assets/badge.png": "29528d96928e64f23e895bfb09651106",
"assets/assets/favicon.png": "42f299684828bd0b98a24525d1d843ec",
"assets/assets/icon_trans.png": "f027547bc5fd768354f9e35d00c19dbc",
"assets/assets/logo_foreground.png": "e493e1c4ee60fae383402de6a8e79ae5",
"assets/assets/moon.png": "17a4d79cffe87b9cff4ae12d7c93f4fa",
"assets/assets/morning.png": "dc8287aa186ccb99faca0af7b4733f54",
"assets/assets/sun.png": "d420fe921b7ecb8f8e33c6026bddc5df",
"assets/assets/sunrise.png": "c85c58de8991aed7c78b71c8c06641b9",
"assets/assets/sunset.png": "3c8d08f8cc412e97a87de3eaea16eaf7",
"assets/assets/sunset2.png": "39b3baf16b3334457c5063f95f0b1f9b",
"assets/audit.png": "ac7ce4715ce01c7b09b178e475d18355",
"assets/badge.png": "29528d96928e64f23e895bfb09651106",
"assets/FontManifest.json": "b38cefddbb070d39b4e7d3556888a67a",
"assets/fonts/BrunoAce-Regular.ttf": "62f62c8025fd7e88f0caea7235b950a1",
"assets/fonts/CastoroTitling-Regular.ttf": "28ff7f05cea1e3ee4a9e319cc5e238f5",
"assets/fonts/Hafs.ttf": "a1ffd466ac6f924bff676fe0e828c4cf",
"assets/fonts/MADDINA.ttf": "5c1fbb6f9a1064da1779be00d5269839",
"assets/fonts/MaterialIcons-Regular.otf": "881d5c889bffdbaa1d7f9a61d5c6603b",
"assets/fonts/Nabi.ttf": "8b594cca9c55edaa5577afd7aca395d3",
"assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/icon_trans.png": "f027547bc5fd768354f9e35d00c19dbc",
"assets/NOTICES": "1874ebf3b1d336822ca24510dcc26e7a",
"assets/packages/country_state_city_pro/assets/city.json": "3a7a4886baa0f1d4f3dc40a72dc35885",
"assets/packages/country_state_city_pro/assets/country.json": "de2a8a8da3cce0928ec6939e49dba675",
"assets/packages/country_state_city_pro/assets/state.json": "e4745737737ccbda1213e0af9839925f",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "14f5605d06c3713d13eeab99e2427c55",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "8a498250f19fa3c6fbb8a7b8265bf25a",
"assets/packages/flutter_islamic_icons/assets/fonts/IslamicIcons.ttf": "83caab3a2c2b140f80725df6ac6e80cc",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/arabictranslate.png": "71cd6fd3bcea667b7ffed3d126cf9611",
"assets/web/assets/arabictranslate25.png": "e5a5370cdda42ea09dbf98df0eb561e4",
"assets/web/assets/audit.png": "ac7ce4715ce01c7b09b178e475d18355",
"assets/web/assets/badge.png": "29528d96928e64f23e895bfb09651106",
"assets/web/assets/icon_trans.png": "f027547bc5fd768354f9e35d00c19dbc",
"assets/windows/app_icon.ico": "3ae5172e961eb3e6b04105ac0a1464d8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "20dd5d47c3430626047a1149199625d9",
"icons/Icon-512.png": "59487f8f1f228d43326dc3da48a41be9",
"icons/Icon-maskable-192.png": "20dd5d47c3430626047a1149199625d9",
"icons/Icon-maskable-512.png": "59487f8f1f228d43326dc3da48a41be9",
"index.html": "00937411163649c843e9a9725c05e972",
"/": "00937411163649c843e9a9725c05e972",
"main.dart.js": "5c51a3a3d02744b0f012fe0abaa0054c",
"manifest.json": "f4bc405a6a8352fed77311de35cc327e",
"version.json": "ec4a6f789478326163f2d73226060210"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
