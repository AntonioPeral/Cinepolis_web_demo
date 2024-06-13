document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const age = document.getElementById("age").value;
  if (age >= 18 && age <= 25) {
    alert("¡Felicidades! Usted es elegible para un descuento del 10%.");
  } else {
    alert("Lo sentimos, usted no es elegible para un descuento.");
  }
});
