// script.js
// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll(".dropdown-title");

  headers.forEach(function(header) {
      header.addEventListener("click", function() {
          var nextUl = this.nextElementSibling;
          if (nextUl.classList.contains("show")) {
              nextUl.classList.remove("show");
          } else {
              // Close any other open dropdowns
              document.querySelectorAll(".dropdown-content.show").forEach(function(ul) {
                  ul.classList.remove("show");
              });
              // Open the clicked one
              nextUl.classList.add("show");
          }
      });
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));

  // Make sure index is within bounds
  if (index >= slides.length) {
    currentSlide = 0; // Loop back to first slide
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Loop back to last slide
  } else {
    currentSlide = index;
  }

  // Show the current slide
  slides[currentSlide].classList.add('active');
}

// Go to next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Go to previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the first slide
showSlide(currentSlide);
let currentSlideReact = 0;
const reactSlides = document.querySelectorAll('#react-slide-1, #react-slide-2, #react-slide-3, #react-slide-4, #react-slide-5, #react-slide-6, #react-slide-7, #react-slide-8');

function showReactSlide(index) {
    // Hide all slides
    reactSlides.forEach(slide => slide.style.display = 'none');
    // Show the current slide
    reactSlides[index].style.display = 'block';
}

function nextSlideReact() {
    currentSlideReact = (currentSlideReact + 1) % reactSlides.length;
    showReactSlide(currentSlideReact);
}

function prevSlideReact() {
    currentSlideReact = (currentSlideReact - 1 + reactSlides.length) % reactSlides.length;
    showReactSlide(currentSlideReact);
}

// Show the first slide initially
showReactSlide(currentSlideReact);


