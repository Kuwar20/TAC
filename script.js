// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.product__add-to-cart');
const notification = document.getElementById('notification');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });
});

// Product hover effect
const products = document.querySelectorAll('.product');

products.forEach(product => {
    const image = product.querySelector('.product__image');
    const originalSrc = image.src;
    const hoverSrc = image.src.replace('w=600', 'w=601'); // Slightly different image for hover effect

    product.addEventListener('mouseenter', () => {
        image.src = hoverSrc;
    });

    product.addEventListener('mouseleave', () => {
        image.src = originalSrc;
    });
});

// Smooth scroll functionality
const exploreButton = document.getElementById('explore-button');
const productSection = document.getElementById('product-section');

exploreButton.addEventListener('click', () => {
    productSection.scrollIntoView({
        behavior: 'smooth'
    });
});