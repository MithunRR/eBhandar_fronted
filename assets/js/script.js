// scroll to top script 
let backToTopBtn = document.getElementById("back-to-top");

// on scroll show the button
window.onscroll = function() {funcScrolled()};
function funcScrolled() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function backToFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// carousa image Slideer  styling

var slideIndex = 1;
    var slideTimer;

    showSlides();

    function plusSlides(n) {
        clearTimeout(slideTimer);
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        if (n === undefined) {
            n = ++slideIndex;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

        slideTimer = setTimeout(function () {
            showSlides(); // Change image every 3 seconds without incrementing index
        }, 4000);
    }