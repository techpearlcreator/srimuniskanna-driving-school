document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function showSlides() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Move to the next slide
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides,3000); // Change image every 2 seconds
    }

    showSlides(); // Start slideshow
});