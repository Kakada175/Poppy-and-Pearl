const ordersList = document.getElementById("orders-list");
const orders = JSON.parse(localStorage.getItem("komi-orders")) || [];

if (orders.length === 0) {
ordersList.innerHTML = "<p>You have no orders yet.</p>";
} else {
ordersList.innerHTML = orders.map(order => {
    const date = new Date(order.date).toLocaleString();
    const itemsHtml = order.items.map(item => {
    const price = item.type === "discounted" ? item.priceNow : item.price;
    return `
        <li>${item.title} - ${price}</li>
    `;
    }).join("");

    return `
    <div class="card mb-4">
        <div class="card-header">
            <strong>Order Date:</strong> ${date}
        </div>
        <div class="card-body">
            <ul>${itemsHtml}</ul>
        </div>
    </div>
    `;
}).join("");
}