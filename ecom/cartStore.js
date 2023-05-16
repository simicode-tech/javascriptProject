const productItem = document.getElementById("product-item");
const cartItems = document.getElementById("cart-items");
let cartItemsTable = document.getElementById("cart-items");
productItem.addEventListener("click", add);
let cart = [];

/*
-------------------
addToCart
-------------------
*/
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
  localStorage.setItem("cartItems", JSON.stringify(cart));
  window.location.href = "cart.html";
  updateCart(product);
}

/*
-------------------
add
-------------------
*/
function add(e) {
  getAllProducts();

  if (e.target.classList.contains("addToCart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = newData.find((p) => p.id === productId);
    console.log(product);
    addToCart(product);
  }
}
