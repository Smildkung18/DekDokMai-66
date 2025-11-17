function createProductCard(productId, product) {
    const name = getTranslation(product.nameKey);
    const description = getTranslation(product.descKey);

    return `
    <div class="col-lg-4 mb-4">
        <div class="card product-card h-100">
            <img src="${product.images[0]}" class="card-img-top" alt="${name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description.substring(0, 100)}...</p>
                <h5 class="card-price">${product.price.toLocaleString()} ${getTranslation('detail_price_unit')}</h5>
                <button onclick="viewProduct('${productId}')" class="btn btn-primary mt-auto" data-lang-key="btn_view_details">
                    ${getTranslation('btn_view_details')}
                </button>
            </div>
        </div>
    </div>
    `;
}

function viewProduct(productId) {
    const product = allProducts[productId];
    if (product) {
        localStorage.setItem('currentProduct', JSON.stringify(product));
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'product_detail.html';
        }, 500);
    }
}

function performSearch() {

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchTitle = document.getElementById('search-title');
    const resultsContainer = document.getElementById('results-container');
    const noResultsMessage = document.getElementById('no-results-message');
    if (query) {

        searchTitle.innerHTML = `${getTranslation('search_title')} "<strong>${query}</strong>"`;

        const lowerCaseQuery = query.toLowerCase();

        let resultsHTML = '';
        let productsFound = 0;

        for (const productId in allProducts) {
            const product = allProducts[productId];
            const translatedName = getTranslation(product.nameKey).toLowerCase();
            const translatedDesc = getTranslation(product.descKey).toLowerCase();

            if (translatedName.includes(lowerCaseQuery) || translatedDesc.includes(lowerCaseQuery)) {
                productsFound++;
                resultsHTML += createProductCard(productId, product);
            }
        }

        if (productsFound > 0) {
            resultsContainer.innerHTML = resultsHTML;
        } else {
            noResultsMessage.style.display = 'block';
        }

    } else {

        searchTitle.textContent = getTranslation('search_no_query');
        noResultsMessage.style.display = 'block';
    }
}

