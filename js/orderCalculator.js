var drinkNameArray = ["Tokyo Latte", "The American", "Jon Snow", "Bean Bag", "Apple of Eden", "4 Lead Clover", "Mokaccino", "Càphê", "Chako", "Red Fern"];
var priceArray = [3.75, 3.00, 3.50, 2.00, 2.00, 5.50, 4.00, 4.50, 3.00, 3.00];
var idArray = ["tokyoDrop", "americanDrop", "snowDrop", "bagDrop", "edenDrop", "cloverDrop", "mokaccinoDrop", "capheDrop", "chakoDrop", "fernDrop"];

function elementReference(id) {
  var element = document.getElementById(id);
  return element;
}

function drinkObject(drinkName, qty, price) {
  this.name = drinkName;
  this.quantity = qty;
  this.price = price;
}

var cart = [];
function drinkCart() {
  for(var number = 0; number < drinkNameArray.length; number++) {
    var newDrink = new drinkObject(drinkNameArray[number], elementReference(idArray[number]).value, priceArray[number]);
    cart.push(newDrink);
  }
}

function totalCost() {
  var salesTax = 0.08;
  var deliveryFee = 3;
  var grandTotal = 0;
  var subTotal = 0;
  var tax = 0;
  for(var number = 0; number < cart.length; number++) {
    subTotal = subTotal + cart[number].quantity * cart[number].price
  }
  console.log(subTotal);
  tax = subTotal * salesTax;
  grandTotal = subTotal + tax + deliveryFee;
  console.log(grandTotal);
}

elementReference("firstSubmit").addEventListener("click", function() {
  drinkCart();
  totalCost();
}, false);
