var tokyoDrinkNumber = document.getElementById("tokyoDrop");
var americanDrinkNumber = document.getElementById("americanDrop");
var snowDrinkNumber = document.getElementById("snowDrop");
var bagDrinkNumber = document.getElementById("bagDrop");
var edenDrinkNumber = document.getElementById("edenDrop");
var cloverDrinkNumber = document.getElementById("cloverDrop");
var mokaccinoDrinkNumber = document.getElementById("mokaccinoDrop");
var capheDrinkNumber = document.getElementById("capheDrop");
var chakoDrinkNumber = document.getElementById("chakoDrop");
var fernDrinkNumber = document.getElementById("fernDrop");
function getTokyoDrinks() {
  var tokyoCostDiv = document.getElementById("tokyoCost");
  if(tokyoDrinkNumber.value > 0) {
    tokyoCostDiv.setAttribute("class", "show");
    tokyoCostDiv.innerHTML = "<p>Tokyo Latte: 3.75 X " + tokyoDrinkNumber.value + "</p>";
  } else {
    tokyoCostDiv.setAttribute("class", "hide");
  }
}
tokyoDrinkNumber.addEventListener("blur", getTokyoDrinks, false);
