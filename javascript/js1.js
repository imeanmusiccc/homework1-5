document.addEventListener("DOMContentLoaded", function () {
    
  let age = parseInt(prompt("Возраст пользователя"));
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
});
