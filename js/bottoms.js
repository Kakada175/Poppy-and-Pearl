// ✅ NORMAL PRODUCTS – Only Tops
const normalproduct = [
  {
    image: "images/Bottoms/cherrytrouser.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Cherry",
    price: "$11.99",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Red"],
    availability: "In Stock"

  },
  {
    image: "images/Bottoms/milkytrouser.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Milky Day",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Milky White"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/stripetrouser.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl the striped",
    price: "$14.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/Allydenim.jpg",
    alt: "Bottom Product",
    title: "Ally",
    price: "$28.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/blackleather.jpg",
    alt: "Bottom Product",
    title: "The leather",
    price: "$35.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/Blair.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Blair",
    price: "$22.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/deepnavygenz.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Deep Sea",
    price: "$28.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Deep Navy Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/Denimshorts.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Deep Sea Shorts",
    price: "$29.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/doubledenim.jpg",
    alt: "Buttom Product",
    title: "Poppy & Pearl Double",
    price: "$20.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Dark Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/jenniedenim.jpg",
    alt: "Bottom Product",
    title: "Miss Poppy & Pearl",
    price: "$19.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Denim Black"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/khakitrouser.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl The Sand",
    price: "$24.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Khaki"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/kylieleather.jpg",
    alt: "Bottom Product",
    title: "Poppy & Pearl Leather",
    price: "$20.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Black"],
    availability: "In Stock"
  }
];

// ✅ DISCOUNTED TOPS ONLY
const discountedProducts = [
  {
    image: "images/Bottoms/pinkypants.jpg",
    alt: "Discount Product",
    title: "KPink",
    priceNow: "$9.00",
    priceOld: "$18.00",
    brand: "Poppy & Pearl",
    size: ["Free Size"],
    color: ["Pink"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/misslightdenim.jpg",
    alt: "Discount Product",
    title: "Miss pale",
    priceNow: "$12.50",
    priceOld: "$25.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Denim Light Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/thetrend.jpg",
    alt: "Discount Product",
    title: "Poppy & Pearl Pop",
    priceNow: "$13.99",
    priceOld: "$28.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Dark Blue Denim"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/whiteshorts.jpg",
    alt: "Discount Product",
    title: "Poppy & Pearl Sand Shorts",
    priceNow: "$17.50",
    priceOld: "$35.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Milky White"],
    availability: "In Stock"
  }

];

// ✅ RENDER NORMAL PRODUCTS
const container = document.getElementById('bottoms-product-list');
let content = "";

for (let i = 0; i < normalproduct.length; i++) {
  const product = normalproduct[i];
  const modalId = `productModal${i}`;
    content += `
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <div class="card shadow-sm card-wrapper">
          <img src="${product.image}" class="card-img-top custom-img" alt="${product.alt}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.title}</h5>
            <p class="text-muted">${product.price}</p>
            <div class="d-flex flex-column gap-2">
              <a href="#" class="btn btn-sm add-to-cart custom-add-btn">Add to Cart</a>
              <button class="btn btn-sm custom-view-btn" data-bs-toggle="modal" data-bs-target="#${modalId}">View Details</button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade modal-custom-size" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="${modalId}Label">${product.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex flex-column flex-sm-row align-items-start gap-3">
                <img src="${product.image}" alt="${product.name}" class="modal-product-img">

                <div class="product-details text-start">
                  <p class="mb-1"><strong>Brand:</strong> ${product.brand}</p>
                  <p class="mb-1"><strong>Color:</strong> ${product.color}</p>
                  <p class="mb-1"><strong>Price:</strong> ${product.price}</p>
                  <p class="mb-1"><strong>Size:</strong> ${product.size}</p>
                  <p class="mb-0"><strong>Availability:</strong> ${product.availability}</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
container.innerHTML = content;

// ✅ RENDER DISCOUNTED PRODUCTS
const discountContainer = document.getElementById('bottoms-discount-list');
let discountcontent = "";

for (let i = 0; i < discountedProducts.length; i++) {
  const products = discountedProducts[i];
  const modaldiscountId = `discountproductModal${i}`;

  discountcontent += `
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="card shadow-sm card-wrapper">
        <img src="${products.image}" class="card-img-top custom-img" alt="${products.alt}">
        <div class="card-body text-center">
          <h5 class="card-title">${products.title}</h5>
          <p class="text-danger fw-bold">
            Now <span class="price-now">${products.priceNow}</span>
            <span class="text-muted text-decoration-line-through price-old ms-1">${products.priceOld}</span>
          </p>
          <div class="d-flex flex-column gap-2">
            <a href="#" class="btn btn-sm add-to-cart custom-add-btn">Add to Cart</a>
            <button class="btn btn-sm custom-view-btn" data-bs-toggle="modal" data-bs-target="#${modaldiscountId}">View Details</button>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade modal-custom-size" id="${modaldiscountId}" tabindex="-1" aria-labelledby="${modaldiscountId}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modaldiscountId}Label">${products.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex flex-column flex-sm-row align-items-start gap-3">
              <img src="${products.image}" alt="${products.name}" class="modal-product-img">

              <div class="product-details text-start">
                <p class="mb-1"><strong>Brand:</strong> ${products.brand}</p>
                <p class="mb-1"><strong>Color:</strong> ${products.color}</p>
                <p class="mb-1"><strong>Price:</strong> ${products.priceNow}</p>
                <p class="mb-1"><strong>Size:</strong> ${products.size}</p>
                <p class="mb-0"><strong>Availability:</strong> ${products.availability}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
discountContainer.innerHTML = discountcontent;

// ✅ ADD TO CART HANDLER
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    e.preventDefault();

    const card = e.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const image = card.querySelector("img").getAttribute("src");

    const nowPriceElem = card.querySelector(".text-danger");
    const oldPriceElem = card.querySelector(".text-decoration-line-through");

    let cartItem;

    if (nowPriceElem && oldPriceElem) {
      const priceNow = nowPriceElem.querySelector(".price-now")?.textContent.trim();
      const priceOld = oldPriceElem.textContent.trim();

      cartItem = {
        title,
        image,
        type: "discounted",
        priceNow,
        priceOld
      };
    } else {
      const price = card.querySelector("p").textContent.trim();
      cartItem = {
        title,
        image,
        type: "normal",
        price
      };
    }

    const existingCart = JSON.parse(localStorage.getItem("komi-cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("komi-cart", JSON.stringify(existingCart));

    alert(`${title} added to cart!`);
  }
});
