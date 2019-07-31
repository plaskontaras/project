"use strict";
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("aboutmain__mySlides");
  var dots = document.getElementsByClassName("aboutmain__column");
  var captionText = document.getElementById("aboutmain__caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for ( var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for ( var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("aboutmain__active","");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " aboutmain__active";
  captionText.innerHTML = dots[slideIndex-1].innerHTML;
}