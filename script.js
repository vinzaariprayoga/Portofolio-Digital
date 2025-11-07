const navButtons = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(targetId) {
  const targetSlide = document.getElementById(targetId);
  if (!targetSlide) return;

  const current = slides[currentSlide];
  const newSlideIndex = Array.from(slides).indexOf(targetSlide);
  if (newSlideIndex === currentSlide) return;

  // arah animasi
  if (newSlideIndex > currentSlide) {
    current.classList.remove('active');
    current.classList.add('exit-left');
  } else {
    current.classList.remove('active');
    current.classList.add('exit-right');
  }

  // tunggu animasi selesai
  setTimeout(() => {
    slides.forEach(s => s.classList.remove('active', 'exit-left', 'exit-right'));
    targetSlide.classList.add('active');
    currentSlide = newSlideIndex;

    // update tombol aktif
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-target="${targetId}"]`).classList.add('active');
  }, 500); // sesuaikan dengan durasi animasi CSS
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    showSlide(target);
  });
});

// Tambahan untuk tombol Let's Go!
const letsGoBtn = document.getElementById('btnLetsGo');
if (letsGoBtn) {
  letsGoBtn.addEventListener('click', () => {
    showSlide('about me');
  });
}
