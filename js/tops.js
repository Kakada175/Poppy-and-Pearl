// ✅ NORMAL PRODUCTS – Only Tops
const normalproduct = [
  {
    image: "images/Tops/deepnavytop.jpg",
    alt: "Top Product",
    title: "Poppy & Pearl Shirt-Blue Stripe",
    price: "$11.99",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Red", "Black"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/denimtop.jpg",
    alt: "Top",
    title: "Denim Top",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/blacktop.jpg",
    alt: "Top",
    title: "Black Top",
    price: "$14.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/corsetblazer.jpg",
    alt: "Top",
    title: "Corset Blazer",
    price: "$45.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/Denimsleeve.jpg",
    alt: "Top",
    title: "Denim Sleeve",
    price: "$15.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/greentea.jpg",
    alt: "Top",
    title: "Poppy & Pearl Melon",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Green Tea"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/seatop.jpg",
    alt: "Top",
    title: "Poppy & Pearl Sea",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Light Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/ohmyflower.jpg",
    alt: "Top",
    title: "Oh my Komi",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["White"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/passion.jpg",
    alt: "Top",
    title: "Passionism",
    price: "$18.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Yellow"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/redleather.jpg",
    alt: "Top",
    title: "Cherry Wine",
    price: "$32.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Red Cherry"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/Sportfit.jpg",
    alt: "Top",
    title: "Sunny Komi",
    price: "$17.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["White"],
    availability: "In Stock"
  },
  {
    image: "images/Tops/tiewhite.jpg",
    alt: "Top",
    title: "White Tied",
    price: "$20.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["White"],
    availability: "In Stock"
  }
];

// ✅ DISCOUNTED TOPS ONLY
const discountedProducts = [
  {
    image: "images/Tops/tieblacktop.jpg",
    alt: "Discount Product",
    title: "Black Tie",
    priceNow: "$9.99",
    priceOld: "$20.00",
    brand: "Poppy & Pearl",
    color: "White",
    availability: "In Stock"
  },
  {
    image: "images/Tops/Coquette.jpg",
    alt: "Discount Product",
    title: "Coquette",
    priceNow: "$12.50",
    priceOld: "$25.00",
    brand: "Poppy & Pearl",
    color: "White",
    availability: "In Stock"
  },
  {
    image: "images/Tops/khakitanktop.jpg",
    alt: "Discount Product",
    title: "Khaki Tank Top",
    priceNow: "$13.99",
    priceOld: "$28.00",
    brand: "Poppy & Pearl",
    color: "Khaki",
    availability: "In Stock"
  },
  {
    image: "images/Tops/Jacquemus.jpg",
    alt: "Discount Product",
    title: "Jacquemus",
    priceNow: "$17.50",
    priceOld: "$35.00",
    brand: "Poppy & Pearl",
    color: "Nude Pink",
    availability: "In Stock"
  }

];

// ✅ RENDER NORMAL PRODUCTS
const container = document.getElementById('tops-product-list');
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
document.getElementById("tops-product-list").innerHTML = content;

// ✅ RENDER DISCOUNTED PRODUCTS
const discountContainer = document.getElementById('tops-discount-list');
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
