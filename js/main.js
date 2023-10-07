// var typed = new Typed(".typing", {
//     strings: ["", "Designer", "Front-end Developer", "Coach"],
//     typeSpeed: 200,
//     BackSpeed: 100,
//     loop: True
// })




// -------------- Testimonial Slideshow ------------------------------

var slideIndex = 1;
var slideInterval; // Declare slideInterval globally
var isPaused = false; // Flag to track whether the slideshow is paused

showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Handle slide wrap-around
    if (n > slides.length) {
        slideIndex = 1; // Go to the first slide if at the end
    }
    if (n < 1) {
        slideIndex = slides.length; // Go to the last slide if at the beginning
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; // Set opacity to 0 for a fade-out effect
        slides[i].style.display = "none";
    }
    // Remove "active" class from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide with a fade-in effect
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function () {
        slides[slideIndex - 1].style.opacity = 1; // Set opacity to 1 for a fade-in effect
    }, 10); // A small delay to allow display changes before opacity change

    // Set "active" class to corresponding dot
    dots[slideIndex - 1].className += " active";
}

// Function to start the automatic slideshow
function startAutoSlide() {
    if (!isPaused) {
        slideInterval = setInterval(function () {
            slideIndex++;
            showSlides(slideIndex);
        }, 3000); // Change slide every 3 seconds (adjust the time interval as needed)
    }
}

// Function to stop the automatic slideshow
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Add event listeners for mouse enter and mouse leave
var slideContainer = document.getElementById("slide-container"); //  ID of  slide container
slideContainer.addEventListener("mouseenter", function () {
    isPaused = true; // Pause the slideshow on mouse enter
    stopAutoSlide();
});
slideContainer.addEventListener("mouseleave", function () {
    isPaused = false; // Resume the slideshow on mouse leave
    startAutoSlide();
});

// Start the automatic slideshow initially
startAutoSlide();


// -----xxx--------- Testimonial Slideshow ---------xxx---------------------