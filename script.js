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

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Listen for scroll events
    window.onscroll = function() {
        // Show or hide the button based on scroll position
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Check if the scroll event is firing
    console.log('Scroll event listener is active');