var slideIndex = 1;

makeSlideshow(slideIndex);

function plusSlides(n) {        
  makeSlideshow((slideIndex += n), "previous");
}
function plusSlides(n) {
  makeSlideshow((slideIndex += n), "next");
}
function currentSlide(n) {
  makeSlideshow((slideIndex = n));
}

function makeSlideshow(n, className) {
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}

setInterval(function () {
  slideIndex++;
  makeSlideshow(slideIndex);
}, 5000);
