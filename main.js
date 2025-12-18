const slider = document.getElementById("heroSlider");
const slides = slider ? slider.querySelectorAll(".hero-slide") : [];

let current = 0;
const interval = 4500;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("is-active"));
  slides[index].classList.add("is-active");
  current = index;
}

function nextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

if (slides.length > 0) {
  showSlide(0);
  setInterval(nextSlide, interval);
}
