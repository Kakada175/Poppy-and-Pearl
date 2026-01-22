// ✅ NORMAL PRODUCTS – Only Tops
const normalproduct = [
  {
    image: "images/Sets/bluepuff.jpg",
    alt: "Sets",
    title: "Poppy & Pearl Blue Puff Set",
    price: "$20.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/autumnminidress.jpg",
    alt: "Sets",
    title: "AutumnWinter Dress",
    price: "$19.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/finesse.jpg",
    alt: "Sets",
    title: "Finesse Set",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Khaki and White"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/floralcorset.jpg",
    alt: "Sets",
    title: "Floral Corset Set",
    price: "$25.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Purple Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/oneshoulderdenim.jpg",
    alt: "Sets",
    title: "Poppy & Pearl One Shoulder Denim",
    price: "$25.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Denim Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/purplepuff.jpg",
    alt: "Sets",
    title: "Poppy & Pearl Purple Puff Set",
    price: "$22.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["purple"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/passionsets.jpg",
    alt: "Sets",
    title: "Poppy & Pearl Passion Set",
    price: "$36.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Passion Milk"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/floralprintlace.jpg",
    alt: "Sets",
    title: "Floral Print Lace Set",
    price: "$23.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/redknot.jpg",
    alt: "Sets",
    title: "Poppy & Pearl Red Knot Set",
    price: "$55.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Red"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/rosecorset.jpg",
    alt: "Sets",
    title: "Rose Corset Set",
    price: "$32.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/purplecropped.jpg",
    alt: "Sets",
    title: "Purple Cropped Set",
    price: "$40.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Purple"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/bluesetblackbow.jpg",
    alt: "Sets",
    title: "Poppy & Pearl Blue Set with Black Bow",
    price: "$42.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Blue"],
    availability: "In Stock"
  }
];

// ✅ DISCOUNTED TOPS ONLY
const discountedProducts = [
  {
    image: "images/Sets/sweetbows.jpg",
    alt: "Discount Product",
    title: "Sweet Bows Set",
    priceNow: "$9.99",
    priceOld: "$20.00",
    brand: "Poppy & Pearl",
    color: "Blue",
    availability: "In Stock"
  },
  {
    image: "images/Sets/Stripebrown.jpg",
    alt: "Discount Product",
    title: "Stripe Brown Set",
    priceNow: "$20.00",
    priceOld: "$40.00",
    brand: "Poppy & Pearl",
    color: "Brown",
    availability: "In Stock"
  },
  {
    image: "images/Sets/whiteky.jpg",
    alt: "Discount Product",
    title: "White Ky Set",
    priceNow: "$13.99",
    priceOld: "$28.00",
    brand: "Poppy & Pearl",
    color: "White",
    availability: "In Stock"
  },
  {
    image: "images/Sets/Sleevelessminidress.jpg",
    alt: "Discount Product",
    title: "Sleeveless Mini Dress",
    priceNow: "$17.50",
    priceOld: "$35.00",
    brand: "Poppy & Pearl",
    color: "Dusty Green",
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
