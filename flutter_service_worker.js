'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "571ea836ed408e3c44d8abd42580f778",
".git/config": "4e8ac0c718139d01f97f7d111c4c43c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6ec70cf374f4ff787cc096a3b0a864cd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "71c6a48c50ccb3ea76dd812cfb10837b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e17fbe71411721fca20e211f2336cfb",
".git/logs/refs/heads/main": "8df35bcedaa2f78b970be2ceb8fcc023",
".git/logs/refs/remotes/origin/main": "7b677907b763afc09d31e55d3264704c",
".git/objects/05/9842dba8cf680696f6e0c5c11d90f36218be2b": "0c6b8f31d69bd422b4e9c4fb018a9a7d",
".git/objects/09/d0a18145d75c4a51a25f441172807bc3e965a6": "f0ff8474b12404dabdfec51c13a9b939",
".git/objects/0a/3fe71dff6965deac91bac53de6feb8b9da1ed7": "7feb3988228d78f876207f48c26b24de",
".git/objects/0f/d24ab0dc03b8e3d22bab678c45adf476cefb8f": "dc83a66618faf143bb012a5ce75eaa46",
".git/objects/11/fb4b99202384d90b5638554159ab06cfd9bec3": "08737d768675065e84bad539c8387347",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/31/c4c50bf6a6f76105fdde80fa757990d79b5ae6": "7db4c2ee875a6fc79ee50083247c1ed4",
".git/objects/35/8d9e0d69a8c3b65df37508915f178e6ab2ccc6": "be32fca7438aa16c2d340e8942b9be03",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/cd7f60d99a367f2df01b8d8526f229253b00f9": "84f0976e3dba41baa2287387b1a2a07e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/e85d8dae5db98fe054d4a5211821afa40c7c15": "cc1352bf5c661ea63f2e4590723e6683",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5d/d5f0fcc6df58e32c3e13daad7e584a45b7eda8": "d045bdb82952386e0aed2150e88bd257",
".git/objects/5f/c5a44277b8136c0a4ca6b99131f380549e025c": "0b830ee079ecb4fd8e6a4b4f5c51f856",
".git/objects/65/84ba3a69da01ed52f4994e2842f0b71bc0d410": "65fed2267877dcccff6fc2ddfb623589",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/419ad7bc0993bbdb6457457a6af1e02b71f1a1": "50f2605950129371e027878559ff0da8",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/e97b82a548067784c383bedebad3e1633fdc5d": "53a313f5b14fad0f5face10d133ff57a",
".git/objects/7f/f9a67e76264ed1d6425a912ae05e3a35e91dad": "b3b9f058b3b44b32d7cb2e5d8fa0f996",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/e6f486505314601d9aa15f474171c7a8dca4d6": "b9142f5e11ae297b56cc2c64d1d6c583",
".git/objects/98/ff618902232a7be5167fd308c8b8c21cdef11f": "8140945a915f680f2778949a25929598",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ad/267d901596f661756896ab82ee01f15ae8f62a": "8975c0536335a78dbc3b369378a31969",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/38f46ee3c6772cc0862c04ad4a20fb82e4ae19": "557c9550771fc5e7636c1c5d3d247bde",
".git/objects/cd/1d501bf4eaf5ed9067ee6ca97ef72642d8afdb": "005c6ed70404eef36d69afbef2714c7d",
".git/objects/cd/a2e706a944a1f937126f236f7f6c05677ba059": "fedf61c3a7c5c3509c676c95a241b44b",
".git/objects/ce/b782df26e723120adaa4cc84e6dda627acb38e": "40658ff36fca6a82f808039efc4a76c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/7ed07015ced523acefff82ef55bd0a68744ab7": "4b768df4b762967a7e269ef733c111e5",
".git/objects/f2/0b36af5b73f8e97e129ca06cf185be896aa65f": "c1b98bba1849a89b780c563615380bd9",
".git/objects/f9/45f6407d924d94f0bf429892140c3bd07e43ee": "82abc045fe6ff2647047f8922f504f93",
".git/refs/heads/main": "b971f1870a980a79414f4084eccc4608",
".git/refs/remotes/origin/main": "b971f1870a980a79414f4084eccc4608",
".history/index_20230418122352.html": "e66a04d43da86d6dabb8d69ef8eb6c31",
".history/index_20230418122539.html": "396a6d379dcccfb799514be6ad49c36d",
".history/index_20230418122541.html": "e66a04d43da86d6dabb8d69ef8eb6c31",
".history/index_20230418122546.html": "682e96dc84c21bba4827489f48bc3d45",
".history/index_20230418123041.html": "682e96dc84c21bba4827489f48bc3d45",
".history/index_20230418123042.html": "682e96dc84c21bba4827489f48bc3d45",
".history/index_20230418123138.html": "de4791639b52e9cfd9355c824b549983",
".history/index_20230418123140.html": "682e96dc84c21bba4827489f48bc3d45",
".history/index_20230418123157.html": "de4791639b52e9cfd9355c824b549983",
".history/index_20230418123202.html": "682e96dc84c21bba4827489f48bc3d45",
".history/index_20230418180938.html": "0b31a019338846eaca1f5c92aa7ebc46",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "29da5079670cbb3124d5d890029a97d8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b795400c8fc78df7d2ae7900d85de144",
"/": "b795400c8fc78df7d2ae7900d85de144",
"main.dart.js": "ca6829ff29c120dafe009e629d3d214c",
"manifest.json": "06d64ef752dc3b57722faa73ed0b7f3e",
"README.md": "229a40c02b3d26ce7ea42d1b66907bbb",
"version.json": "5182c42584c4f2be4f2171e590c45b7d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
