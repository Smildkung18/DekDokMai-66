function renderCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-container');

    container.innerHTML = ''; // (ล้างของเก่า)

    if (cart.length === 0) {

        container.innerHTML = `<tr><td colspan="6" class="text-center py-5">${getTranslation('cart_empty')}</td></tr>`;
        calculateTotal();
        return;
    }

    cart.forEach(item => {

        const name = getTranslation(item.nameKey);
        const subtotal = item.price * item.quantity;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input class="form-check-input cart-item-checkbox" 
                       type="checkbox" 
                       data-price="${item.price}" 
                       data-quantity="${item.quantity}"
                       onchange="calculateTotal()" 
                       checked> 
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.images[0]}" alt="${name}" class="cart-item-image me-3">
                    <span class="fw-bold">${name}</span>
                </div>
            </td>
            <td>${item.price.toLocaleString()} ${getTranslation('detail_price_unit')}</td>
            <td>
                <input type="number" 
                       class="form-control form-control-sm cart-item-quantity" 
                       value="${item.quantity}" 
                       min="1" 
                       onchange="updateQuantity('${item.id}', this.value)">
            </td>
            <td>${subtotal.toLocaleString()} ${getTranslation('detail_price_unit')}</td>
            <td>
                <button class="btn btn-danger btn-sm remove-btn" onclick="removeItem('${item.id}')">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
        `;
        container.appendChild(row);
    });

    calculateTotal();
}

function updateQuantity(id, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const qty = parseInt(newQuantity);

    if (qty < 1) {
        removeItem(id); // (ส่ง id ต่อไป)
        return;
    }

    cart = cart.map(item => {
        if (item.id === id) {
            item.quantity = qty;
        }
        return item;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    renderCartPage();
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    cart = cart.filter(item => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    renderCartPage();
}

function calculateTotal() {
    let total = 0;
    const checkedItems = document.querySelectorAll('.cart-item-checkbox:checked');

    checkedItems.forEach(checkbox => {
        const price = parseFloat(checkbox.getAttribute('data-price'));
        const quantity = parseInt(checkbox.getAttribute('data-quantity'));
        total += price * quantity;
    });


    document.getElementById('total-price-display').textContent = `${total.toLocaleString()} ${getTranslation('detail_price_unit')}`;
}

function toggleSelectAll(selectAllCheckbox) {
    const checkboxes = document.querySelectorAll('.cart-item-checkbox');
    checkboxes.forEach(box => {
        box.checked = selectAllCheckbox.checked;
    });
    calculateTotal();
}