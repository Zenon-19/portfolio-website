// Animate sections on scroll
function revealSections() {
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
// Duplicate slider content for infinite loop effect
window.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('toolsSlider');
  if (slider) {
    slider.innerHTML += slider.innerHTML; // duplicate children
  }
});
// Animate About Me section and stats on scroll
function animateAboutSection() {
  const about = document.querySelector('.about-section');
  const card = document.querySelector('.github-contrib-card');
  const counts = document.querySelectorAll('.about-count');
  const trigger = window.innerHeight * 0.85;
  if (about && about.getBoundingClientRect().top < trigger) {
    about.classList.add('visible');
    if (card) card.classList.add('visible');
    counts.forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), 300 + i * 200);
    });
    // Counting animation
    document.querySelectorAll('.count').forEach(el => {
      if (!el.classList.contains('counted')) {
        el.classList.add('counted');
        let target = +el.getAttribute('data-count');
        let current = 0;
        let step = Math.ceil(target / 60);
        let interval = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(interval);
          } else {
            el.textContent = current.toLocaleString();
          }
        }, 18);
      }
    });
  }
}
window.addEventListener('scroll', animateAboutSection);
window.addEventListener('DOMContentLoaded', animateAboutSection);
// Add more interactive JS as needed
