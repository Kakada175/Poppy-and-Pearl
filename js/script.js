// Normal Products
const normalproduct = [
  {
    image: "images/Tops/deepnavytop.jpg",
    alt: "Top Product",
    title: "Poppy & Pearl Shirt-Blue Stripe",
    price: "$11.99",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Deep Navy Blue"],
    availability: "In Stock"
  },
  {
    image: "images/Acessories/redbag.jpg",
    alt: "Accessory",
    title: "Poppy & Pearl Red Handbag",
    price: "$12.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Red", "Black"],
    availability: "In Stock"
  },
  {
    image: "images/Bottoms/stripetrouser.jpg",
    alt: "Trouser",
    title: "Poppy & Pearl Office Pants",
    price: "$18.00",
    brand: "Poppy & Pearl",
    size: ["S", "M", "L"],
    color: ["Black"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/Sleevelessminidress.jpg",
    alt: "Dress",
    title: "Sleeveless Mini Dress",
    price: "$28.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Khaki Green"],
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
    image: "images/Acessories/download(11).jpg",
    alt: "Bag",
    title: "Poppy & Pearl Tote Bag",
    price: "$12.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["White"],
    availability: "In Stock"
  },
  {
    image: "images/Acessories/Baguette-Bag.jpg",
    alt: "Bag",
    title: "Baguette Bag",
    price: "$65.00",
    brand: "Poppy & Pearl",
    size: ["M"],
    color: ["Pink"],
    availability: "In Stock"
  },
  {
    image: "images/Acessories/Pearl-Necklace.jpg",
    alt: "Necklace",
    title: "Pearl Necklace Y2k",
    price: "$16.00",
    brand: "Poppy & Pearl",
    size: ["Free Size"],
    color: ["Silver"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/autumnminidress.jpg",
    alt: "Blue Mini Dress",
    title: "AutumnWinter Dress",
    price: "$32.00",
    brand: "Poppy & Pearl",
    size: ["S", "M"],
    color: ["Blue"],
    availability: "In Stock"
  }
];

const container = document.getElementById('product-list');
if (container) {
  let content = "";
  for (let i = 0; i < normalproduct.length; i++) {
    const product = normalproduct[i];
    const modalId = `productModal${i}`;

    content += `
      <div class="col-md-4 mb-4">
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
}

//Discounted Product
const discountedProducts = [
  {
    image: "images/Skirts/khakiskirt.jpg",
    alt: "Discount Product",
    title: "Khaki Skirt",
    priceNow: "$5.99",
    priceOld: "$18.00",
    brand: "Komi",
    color: "Khaki",
    size: ["S", "M"],
    availability: "In Stock"

  },
  {
    image: "images/Tops/tieblacktop.jpg",
    alt: "Discount Product",
    title: "White Blouse",
    priceNow: "$9.99",
    priceOld: "$20.00",
    brand: "Komi",
    color: "White",
    size: ["S", "M"],
    availability: "In Stock"
  },
  {
    image: "images/Sets/sampeal.jpg",
    alt: "Discount Product",
    title: "Komi- Dress",
    priceNow: "$11.99",
    priceOld: "$24.00",
    brand: "Komi",
    color: "Khaki",
    size: ["S", "M"],
    availability: "In Stock"
  }
];

const discountContainer = document.getElementById('discount-list');
let discountcontent = "";
for (let i = 0; i<discountedProducts.length; i++) {  
  const products = discountedProducts[i];
  const modaldiscountId = `discountproductModal${i}`;

  discountcontent += `
    <div class="col-md-4 mb-4">
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
document.getElementById("discount-list").innerHTML = discountcontent;


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    e.preventDefault();

    const card = e.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const image = card.querySelector("img").getAttribute("src");

    const nowPriceElem = card.querySelector(".text-danger"); // used in discounted
    const oldPriceElem = card.querySelector(".text-decoration-line-through");

    let cartItem;

    if (nowPriceElem && oldPriceElem) {
      // ✅ Discounted product
      const priceNow = nowPriceElem.childNodes[1]?.textContent.trim();
      const priceOld = oldPriceElem.textContent.trim();  

      cartItem = {
        title,
        image,
        type: "discounted", // 🔥 this must be here!
        priceNow,
        priceOld
      };
    } else {
      // ✅ Normal product
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
