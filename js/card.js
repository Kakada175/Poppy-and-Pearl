const normalContainer = document.getElementById("normal-cart-items");
const discountContainer = document.getElementById("discount-cart-items");
let cartItems = JSON.parse(localStorage.getItem("komi-cart")) || [];

let normalHtml = "";
let discountHtml = "";
let normalTotal = 0;
let discountTotal = 0;

cartItems.forEach((item, index) => {
  if (item.type === "discounted") {
    const priceNow = parseFloat(item.priceNow.replace('$', '')) || 0;
    discountTotal += priceNow;

    discountHtml += `
      <div class="col-6 col-sm-4 col-md-3 col-lg-3 mb-4">
        <div class="card shadow-sm card-wrapper">
          <img src="${item.image}" class="card-img-top custom-img" alt="${item.title}" />
          <div class="card-body text-center">
            <h5 class="card-title">${item.title}</h5>
            <p class="fw-bold text-danger mb-1">
              Now ${item.priceNow}
              <span class="text-muted text-decoration-line-through ms-1">${item.priceOld}</span>
            </p>
            <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `;
  } else {
    const price = parseFloat(item.price.replace('$', '')) || 0;
    normalTotal += price;

    normalHtml += `
      <div class="col-6 col-sm-4 col-md-3 col-lg-3 mb-4">
        <div class="card shadow-sm card-wrapper">
          <img src="${item.image}" class="card-img-top custom-img" alt="${item.title}" />
          <div class="card-body text-center">
            <h5 class="card-title">${item.title}</h5>
            <p class="text-muted fw-bold mb-1">${item.price}</p>
            <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }
});

normalContainer.innerHTML = normalHtml;
discountContainer.innerHTML = discountHtml;

const totalPrice = normalTotal + discountTotal;
document.getElementById("cart-total").textContent = `$${totalPrice.toFixed(2)}`;

// Remove item logic
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cartItems.splice(index, 1);
    localStorage.setItem("komi-cart", JSON.stringify(cartItems));
    location.reload();
  }
});

const orderBtn = document.getElementById("order-btn");
const confirmPaymentBtn = document.getElementById("confirm-payment-btn");

orderBtn.addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("modal-payment-total").textContent = `$${totalPrice.toFixed(2)}`;

  const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
  paymentModal.show();
});

confirmPaymentBtn.addEventListener("click", async () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Save order data
  const orderData = {
    items: cartItems,
    total: totalPrice,
    date: new Date().toISOString()
  };

  // Save to localStorage (optional)
  const orders = JSON.parse(localStorage.getItem("komi-orders")) || [];
  orders.push(orderData);
  localStorage.setItem("komi-orders", JSON.stringify(orders));

  // Save to backend if logged in
  const token = localStorage.getItem('komi-token');
  if (token) {
    await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ cart: [] }) // clear cart in DB
    });

    await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ order: orderData })
    });
  }

  localStorage.removeItem("komi-cart");

  // Modal handling
  const paymentModalEl = document.getElementById('paymentModal');
  const thankYouModalEl = document.getElementById('thankYouModal');

  const paymentModal = bootstrap.Modal.getInstance(paymentModalEl);
  const thankYouModal = new bootstrap.Modal(thankYouModalEl);

  paymentModal.hide();

  // Show thank you modal after payment modal hides
  setTimeout(() => {
    thankYouModal.show();
  }, 300);
});
