function elementReference(e){var r=document.getElementById(e);return r}function drinkObject(e,r,a){this.name=e,this.quantity=r,this.price=a}function drinkCart(){for(var e=0;10>e;e++){var r=new drinkObject(drinkNameArray[e],elementReference(idArray[e]).value,priceArray[e]);cart.push(r)}}function totalCost(){for(var e=.08,r=3,a=0,t=0,n=0,o=0;10>o;o++)t+=cart[o].quantity*cart[o].price;n=t*e,a=t+n+r,elementReference("total-cost").textContent="Total: $"+a.toFixed(2),elementReference("sales-tax").textContent="Sales Tax: $"+n.toFixed(2),elementReference("delivery-fee").textContent="Delivery Fee: $"+r.toFixed(2),elementReference("sub-total").textContent="Subtotal: $"+t.toFixed(2)}function divControl(){for(var e=0;10>e;e++)if(elementReference(idArray[e]).value>0){elementReference(divArray[e]).setAttribute("class","show");var r=document.getElementById(paragraphArray[e]);r.textContent=drinkNameArray[e]+" "+priceArray[e].toFixed(2)+" X "+cart[e].quantity}else elementReference(divArray[e]).setAttribute("class","hide")}var drinkNameArray=["Tokyo Latte","The American","Jon Snow","Bean Bag","Apple of Eden","4 Lead Clover","Mokaccino","Càphê","Chako","Red Fern"],priceArray=[3.75,3,3.5,2,2,5.5,4,4.5,3,3],idArray=["tokyoDrop","americanDrop","snowDrop","bagDrop","edenDrop","cloverDrop","mokaccinoDrop","capheDrop","chakoDrop","fernDrop"],cart=[],divArray=["tokyoCost","americanCost","snowCost","bagCost","edenCost","cloverCost","mokaccinoCost","capheCost","chakoCost","fernCost"],paragraphArray=["tokyoParagraph","americanParagraph","snowParagraph","bagParagraph","edenParagraph","cloverParagraph","mokaccinoParagraph","capheParagraph","chakoParagraph","fernParagraph"];elementReference("firstSubmit").addEventListener("click",function(){drinkCart(),totalCost(),divControl()},!1);