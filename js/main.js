// var typed = new Typed(".typing", {
//     strings: ["", "Designer", "Front-end Developer", "Coach"],
//     typeSpeed: 200,
//     BackSpeed: 100,
//     loop: True
// })



// ----------- For Mobile Side Navigation -------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// -----xxxx------ For Mobile Side Navigation -------xxxx------------





// -------------- Testimonial Slideshow ------------------------------

var slideIndex = 1;
var slideInterval; // Declare slideInterval globally
var isPaused = false; // Flag to track whether the slideshow is paused

showSlides(slideIndex);

// function to display a specific slide when a dot is clicked (Manual Navigation)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function to display slides
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
    }, 15); // A small delay to allow display changes before opacity change

    // Set "active" class to corresponding dot
    dots[slideIndex - 1].className += " active";
}

// Function to start the automatic slideshow
function startAutoSlide() {
    if (!isPaused) {
        slideInterval = setInterval(function () {
            slideIndex++;
            showSlides(slideIndex);
        }, 3000); // Change slide every 3 seconds
    }
}

// Function to stop the automatic slideshow
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Add event listeners for mouse enter and mouse leave
var slideContainer = document.getElementById("slide-container"); //  ID of slide container
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

// function on() {
//     var overlays = document.getElementById("overlay").style.display = "block";


// }


// ---------- Scroll to Top Button  -------

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ----xxx------ Scroll to Top Button  --xxx---------------



// -------------Copyright Year ----------------------

document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();

document.getElementById("copyrightYear2").innerHTML = new Date().getFullYear();