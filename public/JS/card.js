document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const scrollAmount = 300;
    const scrollInterval = 4000; // Auto-scroll interval set to 4 seconds
    let scrollIntervalId;
    const dotsContainer = document.createElement('div'); // Create dots container
    dotsContainer.classList.add('carousel-dots'); // Add class to dots container

    function startAutoScroll() {
        scrollIntervalId = setInterval(function() {
            carousel.scrollBy(scrollAmount, 0);
        }, scrollInterval);
    }

    startAutoScroll();

    carousel.addEventListener('mouseenter', function() {
        clearInterval(scrollIntervalId);
    });

    carousel.addEventListener('mouseleave', function() {
        startAutoScroll();
    });

    // Generate dots based on the number of books
    const books = document.querySelectorAll('.book');
    const numOfDots = 6; // Change the number of dots here
    for (let i = 0; i < numOfDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            carousel.scrollTo({
                left: i * scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Append dots container to the carousel container
    carouselContainer.appendChild(dotsContainer);

    // Update active dot based on scroll position
    carousel.addEventListener('scroll', function() {
        const index = Math.round(carousel.scrollLeft / scrollAmount);
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
    });

    // Event listeners for previous and next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        carousel.scrollBy(-scrollAmount, 0);
    });

    nextButton.addEventListener('click', function() {
        carousel.scrollBy(scrollAmount, 0);
    });
});
