


const productURL ="https://fakestoreapi.com/products"


let productData = []



async function getProduct (){
    const res = await fetch(productURL)
    const data = await res.json()
    productData= data
    renderProduct(productData)
}

getProduct()


async function filterProduct (category){
   await getProduct()
    console.log(productData);
    const filterProducts = productData.filter(product=>{
        return product.category ===category || category ==="all"
    })
    renderProduct(filterProducts)
    }
 

function renderProduct(products){
     const productContainer = document.getElementById("product-data")
     productContainer.innerHTML = ""
    // let displayProduct = "";
    products.map((product)=>{
        const productElement  = document.createElement('div')
        productElement.classList.add("col-md-4")
        productElement.innerHTML = `
        <div class="card" >
        <img src=${product.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    `
    productContainer.appendChild(productElement)
    })
    // document.getElementById("product-data").innerHTML = displayProduct
    console.log(products);

}

const filterBtn  = document.querySelectorAll(".filter-button")
filterBtn.forEach(button=>{
    button.addEventListener("click",e=>{
        const category = e.target.dataset.category
        filterProduct(category)
        console.log(category);
    })
})

