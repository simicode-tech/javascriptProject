// Make API request and store the product data
let productData = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    productData = data;
    // Initially display the first page of products
    displayProducts(1, productData);
  })
  .catch((error) => {
    console.error("Error fetching API data:", error);
  });

// Function to filter and display products based on the selected category and page
function filterProducts(category, page) {
  const filteredProducts = productData.filter((product) => {
    return product.category === category || category === "all";
  });

  displayProducts(page, filteredProducts);
}

// Function to display products in the HTML
function displayProducts(page, products) {
  const productsPerPage = 10;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  const paginatedProducts = products.slice(startIndex, endIndex);

  paginatedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    `;
    productsContainer.appendChild(productElement);
  });

  // Create pagination buttons
  const totalPages = Math.ceil(products.length / productsPerPage);
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
      const category = document.querySelector(".filter-button.active").dataset
        .category;
      console.log(category);
      filterProducts(category, i);
    });
    paginationContainer.appendChild(button);
  }

  // Set the active page button
  const activeButton = document.querySelector(".pagination-button.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  const currentPageButton = document.querySelector(
    `.pagination-button[data-page="${page}"]`
  );
  if (currentPageButton) {
    currentPageButton.classList.add("active");
  }
}

// Attach event listeners to the filter buttons
const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const activeButton = document.querySelector(".filter-button.active");
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    button.classList.add("active");
    const category = button.dataset.category;
    console.log(category);
    filterProducts(category, 1);
  });
});
