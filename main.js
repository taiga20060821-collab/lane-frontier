// ===== Slider：矢印で切り替え＋自動切替 =====
// 「矢印を押せばスライドして次の画像」  [oai_citation:7‡ディティール.pptx](sediment://file_0000000077507206badc83a0bb6e396b)
const slidesEl = document.getElementById("slides");
const slides = slidesEl ? slidesEl.querySelectorAll(".slide") : [];

let current = 0;
const intervalMs = 4500;

function show(index) {
  slides.forEach(s => s.classList.remove("is-active"));
  slides[index].classList.add("is-active");
  current = index;
}

function next() {
  if (slides.length === 0) return;
  show((current + 1) % slides.length);
}

function prev() {
  if (slides.length === 0) return;
  show((current - 1 + slides.length) % slides.length);
}

const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

if (slides.length > 0) {
  show(0);

  // 自動切替
  let timer = setInterval(next, intervalMs);

  // 矢印クリック
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { next(); resetTimer(); });

  // 触ってる間は止める（誤操作防止）
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", stopTimer);
    slider.addEventListener("mouseleave", startTimer);
    slider.addEventListener("touchstart", stopTimer, { passive: true });
    slider.addEventListener("touchend", startTimer, { passive: true });
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function startTimer() {
    if (!timer) timer = setInterval(next, intervalMs);
  }
  function resetTimer() {
    stopTimer();
    startTimer();
  }
}
