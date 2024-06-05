const productsElements = [];

function addProducts(products) {
  const searchContainer = document.querySelector(".search-items");

  for (const product of products) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");

    const image = `
      <div class="product-image">
        <img src="${product.images[0]}" alt="No product image" />
      </div>
    `;

    const content = `
      <div class="product-content">
        <h3 class="title">${product.title}</h3>
        <span class="description">${product.description}</span>
      </div>
    `;

    productContainer.innerHTML = `${image}${content}`;
    searchContainer.appendChild(productContainer);
    productsElements.push(productContainer);

    productContainer.addEventListener("click", () => {
      productContainer.style.opacity = "0";

      setTimeout(() => productContainer.remove(), 150);
    });
  }
}

document.getElementById("s-input").addEventListener("keyup", (event) => {
  const searched = event.target.value?.toLowerCase();
  for (const product of productsElements) {
    const content = product.textContent.toLowerCase();
    if (!content.includes(searched)) {
      product.style.opacity = "0";
    } else {
      product.style.opacity = "1";
    }

    setTimeout(() => {
      if (!content.includes(searched)) {
        product.style.display = "none";
      } else {
        product.style.display = "flex";
      }
    }, 150);
  }
});

fetch("https://dummyjson.com/products?limit=50")
  .then((r) => r.json())
  .then((result) => addProducts(result.products));
