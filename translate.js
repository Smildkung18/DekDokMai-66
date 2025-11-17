if (typeof translations === 'undefined') {
    console.error("Translation file (lang.js) is missing or loaded after translate.js");
}

function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'th'; // (ค่าเริ่มต้นคือ 'th')
}

function getTranslation(key) {
    const lang = getCurrentLanguage();

    if (!translations[key]) {
        console.warn(`Translation key "${key}" not found.`);
        return key; // คืนค่า key กลับไปถ้าไม่พบ
    }

    if (!translations[key][lang]) {
        console.warn(`Translation for key "${key}" in lang "${lang}" not found.`);

        return translations[key]['th'];
    }

    return translations[key][lang];
}

function setLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') {
        console.error(`Invalid language: ${lang}`);
        return;
    }

    localStorage.setItem('lang', lang);
    translatePage();

    if (typeof updateLangSwitcherUI === 'function') {
        updateLangSwitcherUI();
    } else {
        console.warn('updateLangSwitcherUI() function not found.');
    }

    if (typeof updateCartCounter === 'function') {
        updateCartCounter();
    } else {
        console.warn('updateCartCounter() function not found.');
    }

    if (document.getElementById('featured-products-row-1')) {
        if (typeof loadFeaturedProducts === 'function') {
            loadFeaturedProducts();
        } else {
            console.warn('loadFeaturedProducts() not found on index.html');
        }
    }

    if (document.getElementById('galleryTabContent')) {
        if (typeof loadAllProducts === 'function') {

            document.querySelectorAll('#galleryTabContent .row').forEach(row => row.innerHTML = '');
            loadAllProducts();
        } else {
            console.warn('loadAllProducts() not found on shop.html');
        }
    }

    if (document.getElementById('product-detail-section')) {
        if (typeof loadProductDetails === 'function') {
            loadProductDetails();
        } else {
            console.warn('loadProductDetails() not found on product_detail.html');
        }
    }

    if (document.getElementById('cart-items-container')) {
        if (typeof renderCartPage === 'function') {
            renderCartPage(); // (ฟังก์ชันนี้จะเรียก calculateTotal() เอง)
        } else {
            console.warn('renderCartPage() not found on cart.html');
        }
    }

    if (document.getElementById('checkout-summary-list')) {
        if (typeof loadCheckoutSummary === 'function') {
            loadCheckoutSummary();
        } else {
            console.warn('loadCheckoutSummary() not found on checkout.html');
        }
    }

    if (document.getElementById('search-section')) {
        if (typeof performSearch === 'function') {
            performSearch();
        } else {
            console.warn('performSearch() not found on search_results.html');
        }
    }


}

function translatePage() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        const translation = getTranslation(key); // (ใช้ helper function ของเราเอง)

        if (translation !== key) {
            const nodeName = el.nodeName.toUpperCase();


            if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
                if (el.type === 'submit' || el.type === 'button') {
                    el.value = translation;
                } else {
                    el.placeholder = translation;
                }
            } else if (nodeName === 'IMG') {
                el.alt = translation;
            } else if (el.hasAttribute('data-lang-value')) {

                el.value = translation;
                el.textContent = translation;
            } else {

                el.textContent = translation;
            }
        }
    });

    const titleElement = document.querySelector('title[data-lang-key]');
    if (titleElement) {
        document.title = getTranslation(titleElement.getAttribute('data-lang-key'));
    }
}