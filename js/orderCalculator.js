function elementReference(id) {
  var element = document.getElementById(id);
  return element;
}

function drinkObject(drinkName, qty, price) {
  this.name = drinkName;
  this.quantity = qty;
  this.price = price;
}

var drinkNameArray = [
  "Tokyo Latte",
  "The American",
  "Jon Snow",
  "Bean Bag",
  "Apple of Eden",
  "4 Lead Clover",
  "Mokaccino",
  "Càphê",
  "Chako",
  "Red Fern"
];

var priceArray = [
  3.75,
  3.00,
  3.50,
  2.00,
  2.00,
  5.50,
  4.00,
  4.50,
  3.00,
  3.00
];

var idArray = [
  "tokyoDrop",
  "americanDrop",
  "snowDrop",
  "bagDrop",
  "edenDrop",
  "cloverDrop",
  "mokaccinoDrop",
  "capheDrop",
  "chakoDrop",
  "fernDrop"
];

var cart = [];
function drinkCart() {
  for(var number = 0; number < 10; number++) {
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
  for(var number = 0; number < 10; number++) {
    subTotal = subTotal + cart[number].quantity * cart[number].price
  }
  tax = subTotal * salesTax;
  grandTotal = subTotal + tax + deliveryFee;
  elementReference("total-cost").textContent = "Total: " + "$" + grandTotal.toFixed(2);
  elementReference("sales-tax").textContent = "Sales Tax: " + "$" + tax.toFixed(2);
  elementReference("delivery-fee").textContent = "Delivery Fee: " + "$" + deliveryFee.toFixed(2);
  elementReference("sub-total").textContent = "Subtotal: " + "$" + subTotal.toFixed(2);
}

var divArray = [
  "tokyoCost",
  "americanCost",
  "snowCost",
  "bagCost",
  "edenCost",
  "cloverCost",
  "mokaccinoCost",
  "capheCost",
  "chakoCost",
  "fernCost"
];

var paragraphArray = [
  "tokyoParagraph",
  "americanParagraph",
  "snowParagraph",
  "bagParagraph",
  "edenParagraph",
  "cloverParagraph",
  "mokaccinoParagraph",
  "capheParagraph",
  "chakoParagraph",
  "fernParagraph"
];

function divControl() {
  for(var number = 0; number < 10; number++) {
    if(elementReference(idArray[number]).value > 0) {
      elementReference(divArray[number]).setAttribute("class", "show");
      var paragraphText = document.getElementById(paragraphArray[number]);
      paragraphText.textContent = drinkNameArray[number] + " " + priceArray[number].toFixed(2) + " X " + cart[number].quantity;
    } else {
      elementReference(divArray[number]).setAttribute("class", "hide");
    }
  }
}

elementReference("firstSubmit").addEventListener("click", function() {
  drinkCart();
  totalCost();
  divControl();
}, false);
