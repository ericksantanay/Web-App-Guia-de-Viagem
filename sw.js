self.addEventListener("install", () => {
  console.log("App instalado")
})


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
}
