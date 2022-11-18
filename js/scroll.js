(function () {
  const navCarsBtn = document.getElementById("js-navCarsBtn");

  const viewCarBtn = document.getElementById("js-viewCars");
  const targetScrollGarage = document.getElementById("js-garage");

  const targetScrollOrder = document.getElementById("js-footer");
  const orderBtns = document.querySelectorAll(".js-order");

  //функция целевой блок для кнопок просмотра "автомобили"
  function scrollToGarage() {
    targetScrollGarage.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  //скролл при клике на кнопку "автомобили в навигационном меню"
  navCarsBtn.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToGarage();
  });

  //скролл при клике на кнопку "просмотра автомобилей"
  viewCarBtn.addEventListener("click", function (event) {
    scrollToGarage();
  });

  //функция целевой блок для кнопки "забронировать"
  function scrollFooter() {
    targetScrollOrder.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  //скролл при клике на кнопку "забронировать"
  orderBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      scrollFooter();
    });
  });
})();
