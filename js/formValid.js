(function () {
  const btn = document.getElementById("btn-price");
  const nameField = document.getElementById("js-nameField");

  const phoneField = document.getElementById("js-phoneField");
  const carField = document.getElementById("js-carField");

  btn.addEventListener("click", () => {
    errorMasage();
  });

  function errorMasage() {
    if (!nameField.value && !phoneField.value && !carField.value) {
        return alert("Для уточнения цены, необходимо заполнить форму обратной связи")
    };
    if (!nameField.value) {
      return alert("Необходимо заполнить поле'Ваше имя'");
    };

    if (!phoneField.value) {
      return alert("Необходимо заполнить поле'Ваше телефон'");
    };

    if (!carField.value) {
      return alert("Необходимо заполнить поле'Автомобиль который вас интересует'");
    }
  }
})();
