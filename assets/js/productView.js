

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // let i;
    let slides = document.getElementsByClassName("slide-images");
    let fadeImg = document.getElementsByClassName("slide-image-option");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < fadeImg.length; i++) {
        fadeImg[i].className = fadeImg[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    fadeImg[slideIndex - 1].className += " active";
}