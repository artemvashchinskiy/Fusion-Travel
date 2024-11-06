/* 
    Header  
*/
// change color on scroll

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#757575"; // Change to grey when scrolled down
        } else {
            header.style.backgroundColor = "transparent"; // Transparent when at top
        }
    });
});

// Hide menu on scroll down

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

//  Burger button on response

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.transform = 'translateX(0)';
    document.querySelector('#header').style.display = 'none';
    document.querySelector('#header').classList.add('hidden-header');
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.transform = 'translateX(100%)';
    document.querySelector('#header').style.display = 'flex';
    document.querySelector('#header').classList.remove('hidden-header');
});


/* 
    section welcome
*/
/*
document.querySelectorAll('.welcome-slides').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        // Remove active class from all slides
        document.querySelectorAll('.welcome-slides').forEach(slide => {
            slide.classList.remove('welcome-slides-active');
        });
        
        // Remove active class from all features
        document.querySelectorAll('.welcome-feature').forEach(feature => {
            feature.style.display = 'none'; // Hide all features
        });

        // Add active class to the clicked slide
        slide.classList.add('welcome-slides-active');
        slide.classList.add('circle-active');

        // Show corresponding feature and center it
        const selectedFeature = document.querySelectorAll('.welcome-feature')[index];
        selectedFeature.style.display = 'block';
        selectedFeature.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
*/

const welcomeFeatureClick = document.querySelectorAll('.welcome-feature');
const welcomeSlides = document.querySelectorAll('.welcome-slides');
function setActiveFeature(id) {
    // Reset all features and slides
    welcomeFeatureClick.forEach((feature) => {
        feature.classList.remove('welcome-feature-active');
    });
    welcomeSlides.forEach((slide) => {
        slide.classList.remove('welcome-slides-active');
        slide.querySelector('.circle').classList.remove('circle-active');
    });
    // Set the clicked feature and slide as active
    welcomeFeatureClick[id].classList.add('welcome-feature-active');
    welcomeSlides[id].classList.add('welcome-slides-active');
    welcomeSlides[id].querySelector('.circle').classList.add('circle-active');
    // Move the elements based on the active index
    moveFeatures(id);
}
function moveFeatures(activeIndex) {
    const total = welcomeFeatureClick.length;    
    welcomeFeatureClick.forEach((feature, index) => {
        // Calculate the new position for each element
        const diff = (index - activeIndex + total) % total;
        // Reset classes for position
        feature.classList.remove('move-left', 'move-right', 'move-opposite');
        if (diff === 0) {
            feature.classList.add('welcome-feature-active');
        } else if (diff === 1) {
            feature.classList.add('move-right');
        } else if (diff === total - 1) {
            feature.classList.add('move-left');
        } else {
            feature.classList.add('move-opposite');
        }
    });
}
// Initial setup
setActiveFeature(1); // Set the second feature as active by default
// Event listeners
welcomeFeatureClick.forEach((feature, index) => {
    feature.addEventListener('click', () => {
        setActiveFeature(index);
    });
});
welcomeSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        setActiveFeature(index);
    });
});

/* 
    section destination
*/
/*
let currentIndex = 0;
const itemsPerPage = 3;
const countryItems = document.querySelectorAll('.country-item');
const totalItems = countryItems.length;
function showItems(startIndex) {
    countryItems.forEach((item, index) => {
        if (index >= startIndex && index < startIndex + itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - itemsPerPage);
    showItems(currentIndex);
});
document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = Math.min(totalItems - itemsPerPage, currentIndex + itemsPerPage);
    showItems(currentIndex);
});
// Initialize
showItems(currentIndex);
*/

let currentIndex = 0;
const itemsPerPage = 3;
const countryItems = document.querySelectorAll('.country-item');
const totalItems = countryItems.length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
// Function to show items based on the current index
function showItems(startIndex) {
    countryItems.forEach((item, index) => {
        if (index >= startIndex && index < startIndex + itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    updateArrows();
}
// Function to update arrow states (switch between active/inactive)
function updateArrows() {
    // Left Arrow: If we're at the start, disable it
    if (currentIndex === 0) {
        leftArrow.src = 'img/arrow-left.svg'; // Inactive left arrow
        leftArrow.style.pointerEvents = 'none'; // Disable left arrow
    } else {
        leftArrow.src = 'img/arrow-left-active.svg'; // Active left arrow
        leftArrow.style.pointerEvents = 'auto'; // Enable left arrow
    }
    // Right Arrow: If we're at the end, disable it
    if (currentIndex + itemsPerPage >= totalItems) {
        rightArrow.src = 'img/arrow-right.svg'; // Inactive right arrow
        rightArrow.style.pointerEvents = 'none'; // Disable right arrow
    } else {
        rightArrow.src = 'img/arrow-right-active.svg'; // Active right arrow
        rightArrow.style.pointerEvents = 'auto'; // Enable right arrow
    }
}
// Left arrow click handler
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex = Math.max(0, currentIndex - itemsPerPage);
        showItems(currentIndex);
    }
});
// Right arrow click handler
rightArrow.addEventListener('click', () => {
    if (currentIndex + itemsPerPage < totalItems) {
        currentIndex = Math.min(totalItems - itemsPerPage, currentIndex + itemsPerPage);
        showItems(currentIndex);
    }
});
// Initialize
showItems(currentIndex);

/* 
    section opinion
*/

// Get all the necessary elements
const opinionContents = document.querySelectorAll('.opinion-content');
const testimonialSlides = document.querySelectorAll('.welcome-slides'); // Updated variable name

// Function to update the active testimonial based on the slide clicked
function updateOpinionContent(activeSlide) {
    // Loop through all .opinion-content items
    opinionContents.forEach((content, index) => {
        if (index === activeSlide) {
            // Show the current active content
            content.classList.add('active'); // Ensure the active class is added
        } else {
            // Hide the others
            content.classList.remove('active');
        }
    });

    // Update active class for the slides
    testimonialSlides.forEach(slide => {
        if (parseInt(slide.getAttribute('data-slide')) === activeSlide) {
            slide.classList.add('active-slide'); // Add active class to current slide
        } else {
            slide.classList.remove('active-slide'); // Remove active class from other slides
        }
    });
}

// Event listener for the testimonial slides
testimonialSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        const slideIndex = parseInt(slide.getAttribute('data-slide'));
        updateOpinionContent(slideIndex); // Update content based on slide clicked
    });
});

// Set default state with Julia's testimonial in the middle (data-slide="1")
updateOpinionContent(1); // Julia is in the middle by default (data-slide="1")
