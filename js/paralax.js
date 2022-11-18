(function () {
  const firstSection = document.querySelector(".first-section");
  document.addEventListener("scroll", () => {
    firstSection.style.backgroundPositionX = "0" + 1.5 * window.scrollY + "px";
  });

  document.addEventListener("DOMContentLoaded", function () {
    const layer = document.querySelector("#footer-img");
    document.addEventListener('mousemove', (event) => {
      layer.style.transform =
        "translate3d(" +
        (event.clientX * 0.8) / 16 +
        "px," +
        (event.clientY * 0.3) / 8 +
        "px,0px)";
    })
  })

})();
