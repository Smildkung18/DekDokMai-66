function handleCheckout() {

    localStorage.removeItem('cart');

    updateCartCounter();

    console.log("กำลังเคลียร์ตะกร้าและไปยังหน้ายืนยัน...");

    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 500);
}