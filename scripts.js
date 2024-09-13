// Get elements by their IDs
const searchIcon = document.getElementById('search-icon');
const cartIcon = document.getElementById('cart-icon');
const profileIcon = document.getElementById('profile-icon');

const searchBar = document.getElementById('search-bar');
const cartContent = document.getElementById('cart-content');
const profileInfo = document.getElementById('profile-info');

// Function to toggle visibility of the search bar
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('visible');
    searchBar.classList.toggle('hidden');

    // Hide other sections
    cartContent.classList.add('hidden');
    profileInfo.classList.add('hidden');
});

// Function to toggle visibility of the cart content
cartIcon.addEventListener('click', () => {
    cartContent.classList.toggle('visible');
    cartContent.classList.toggle('hidden');

    // Hide other sections
    searchBar.classList.add('hidden');
    profileInfo.classList.add('hidden');
});

// Function to toggle visibility of the profile info
profileIcon.addEventListener('click', () => {
    profileInfo.classList.toggle('visible');
    profileInfo.classList.toggle('hidden');

    // Hide other sections
    searchBar.classList.add('hidden');
    cartContent.classList.add('hidden');
});

document.querySelector('.read-more-button').addEventListener('click', function () {
    const container = this.closest('.description-container');
    container.classList.toggle('expanded');
    this.textContent = container.classList.contains('expanded') ? 'Хураах' : 'Үргэлжлүүлэх';
});


//ontsloh buteegdehuunuud
document.querySelectorAll('.product-item').forEach(item => {
    const images = item.querySelectorAll('.product-image');
    let currentImageIndex = 0;

    item.addEventListener('mouseover', () => {
        setInterval(() => {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }, 3000); // Зургийг 3 секундын дараа солих
    });

    item.addEventListener('mouseout', () => {
        clearInterval(); // Хулгана гарч ирэхэд зураг солихоо больж байна
    });
});


//uneer filter hiih
document.getElementById('filter-button').addEventListener('click', function() {
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    const products = document.querySelectorAll('.product-item');

    products.forEach(function(product) {
        const price = parseFloat(product.getAttribute('data-price'));

        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});


//but filter

function filterProducts() {
    const selectElement = document.getElementById('product-select');
    const selectedCategory = selectElement.value;
    
    // Get all product items
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        // Check if the product's category matches the selected category
        if (selectedCategory === 'all' || product.getAttribute('data-category') === selectedCategory) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}

