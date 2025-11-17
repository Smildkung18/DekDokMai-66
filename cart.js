function updateCartCounter() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += (item.quantity || 0); // (บวกจำนวนของแต่ละชิ้น)
    });

    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {

        cartCountElement.textContent = totalItems;

        if (totalItems > 0) {
            cartCountElement.style.display = 'inline-block';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}