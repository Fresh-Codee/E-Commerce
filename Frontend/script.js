// Select elements
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search-btn');
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const quickViewButtons = document.querySelectorAll('.quick-view');
const categoryLinks = document.querySelectorAll('.category-nav ul li a');

let cartCount = 0; // Track cart items

// Handle search functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log(`Searching for: ${query}`);
        // Add your search functionality here
    } else {
        alert('Please enter a search term!');
    }
});

// Handle "Add to Cart" functionality
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Item added to cart!');
    });
});

// Handle "Quick View" functionality
quickViewButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productDescription = productCard.querySelector('.product-description').textContent;

        console.log(`Quick View: ${productName} - ${productPrice}`);
        console.log(`Description: ${productDescription}`);
    });
});


// Highlight active category in navigation
categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        categoryLinks.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");

    // Event delegation to handle click events on dynamically added buttons
    productGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-button")) {
            const productCard = event.target.closest(".product-card");
            const description = productCard.querySelector(".product-description");

            if (description.classList.contains("hidden")) {
                description.classList.remove("hidden");
                event.target.textContent = "Hide";
            } else {
                description.classList.add("hidden");
                event.target.textContent = "View";
            }
        }
    });
});
