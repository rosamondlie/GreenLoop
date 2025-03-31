self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
    event.waitUntil(
      caches.open("app-cache").then((cache) => {
        return cache.addAll(["/", "/offline.html"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  