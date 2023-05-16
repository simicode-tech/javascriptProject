const filterButtons = document.querySelectorAll(".btn");
const filterableItems = document.querySelectorAll(".card");

// loading spinner
let loadDiv = document.querySelector(".loading");

// show loader to the page
function showLoader() {
  loadDiv.classList.add("show");
}
// remove loading spinner

async function removeLoad() {
  loadDiv.classList.remove("show");
}

// fetch the category url from the database
const categoryUrl = "https://fakestoreapi.com/products/categories";
// fetch all the products from the database
const allProductUrl = "https://fakestoreapi.com/products";

let newData = [];

let pageSize = 9;
let currentPage = 1;

// fetch api data for all products
async function getAllProducts() {
  try {
    showLoader();
    const res = await fetch(allProductUrl);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    newData = data;
    renderAllProducts(1, newData);
    await removeLoad();
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getAllProducts();
/** 
 ------------------------------
 filter products based on their category
 page  is the number of pagination page
 ------------------------------
*/

// filter product based on category
async function filterProduct(category, page) {
  // checking if category product is the same as category button

  const filteredProducts = newData.filter((product) => {
    return product.category === category || category === "all";
  });
  // if the category button is the same as category product
  // then will pass filteredProducts into renderAllProducts
  renderAllProducts(page, filteredProducts);
}
// filterProduct();

/** 
 ------------------------------
 render all products containing two parameters
 1.page
 2.products
 page  is the number of pagination page
 ------------------------------
*/

async function renderAllProducts(page, product) {
  // seting the page number
  const productsPerPage = 9;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productContainer = document.getElementById("product-item");
  productContainer.innerHTML = "";

  // using a slice method to limit the number of products per page
  const paginatedProducts = product.slice(startIndex, endIndex);

  // display the product based on the paginated products
  paginatedProducts.map((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-md-4");
    productElement.classList.add("col-12");
    productElement.classList.add("col-sm-6");
    productElement.classList.add("about-card");

    productElement.innerHTML = `
      <div class="card filterable-item mb-5" data-filter=${product.category}>
      <a href="product-details.html?id=${product.id}">
      <img src="${product.image}" alt="${product.title}" />
      </a>
      <div class="card-body">
      <h5 class="card-title">${product.title.substring(0, 20)}</h5>
      <p class="card-text">$
      ${product.price}
      </p>
      </div>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Buy now</a>
      <button id="addToCartBtn" class="addToCart" data-id="${
        product.id
      }">Add to Cart</button>
      </div>
      </div>
      `;
    productContainer.appendChild(productElement);
  });

  // Create pagination buttons
  const totalPages = Math.ceil(product.length / productsPerPage);
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.dataset.page = i;
    button.addEventListener("click", (event) => {
      const activeButton = document.querySelector(".pagination-button.active");
      if (activeButton) {
        activeButton.classList.remove("active");
      }
      button.classList.add("active");
      const category = document.querySelector(".btn.active").dataset.filter;
      console.log(category);
      // passing the category name and the page number into filterProduct
      filterProduct(category, i);
    });
    paginationContainer.appendChild(button);
  }

  // Set the active page button
  const activeButton = document.querySelector(".pagination-button.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  // To set up data-page number
  const currentPageButton = document.querySelector(
    `.pagination-button[data-page="${page}"]`
  );
  if (currentPageButton) {
    currentPageButton.classList.add("active");
  }
  // console.log(product);
}
// renderAllProducts();

//  Attach event listeners to the filter buttons
const filterBtn = document.querySelectorAll(".btn");
let currentCategory = ""; // Variable to store the currently selected category
filterBtn.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (event) => {
    const activeButton = document.querySelector(".btn.active");
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    button.classList.add("active");
    const category = button.dataset.filter;
    console.log(category);
    filterProduct(category, 1);
  });
});

// / Scroll to top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
