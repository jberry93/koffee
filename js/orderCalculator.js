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
  console.log(tokyoDrinkNumber.value);
}
tokyoDrinkNumber.addEventListener("blur", getTokyoDrinks, false);
