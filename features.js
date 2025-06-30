// Cleaned-up features.js file

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Toggle menu for mobile navigation
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
    });
}

// Progress bar functionality
const progressBar = document.getElementById('progress-bar');

if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// Add any other required functionality that your website still uses here.
// Remove all unused variables, event listeners, and functions tied to cart or form elements.
let slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

// Change slide on button click
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show specific slide when dot is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to show the appropriate slide
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Wrap slide index if out of bounds
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides and deactivate all dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}
// Automatically play the video when it enters the viewport
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('iframe');

        if (entry.isIntersecting && video) {
            // Play the YouTube video using postMessage
            video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the video is in view

// Observe all slides with videos
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    if (slide.querySelector('iframe')) {
        videoObserver.observe(slide);
    }
});