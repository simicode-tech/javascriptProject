// Get the product ID from the query string
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const productId = urlParams.get("id");
const buyNowButton = document.getElementById("buy-now-button");

const singleProductDetails = {};
// Retrieve the product details from the server
async function retrieveProduct() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    console.log(res);
    const product = await res.json();
    // singleProductDetails = product;
    // console.log(singleProductDetails);
    singleProduct(product);
  } catch (error) {
    console.log(error.mesage);
  }

  // fetch(`https://fakestoreapi.com/products/${productId}`)
  //   .then((response) => response.json())
  //   .then((product) => {
  //     console.log(product);

  //     // Display the product details

  //     // productDetails += `

  //     //   <div class="col-md-4">
  //     //     <img src="${product.image}"width="250" alt=""/>
  //     //   </div>
  //     //   <div class="col-md-8">
  //     //     <h2>${product.title}</h2>
  //     //     <p>${product.description}</p>
  //     //     <p>Price: $${product.price}</p>
  //     //     <div style="display: flex;">
  //     //       <div style="margin-right:12px"><button id="buy-now-button">Buy Now</button></div>
  //     //       <button id="addToCartBtn" class="addToCart" data-id="${product.id}">Add to Cart</button>
  //     //     </div>
  //     //   </div>

  //     // `;
  //     // document.querySelector("#product-details").innerHTML = productDetails;

  //     // console.log(buyNowButton);

  //     // console.log(buyNowButton);
  //   });
}
retrieveProduct();

function singleProduct(product) {
  console.log(product);
  let productDetails = "";
  productDetails += `
    
    <div class="col-md-4">
    <img src="${product.image}"width="250" alt=""/>
    </div>
    <div class="col-md-8">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <div style="display: flex;">
    <div style="margin-right:12px"><button id="buy-now-button">Buy Now</button></div>
    <button id="addToCartBtn" class="addToCart" data-id="${product.id}">Add to Cart</button>
    </div>
    </div>
    
    `;
  document.querySelector("#product-details").innerHTML = productDetails;

  const buyNowButton = document.querySelector("#addToCartBtn");
  buyNowButton.addEventListener("click", addDisplay);
  function addDisplay(e) {
    retrieveProduct();
    if (e.target.classList.contains("addToCart")) {
      const productIdData = parseInt(e.target.dataset.id);
      console.log(productId);
      console.log(product);
      const productDetails = product.id === Number(productId);
      // addToCart(productDetails);
      console.log(productDetails);
      // const product = newData.find((p) => p.id === productId);

      console.log(productIdData);
    }
  }

  // buyNowButton.;
}
// function addDisplay(e) {
//   retrieveProduct();
//   if (e.target.classList.contains("addToCart")) {
//     const productIdData = parseInt(e.target.dataset.id);
//     console.log(productId);
//     // console.log(product);
//     // const productDetails = product.find((p) => p.id === productId);
//     console.log(productDetails);
//     // const product = newData.find((p) => p.id === productId);

//     console.log(productIdData);
//   }
// }
