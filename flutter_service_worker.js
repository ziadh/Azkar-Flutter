'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a26ea85d880ea6db722c3fc029e243d5",
".git/config": "4e8ac0c718139d01f97f7d111c4c43c0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "597484083b45792b221b77211c346f8e",
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
".git/index": "333a60e68f483b77eaf4784d427dd2a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8377f530afb8410da025ca8f045686fe",
".git/logs/refs/heads/main": "ace91053aacd74843b0f09c58a2b279c",
".git/logs/refs/remotes/origin/main": "be2941e86d64494d9d39165c609c69ea",
".git/objects/05/9842dba8cf680696f6e0c5c11d90f36218be2b": "0c6b8f31d69bd422b4e9c4fb018a9a7d",
".git/objects/09/d0a18145d75c4a51a25f441172807bc3e965a6": "f0ff8474b12404dabdfec51c13a9b939",
".git/objects/0a/3fe71dff6965deac91bac53de6feb8b9da1ed7": "7feb3988228d78f876207f48c26b24de",
".git/objects/0c/3a0b87203e44e80362c121cc9f76bc7dd8d867": "0e7be0bcc7346df1b1fdcae1e32aa46d",
".git/objects/0f/d24ab0dc03b8e3d22bab678c45adf476cefb8f": "dc83a66618faf143bb012a5ce75eaa46",
".git/objects/11/b091cdb141e1ecc9ace36a714896201bd97f53": "3af11932d47e875c095c6181a474969e",
".git/objects/11/fb4b99202384d90b5638554159ab06cfd9bec3": "08737d768675065e84bad539c8387347",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/21b06ea7bd9bcfff3b680650d19e669dcd2e4c": "09352227af69e915831cedc217c0fef2",
".git/objects/15/bc2751911f654ad2405c3491cd4819a5c9796d": "18b059645ae773b025986eefbdeaf757",
".git/objects/1d/1f896a9cd94ae3708398ffbb1de70431086e5c": "a7f2a29114714cb7ef99fd711ffc79fa",
".git/objects/1d/c86fd56c75274da5c486dbbf9ca3eba33f18de": "f12486a1e3561f5ec68720a8699ec5fd",
".git/objects/1f/bd19a892b5c8b96761ce3bf7449ff932a097d3": "d6676b848f36dd8a4bbdab92dd3d3af5",
".git/objects/25/4a96eb1b4535258ff97e6efb47819e38a112ef": "704ca004a02f4dbc126f85cd2ed2a5f7",
".git/objects/28/2ffd5e9c499bbea19a0aea1a04dfd3f8b7d5c2": "a4c1e21cd0a562ebb226dc44ddaf35ad",
".git/objects/2c/9d378f7cac9866f9a0e4b5f12ad2420b5ae2d1": "ec05188198f148bfe76cfb34521cab99",
".git/objects/31/c4c50bf6a6f76105fdde80fa757990d79b5ae6": "7db4c2ee875a6fc79ee50083247c1ed4",
".git/objects/34/59a92c8853a28cad13b034846ddd5940aee2dd": "f5104392e16ebdc0f49ea617ab6eeb91",
".git/objects/34/8bcd5cfcf980e7e67906c1c17b243583d12845": "211ec6889f12e1a97801d85e3f4d1e0c",
".git/objects/35/8d9e0d69a8c3b65df37508915f178e6ab2ccc6": "be32fca7438aa16c2d340e8942b9be03",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/91f889b422d8de99e85764e77fd830d6bd6a68": "74cc2d7e9582511c5dd83e3b06194e99",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/9dc2e942518f8482c3b96aebaf8a9bb7071ffd": "79b826ec13ae8b4d6e285d51dfbbe5e9",
".git/objects/3f/560c1d19399d42c977b304ac03e013eafc6757": "4b7a27da14d6dd95fd13f22b9d19dcdb",
".git/objects/41/30d870a06cbbbd889e37787509b3ae76861450": "72529265e3e420470c06d8e33e921edc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/26905d0d43a3116d2239306f5d822a9aee6ccc": "f9aab9765c49466627593e2ed7f39c2a",
".git/objects/44/69dcf286148140ff9078f4b09f9d6f905429e8": "837d3bce61e825d560df8cda0dc04231",
".git/objects/46/cd7f60d99a367f2df01b8d8526f229253b00f9": "84f0976e3dba41baa2287387b1a2a07e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/e85d8dae5db98fe054d4a5211821afa40c7c15": "cc1352bf5c661ea63f2e4590723e6683",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/82e4683fd432bdaba78348cb763cec8e21cafe": "27d370f08d80c5306f372dd395415ebd",
".git/objects/5d/d5f0fcc6df58e32c3e13daad7e584a45b7eda8": "d045bdb82952386e0aed2150e88bd257",
".git/objects/5e/d5fbc7dcc07a22806938de6fa9a5943809ddb5": "096f047020bcb82ca1e8a6369d61d762",
".git/objects/5f/c5a44277b8136c0a4ca6b99131f380549e025c": "0b830ee079ecb4fd8e6a4b4f5c51f856",
".git/objects/65/84ba3a69da01ed52f4994e2842f0b71bc0d410": "65fed2267877dcccff6fc2ddfb623589",
".git/objects/6a/00098f4de55a6bf762691da232676ff530cac3": "79b9f2777621d99a386a40ada9029810",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/419ad7bc0993bbdb6457457a6af1e02b71f1a1": "50f2605950129371e027878559ff0da8",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/e97b82a548067784c383bedebad3e1633fdc5d": "53a313f5b14fad0f5face10d133ff57a",
".git/objects/7f/f9a67e76264ed1d6425a912ae05e3a35e91dad": "b3b9f058b3b44b32d7cb2e5d8fa0f996",
".git/objects/81/cffe32ae267c5dc62e19fde6c43e380ffc0b66": "ea1ed3db5fed671666f325dfb4b21527",
".git/objects/84/3422e74df4299b615aa012d37e754388ecc63f": "6dddea556cefa4dc593804d010ee36ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/c93b4f8f9d2063e07d1d1f2784f11b94e16e73": "82733eb7e9938f16005f06ce624b6850",
".git/objects/92/d9caab4120924ce9a024caba3a2ac6e5a73b73": "b3066e5cb200bd9c5383f069c9c89ede",
".git/objects/93/e6f486505314601d9aa15f474171c7a8dca4d6": "b9142f5e11ae297b56cc2c64d1d6c583",
".git/objects/98/ff618902232a7be5167fd308c8b8c21cdef11f": "8140945a915f680f2778949a25929598",
".git/objects/9a/ad52d05996e69734c722c30d72ebb6b250bc75": "74182d5ec2ae35f919da58090c797f9a",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a7/5dc72d3bed8cb5642cb3713453f362843adbf5": "6b1e29d5dba3fcfe0bda7e4fe4d6dfd8",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ad/267d901596f661756896ab82ee01f15ae8f62a": "8975c0536335a78dbc3b369378a31969",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/0d3039c6dcbd09b24838992e2d02ef9fdb7547": "facb4957ce98b21b3c35cbaca2eb7420",
".git/objects/c1/38f46ee3c6772cc0862c04ad4a20fb82e4ae19": "557c9550771fc5e7636c1c5d3d247bde",
".git/objects/c3/6f2f0010d9a8d200e2c06bd3373d62bd76751f": "c8422ea6274a8152381db885fb21b3b2",
".git/objects/c5/acb0fd98f6c933d8eb0524a8c4bbe41a61ea4f": "4fae1f645d57dc86df77b4c8c713277e",
".git/objects/cd/1d501bf4eaf5ed9067ee6ca97ef72642d8afdb": "005c6ed70404eef36d69afbef2714c7d",
".git/objects/cd/a2e706a944a1f937126f236f7f6c05677ba059": "fedf61c3a7c5c3509c676c95a241b44b",
".git/objects/ce/b782df26e723120adaa4cc84e6dda627acb38e": "40658ff36fca6a82f808039efc4a76c1",
".git/objects/d3/5f1b5d38185635c3d2fa1ebf8d0b90829cebdc": "4f081b3f210908febee1d6b3884e913c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/36effcb86de9aa64db703c3ba6b08faaa2112f": "6c921fe3469881ef914380a2392f5b68",
".git/objects/da/1dd269bcef26834e3c46a1e7b44cef60a468b4": "5f46d541144397e61b815b3f8df9377a",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/01e9a663f1b08dff4efafc3052b210a9630f0d": "5f21f2248c186a662f892ef4cdb05677",
".git/objects/ee/6e3529f32d36583bd87e03fb9486b920fd7c45": "47f6f9bb5432f26bb77f929702a5d906",
".git/objects/f0/7ed07015ced523acefff82ef55bd0a68744ab7": "4b768df4b762967a7e269ef733c111e5",
".git/objects/f2/0b36af5b73f8e97e129ca06cf185be896aa65f": "c1b98bba1849a89b780c563615380bd9",
".git/objects/f9/45f6407d924d94f0bf429892140c3bd07e43ee": "82abc045fe6ff2647047f8922f504f93",
".git/refs/heads/main": "00eba6ec8a35c4fc6537644ad1a4012c",
".git/refs/remotes/origin/main": "00eba6ec8a35c4fc6537644ad1a4012c",
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
".history/index_20230418213039.html": "4a56ef8c091e1c8d1c3e464bd9cf264e",
".history/index_20230419001454.html": "e98120c4f7e2ae4a9700860b5a8d2249",
".history/index_20230419150849.html": "2962fb67cf08b50a9d1f1416d9ec2874",
".history/index_20230419152618.html": "89b862f3901e4aff15ee06dc046975e7",
".history/index_20230419152709.html": "0bf9fb716e0ce6391fa4fa2db610501c",
".history/index_20230419152710.html": "89b862f3901e4aff15ee06dc046975e7",
".history/index_20230419153640.html": "71a560aed9eb9e3fc9a72a68f0fe734a",
".history/index_20230419154440.html": "fd85e7b5fcc85a9917eecae830968ccf",
".history/index_20230419160606.html": "602de08d6c4e82d67e013a4f91fa0578",
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
"index.html": "ee772f8666957e725910a3756680518e",
"/": "ee772f8666957e725910a3756680518e",
"main.dart.js": "709adbfd966c7343a1c0971eb977d2f1",
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
