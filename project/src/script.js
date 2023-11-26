let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

updateCartDisplay();
function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartDisplay();
}