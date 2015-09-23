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
var submitButton = document.getElementById("firstSubmit");

function getAllDrinks(lowerCaseName, drinkNumber, upperCaseName, price) {
  var costDiv = document.getElementById(lowerCaseName + "Cost");
  var feesCostDiv = document.getElementById("fees");
  var totalCostDiv = document.getElementById("totalCost");
  if(drinkNumber.value > 0) {
    var salesTax = 0.08;
    var deliveryFee = 3;
    var grandTotal = 0;
    var subTotal = 0;
    var tax = 0;
    subTotal = drinkNumber.value * price;
    tax = subTotal * salesTax;
    grandTotal = subTotal + tax + deliveryFee;
    costDiv.setAttribute("class", "show");
    feesCostDiv.setAttribute("class", "show");
    totalCostDiv.setAttribute("class", "show");
    costDiv.innerHTML = "<p>" + upperCaseName + ": " + price + " X " + drinkNumber.value + "</p>";
    feesCostDiv.innerHTML = "<p>" + "Sales Tax: " + tax.toFixed(2) + "</p>" +"<p>Delivery Fee: 3.00</p>";
    totalCostDiv.innerHTML = "<p>" + "Total: " + grandTotal.toFixed(2) + "</p>";
  } else {
    costDiv.setAttribute("class", "hide");
    feesCostDiv.setAttribute("class", "hide");
    totalCostDiv.setAttribute("class", "hide");
  }
}

tokyoDrinkNumber.addEventListener("change", function() {
  getAllDrinks("tokyo", tokyoDrinkNumber, "Tokyo Latte", 3.75);
}, false);
americanDrinkNumber.addEventListener("change", function() {
  getAllDrinks("american", americanDrinkNumber, "The American", 3.00);
}, false);
snowDrinkNumber.addEventListener("change", function() {
  getAllDrinks("snow", snowDrinkNumber, "Jon Snow", 3.50);
}, false);
bagDrinkNumber.addEventListener("change", function() {
  getAllDrinks("bag", bagDrinkNumber, "Bean Bag", 2.00);
}, false);
edenDrinkNumber.addEventListener("change", function() {
  getAllDrinks("eden", edenDrinkNumber, "Apple of Eden", 2.00);
}, false);
mokaccinoDrinkNumber.addEventListener("change", function() {
  getAllDrinks("mokaccino", mokaccinoDrinkNumber, "Mokaccino", 4.00);
}, false);
cloverDrinkNumber.addEventListener("change", function() {
  getAllDrinks("clover", cloverDrinkNumber, "4 Leaf Clover", 5.50);
}, false);
capheDrinkNumber.addEventListener("change", function() {
  getAllDrinks("caphe", capheDrinkNumber, "Càphê", 4.50);
}, false);
chakoDrinkNumber.addEventListener("change", function() {
  getAllDrinks("chako", chakoDrinkNumber, "Chako", 3.00);
}, false);
fernDrinkNumber.addEventListener("change", function() {
  getAllDrinks("fern", fernDrinkNumber, "Red Fern", 3.00);
}, false);
