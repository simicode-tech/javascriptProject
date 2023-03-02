const previous = document.getElementById("previous");
const next = document.getElementById("next");

// add event listeners for the buttons

previous.addEventListener("click", previousPage);
next.addEventListener("click", nextPage);

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

// render all the products data

async function renderAllProducts() {
  await getAllProducts();

  let products = "";
  newData
    .filter((row, index) => {
      let startPage = (currentPage - 1) * pageSize;
      let endPage = currentPage * pageSize;
      if (index >= startPage && index < endPage) return true;
    })
    .map((product) => {
      products += `
    <div class="col-md-4 col-12 col-sm-6 col-lg-4 about-card">
    <div class="card mb-5">
    <img src="${product.image}" alt="${product.title}" />
    <div class="card-body">
    <h5 class="card-title">${product.title.substring(0, 20)}</h5>
    <p class="card-text">$
    ${product.price}
    </p>
    </div>
    <div class="card-body">
    <a href="#" class="btn btn-primary">Buy now</a>
    <button class="addToCart" data-id="${product.id}">Add to Cart</button>
    </div>
    </div>
    </div>
    
    `;
      // console.log(product);
    });
  document.querySelector("#product-item").innerHTML = products;
}
renderAllProducts();

// fetch api data for all products
async function getAllProducts() {
  try {
    showLoader();
    const res = await fetch(allProductUrl);
    const data = await res.json();
    await removeLoad();
    newData = data;
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getAllProducts();

// previousPage  button
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderAllProducts();
  }
}

// nextPage function
function nextPage() {
  if (currentPage * pageSize < newData.length) {
    currentPage++;
    renderAllProducts();
  }
}

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
