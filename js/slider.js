let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

function showSlideDots(){
  let slides = document.getElementsByClassName("slider__item");
  let parent = document.getElementById("slider__dot");

  for (let i = 0; i < slides.length; i++) {
    let slideDot = document.createElement('li');
    parent.appendChild(slideDot);
    console.log(i)
  }
}

showSlideDots();