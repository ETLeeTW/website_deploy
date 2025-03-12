'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "25ecd5a2b5e1288233b4b21af02ae8dc",
".git/config": "ae9bbaa0a0cf71874dc0f75b00bf214f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1b665c595728bd88aa5c209861bec490",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2eddb6ddfa32c4b08dff928fd7145e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "941f86d3c9bc17efbee32eed84c2c161",
".git/logs/refs/heads/master": "941f86d3c9bc17efbee32eed84c2c161",
".git/logs/refs/remotes/origin/main": "e435c3ec91955cd36de63e460082dc85",
".git/logs/refs/remotes/origin/master": "9e7fac9fc08778f3d2932454a4ee758a",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/97b5ef8777e824275fc886e24b3c0ed90f99a0": "efb2f29cb55321a025aacdbdaf3d695a",
".git/objects/0b/0e8c243fcd7843d30beaef4bfb73f53649d135": "8fa3d7758eec17629153ed28ed331c6c",
".git/objects/0c/cf332a40fba9f91d1be3984cbcc252abaa8c0f": "0296a479ba2f6b2aef4c072df48ba62c",
".git/objects/0e/aabe61902fed1ce628ed804290cb77d42b48f8": "82f0a3b1751458b352c99de626a52317",
".git/objects/11/79ab9e238f483f089ff3a219b10b88748021f2": "431438adbb72c38ecdef6168ec24db88",
".git/objects/12/aa5c11f9643924e0d5b7d773759034dbb943e8": "68734e4d86e49cbab9f0d97d9d6d5744",
".git/objects/1c/c02aafdc0718d4828fb95f366bdf9cc39faca6": "b3272624439c3e08b5af13ef09195769",
".git/objects/1d/c77ba228e19c9fc1a5ab4309098eb389d44f51": "fc52bdb72d3c6ccc23606574ec7daf9f",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/23/dc42aebc3085726f67e131809121c8a7807a99": "e3c2f2a6617a7b7fdee596a5c383778b",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/18a68d738ea2e3d18bd4c55167a840e605d496": "077f08e6a3585a3acea2cb5a8b1c0e3b",
".git/objects/30/c1b404cbfbccdea1b3829c783d8d739f5120c8": "df4b5638b4926479eb098f4dffe0314b",
".git/objects/31/7d0453444c8f8e98c6c69c3e2b4e33da5e2ef2": "d3d4d1cd225bff7020d90c37f40b8d2e",
".git/objects/35/b9575723b39bc3271d3bc1eb7dcd4ecd82ec16": "67aeb8ef2bc6ae501c9db52627a48ccb",
".git/objects/38/7a4be88538183a605014383da72a8e268a4a68": "2d4b165003d17fc77fdbdae4f0443a3f",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/e4e26357c6cb8025291cbd3cfaca6168d26ee7": "e567f664d4d2b3d5b35a081d526e26a7",
".git/objects/3c/128d6ba881b4ca5deb4fbf6bf84569fb3b9074": "d945034d60288a984cdbedaa6882ac1a",
".git/objects/3c/160ecf865f6874013a9368a549b1d05026306e": "57f0d0f1fd5baf45d9c001abb8f6ed7f",
".git/objects/3c/1a8a2c1f35c8dcb9baffff2cf8347c5ba29e6c": "c9b2085cff434e562f994d7ac1355b83",
".git/objects/3f/d4b8c7ae97ea110d02d561cab7bb9dbf6a25d7": "2a75a0ab29475800277918fbf4ad0b9d",
".git/objects/41/87c56a162422cb1fe40bba30f7eb3587f667fc": "05dd81fed507c5bfdba7e4e2f09014be",
".git/objects/42/54d17e055f5827c97ae68eaea2c23d88aa5015": "40390ea11b849bf8f189927abd3a614a",
".git/objects/42/9f46dd43af33b2f03f3b16d40d0f50eff5b1c0": "f45c894da138d272e78bbe159ec50392",
".git/objects/45/56c4a18f6f5c419038e307598a5f6621cdcc11": "8cb5f3d5f137502bc87985cebf0f806e",
".git/objects/46/59514a1ba9e4ca56a930a170f858976c4a466d": "9c8021ebd46053d5b1b69c788aa06165",
".git/objects/47/ea10e13b842c7fc5d10fa9fcad8bfc59786ba7": "7f9bf0ddfb0dfc2f5393688ef48f6b0a",
".git/objects/4b/c8483c2acba5b01ab6a87dc56c126d4ce78d29": "9cda382f735ad8c06bdda483c5453523",
".git/objects/4f/18e5a817b6dd106dfb3120d683cbcc8741acfc": "1eec2e0a69d49edec2f807dce1751660",
".git/objects/52/436c528115d9b73957e0a84b958d3a10b1f93f": "a1e9bb0392975e655886f3b93dae4493",
".git/objects/5a/289ee8345c8867d0ccb18a8665598963ee72a9": "103f3a114d8779409102dd0172f08766",
".git/objects/5a/94d46abc1829c01974aaf3da622a8f6cbbf406": "f667d52d66d60866c9d8985888652330",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/073df88d75336e56184742212e26560cf47dcc": "a74e1da02a2e053c1b1b39dc6bff6a4f",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/5ce620fa210fbb0874f4ede08d44d2b9f4ffa8": "6ba73b3d54f45097aa656a9f08b86f17",
".git/objects/66/02ecd4bb511f72f74e77d37508799905eecc9e": "63c48dac12a7d100c5fe2781681ab736",
".git/objects/6c/4fd12f295149ad2e69e7bb198180d76496b244": "07b11b4f7f58acdeb6291933a16d8e2c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/bea7414ac602d5240bc0ded649f7d47275c3a4": "16081be6b00cfaaf6a720c9faa40814f",
".git/objects/71/7b262738c60af91d72b1f533bdef52f0d987e3": "7520c6bc0854dece2cc2296c6205e971",
".git/objects/73/3db85dafce41b49631affea4859fa12d1a863e": "817115283b2106126138dfb8396bc168",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/79/7e490e09ba9853d9eae08daf09d63249da1c5f": "2704dcb6150eca93bf91cfb90b38e6d0",
".git/objects/85/779be8e8cf1a3300dc0e13fbcab2b701b3c8ed": "9ae5c14da675db93d5e01a30e1cfca11",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/96/d39536d9eb0ec82cf5f7f23563f6e78037105f": "fa12efea55dab4a46011b81a90d97d39",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/65ab235d698aaf9e4fd22db19ad7ee7e49bf45": "183ada3e885aca9eb390626f743fc634",
".git/objects/a9/89c7f37edae7e36386d98b8b509249f071d752": "06356db9c3194e8d59bf4cb45cae19be",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/7618d3c103abc59520720e4594f72233260d90": "df3c5c1389e073716bbd6ffaec8d104f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/382e5194fdd60783583bc11ee4224e3c6c4ce4": "145b3f3c73dfcefd1e4c0388de82e4f8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e0d1c97425c625704f0a621e4b8b9fb2f1ae70": "7ffac0702016e987c462bf16436729b2",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/1bc21c5c284ae1e535e6901aa051ac3d1a3c24": "51508c42b05390c3e7510c36e5b1a974",
".git/objects/cb/90f21a83735c9b5887fc40d90264d95a85ad7b": "03cbdf472c5269336f1528fbaf4a5137",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d2/0f6854fc72394792dfd4f89b036b6c6d7e20a5": "a24f82cc1abffd05aaea98e77077a316",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6f991f17d43f329485cfc3c3298056a452c1c5": "6b2b3073b8573ff13c91b9c10af7aab1",
".git/objects/d4/a8b16dce27145df2716611ae7db0dea27b4784": "db8389f5201417816379e7602a916fa4",
".git/objects/d5/73e62bf00dd5f2f3a1caab98f04a4cd10892f5": "cf0ecc221c12b2316dfae4ba89433d25",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9472b355612903fbbaa01ef9ae383741cae9a7": "bf637bac81180e319069d05554b2e468",
".git/objects/d9/bc678321d322192a3cf874f2ca947569def0f8": "5b4a2850d72b42a6dfa98aee207b8245",
".git/objects/da/7d39c35e7df15bde1e738e8089dbfca6b9d8d8": "a88016c58be2f3cb8ed3064d4fa26277",
".git/objects/dc/3a98d3b7ba467dd3bb76f9c07e404038ad37a3": "9d43e9f09d6504dc1563542191b312ca",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/9a1576d22dd6d1bfa45771f640e1c4e5594995": "848f2044ebd1aa8c3458a4e0fd7607a8",
".git/objects/e4/6d42f5eaf6caa89c14bf94dce65069e583e3d3": "35a02da2ebddc582d649d1d12d80341f",
".git/objects/e5/612c8ec9ad0db7f011721eadbc45011220660e": "e8d776eba4696a9282841f57e44afb2b",
".git/objects/e5/63bd2b4655fe634d81e7046409b25c14232f78": "4a0df57f89bdb32254dcf3f79db3faaf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/9a66f012d83cf2504c34be663a47cb35f1626d": "7efd11165d67a0bf37cd14f48d7c8cf9",
".git/objects/f4/adef9c76be0225bb05339fddb754b4acd5ca98": "43154baf6c8c29a05e5ae92e25cbc8e5",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/fb/d90c9fa7f0910a12d7c28267572d86078230a6": "249e318a0205cae11e714c8792c4704f",
".git/objects/fb/e08d58401aef9faa51de6f0db69f0b6a224d7d": "105c3f17afb55941102707e2eb532ff7",
".git/refs/heads/master": "ca78d751b181f9dce8be7f8180e43197",
".git/refs/remotes/origin/main": "a5d0f481be8a20db99744e03766e1113",
".git/refs/remotes/origin/master": "ca78d751b181f9dce8be7f8180e43197",
"assets/AssetManifest.bin": "e1549573540a10fbd0d4dfcf9d7cfbcd",
"assets/AssetManifest.bin.json": "b77194ebf4557fabb304767680ca7251",
"assets/AssetManifest.json": "0b857d0d1f2ebc7013a2aedc0433b59a",
"assets/assets/images/home_1.jpg": "760342139c8927a268d5b468d11b7eca",
"assets/assets/images/home_2.jpg": "3853776f12bddeafaaea32f651af7b6e",
"assets/assets/images/home_3.jpg": "288bb0e4658b5aeafd09cb31ad988765",
"assets/assets/images/selfie.jpg": "993d5ed59e0c2fa7787b4a9111524c09",
"assets/assets/project_details/personalWebsite.md": "22fb25dc817cb644afd52a65af47aa31",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "6cd1cf2cdb7199ec7af9c8de2a470841",
"assets/NOTICES": "cee58c18c21d9b507ef9a2918653cb42",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ac13f8eabce9f955b7b3f7778a547265",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "61365a920bbe5b3f84c3623f7b699379",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f65cbec4670650c8d2a5e50467ff79a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e659005418be4e9e369cc53e46565ecf",
"/": "e659005418be4e9e369cc53e46565ecf",
"main.dart.js": "496c26c09bafc1565437586562efabe1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"version.json": "ddd261f4a7e0270b7dd641503d013d61"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
