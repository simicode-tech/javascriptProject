const cartItemCount = document.getElementById("cart-item-count");

/*
-------------------
loadCartItems
-------------------
*/
function loadCartItems() {
  let storedCartItems = localStorage.getItem("cartItems");
  // console.log(storedCartItems);
  if (storedCartItems) {
    cart = JSON.parse(storedCartItems);
    updateCart();
  }
}
loadCartItems();

/*
-------------------
updateCart
-------------------
*/
function updateCart() {
  cartItemCount.textContent = cart.length;
  let cartItemsTable = document.getElementById("cart-items");
  // cartItems.innerHTML = "";
  cartItemsTable.innerHTML = "";
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];

    let row = cartItemsTable.insertRow();
    let nameCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let quantityCell = row.insertCell(2);
    let totalCell = row.insertCell(3);
    nameCell.innerHTML = item.name;
    priceCell.innerHTML = item.price.toFixed(2);
    quantityCell.innerHTML = item.quantity;
    let total = item.price * item.quantity;
    totalCell.innerHTML = total.toFixed(2);
    totalCost += total;
  }
  document.getElementById("total-cost").innerHTML = "$" + totalCost.toFixed(2);
}
