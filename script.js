function placeOrder() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let lipstick = document.getElementById("lipstick").value;

    let messageBox = document.getElementById("orderMessage");

    if (!name || !email) {
        messageBox.style.display = "block";
        messageBox.innerHTML = "⚠️ Please fill in all fields.";
        return;
    }

    let deliveryTime = "2–3 business days";

    messageBox.style.display = "block";
    messageBox.innerHTML =
        "✔️ Order placed successfully!<br><br>" +
        "💄 Product: " + lipstick + "<br>" +
        "👤 Name: " + name + "<br>" +
        "📦 Delivery: " + deliveryTime;

    let order = {
        name,
        email,
        lipstick,
        deliveryTime
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));


    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function addToCart(name, price) {

        let item = {
            name: name,
            price: price
        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart!");
    }


    function showMessage() {
        alert("Thank you for your enquiry!");
    }
}
