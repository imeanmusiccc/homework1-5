document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  let isActive = false;

  button.addEventListener("click", function () {
    isActive = !isActive;

    if (isActive) {
      this.style.background = "linear-gradient(45deg, #6710a5ff, #72901aff)";
      this.style.margin = "30px";
      this.classList.add("active");
      this.textContent = " активировано!";
    } else {
      this.style.background = "";
      this.style.margin = "";
      this.classList.remove("active");
      this.textContent = "нажимай сюда";
    }
  });

  button.addEventListener("mouseenter", function () {
    if (!isActive) {
      this.style.background = "#3b4db3ff";
    }
  });

  button.addEventListener("mouseleave", function () {
    if (!isActive) {
      this.style.background = "";
    }
  });
});
