const static DevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",// BASICO_FOLDER css
  "/css/web-app_1.css",
  "/css/_bg1.css", 
  
  "/js/preload.js", // PRELOAD
  "/qr/img/icono-preloader.gif",
  
  "/js/app1.js",// FOLDER JS
  "/js/preload.js",
  "/js/jquery-1.10.2.js",
  "/js/bootstrap.js",
  
  "/images/coffee1.svg",// IMAGENES PRINCIPAL
  "/images/coffee2.svg",
  "/images/coffee3.svg",
  "/images/coffee4.svg",
  "/images/coffee5.svg",
  "/images/coffee6.svg",
  "/images/coffee7.svg",
  "/images/coffee8.svg",
  "/images/coffee9.svg"
  
  "/images/new/coffee111.svg",// DOCE  ANIMACIONES
  "/images/new/coffee112.svg",
  "/images/new/coffee113.svg",
  "/images/new/coffee114.svg",
  
  "/images/new/coffee211.svg",
  "/images/new/coffee212.svg",
  "/images/new/coffee213.svg",
  "/images/new/coffee214.svg",

  "/images/new/coffee311.svg",
  "/images/new/coffee312.svg",
  "/images/new/coffee313.svg",
  "/images/new/coffee314.svg",
  
  "/images/new/coffee411.svg",
  "/images/new/coffee412.svg",
  "/images/new/coffee413.svg",
  "/images/new/coffee414.svg",
  
  "/images/new/coffee511.svg",// DOCE  ANIMACIONES
  "/images/new/coffee512.svg",
  "/images/new/coffee513.svg",
  "/images/new/coffee514.svg",
  
  "/images/new/coffee611.svg",
  "/images/new/coffee612.svg",
  "/images/new/coffee613.svg",
  "/images/new/coffee614.svg",
  
  "/images/new/coffee711.svg",
  "/images/new/coffee712.svg",
  "/images/new/coffee713.svg",
  "/images/new/coffee714.svg",
    
  "/images/new/coffee811.svg",
  "/images/new/coffee812.svg",
  "/images/new/coffee813.svg",
  "/images/new/coffee814.svg",
  
  "/images/new/coffee911.svg",// DOCE ANIMACIONES
  "/images/new/coffee912.svg",
  "/images/new/coffee913.svg",
  "/images/new/coffee914.svg",
  
  "/images/new/coffee1011.svg",
  "/images/new/coffee1012.svg",
  "/images/new/coffee1013.svg",
  "/images/new/coffee1014.svg",
    
  "/images/new/coffee1111.svg",
  "/images/new/coffee1112.svg",
  "/images/new/coffee1113.svg",
  "/images/new/coffee1114.svg",
  
  "/images/new/coffee1211.svg",
  "/images/new/coffee1212.svg",
  "/images/new/coffee1213.svg",
  "/images/new/coffee1214.svg",
  
  "/images/img/btn1.png",// DOCE BOTONES
  "/images/img/btn2.png",
  "/images/img/btn3.png",
  "/images/img/btn4.png",
  
  "/images/img/btn5.png",
  "/images/img/btn6.png",
  "/images/img/btn7.png",
  "/images/img/btn8.png" 
  
  "/images/img/btn9.png",
  "/images/img/btn10.png",
  "/images/img/btn11.png",
  "/images/img/btn12.png" 

  
  
  
  
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
