const cartItemCount = document.getElementById("cart-item-count");
const productItem = document.getElementById("product-item");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
productItem.addEventListener("click", add);

let cart = [];

function addToCart(product, quantity) {
  let item = {
    id: product.id,
    name: product.title,
    price: product.price,
    quantity: quantity || 1,
  };
  let cartItem = cart.find((cartItem) => cartItem.id === item.id);
  if (cartItem) {
    cartItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  updateCart();
  console.log(cart);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  // window.location.href =
  //   "file:///C:/Users/USER/OneDrive/Documents/jsclass/javascriptProject/cart.html";
}
function loadCartItems() {
  let storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cart = JSON.parse(storedCartItems);
    updateCart();
  }
}

loadCartItems(); //
function updateCart() {
  cartItemCount.textContent = cart.length;

  // cartItems.innerHTML = "";
  let cartItemsTable = document.getElementById("cart-items");
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

// const addToCartButtons = document.querySelectorAll(".addToCart");
function add(e) {
  getAllProducts();

  if (e.target.classList.contains("addToCart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = newData.find((p) => p.id === productId);
    console.log(product);
    addToCart(product);
  }
}
