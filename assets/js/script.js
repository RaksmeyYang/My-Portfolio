// Skills Animation

const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  bars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Scroll Reveal

ScrollReveal().reveal(".section-title", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".glass-card", {
  origin: "bottom",
  distance: "80px",
  duration: 1200,
});

ScrollReveal().reveal(".skill", {
  interval: 100,
  origin: "left",
  distance: "50px",
  duration: 1000,
});

ScrollReveal().reveal(".project-card", {
  interval: 200,
  origin: "bottom",
  distance: "100px",
  duration: 1200,
});

ScrollReveal().reveal(".timeline-item", {
  interval: 200,
  origin: "right",
  distance: "80px",
  duration: 1200,
});

ScrollReveal().reveal(".certificate-card", {
  interval: 150,
  scale: 0.85,
  duration: 1000,
});

ScrollReveal().reveal(".contact-form", {
  origin: "left",
  distance: "80px",
  duration: 1200,
});

ScrollReveal().reveal(".contact-info", {
  origin: "right",
  distance: "80px",
  duration: 1200,
});

// Back To Top

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark Mode Toggle

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});