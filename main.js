// JavaScript for fading out the full-width image and revealing the innovation section
var mainImageVisible = true;
var innovationSectionVisible = false;

document.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var fullWidthImage = document.querySelector('.full-width-image img');
    var innovationSection = document.querySelector('.innovation-section');
    var header = document.querySelector('header');
    var opacity = 1 - (scrolled / 200); // Adjust this value for the desired speed of fading

    fullWidthImage.style.opacity = mainImageVisible ? (opacity > 0 ? opacity : 0) : 0;

    // Show the innovation section when scrolling down
    if (scrolled > 50 && !innovationSectionVisible) {
        innovationSection.style.opacity = '1';
        innovationSection.style.pointerEvents = 'auto';
        innovationSectionVisible = true;
    } else if (opacity > 0) {
        innovationSectionVisible = false; // Reset the flag when scrolling up
        innovationSection.style.opacity = '0'; // Hide the innovation section when scrolling up
    }

    if (!mainImageVisible) {
        innovationSection.style.top = '0'; // Keep innovation section always visible
    } else {
        innovationSection.style.top = '-100vh';
    }

    // Make main.jpg reappear when at the very top
    if (scrolled === 0 && !mainImageVisible) {
        mainImageVisible = true;
        fullWidthImage.style.opacity = 1;
        innovationSection.style.opacity = '0'; // Hide the innovation section when main image reappears
    }
});

// Additional JavaScript for reapplying fade-out effect when resizing the window
window.addEventListener('resize', function() {
    var scrolled = window.scrollY;
    var fullWidthImage = document.querySelector('.full-width-image img');
    var opacity = 1 - (scrolled / 200);

    fullWidthImage.style.opacity = mainImageVisible ? (opacity > 0 ? opacity : 0) : 0;
});


document.addEventListener('DOMContentLoaded', function () {
    const sentences = document.querySelectorAll('.additional-sentence');
  
    sentences.forEach((sentence) => {
      sentence.addEventListener('mouseover', function () {
        this.style.color = 'white';
      });
  
      sentence.addEventListener('mouseout', function () {
        this.style.color = '#333';
      });
    });
  });