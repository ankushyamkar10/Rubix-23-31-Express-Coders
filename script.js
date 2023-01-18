"use strict";
console.log("hello");
const slides = document.querySelectorAll(".slide");
console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
const goPrev = () => {
  counter--;
  slideImage();
};
const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach(
    (slide) => (slide.style.transform = `translateX(-${(counter % 4) * 100}%)`)
  );
};

// #FIXME time
setInterval(goNext, 5000);
