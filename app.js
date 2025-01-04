document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Firebase authentication logic here (to be added)
    alert(`Thank you, ${name}! Your message has been sent.`);
});

const cart = [];

document.querySelectorAll(".shop-button").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const productPrice = parseFloat(button.getAttribute("data-price"));

        // Check if product is already in the cart
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity += 1;
            existingProduct.subtotal = existingProduct.quantity * existingProduct.price;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1,
                subtotal: productPrice
            });
        }

        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Clear the current cart display
    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${item.subtotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalPriceElement.textContent = total.toFixed(2);
}






