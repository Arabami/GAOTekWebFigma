document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupBtn && loginBtn) {
    signupBtn.addEventListener("click", () => {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
    });

    loginBtn.addEventListener("click", () => {
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
    });
  }

const texts = [
  "Keysia",
  "Alieviara",
  "Farach",
  "Habibah",
  "22-02-2025"
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");
const leftArrow = document.getElementById("prevBtn");
const rightArrow = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".slide-indicators .dot");

function updateSlide() {
  dynamicText.classList.add("fade");
  setTimeout(() => {
    dynamicText.textContent = texts[index];
    dynamicText.classList.remove("fade");
    updateDots();
  }, 250);
}

function updateDots() {
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

leftArrow.addEventListener("click", () => {
  index = (index - 1 + texts.length) % texts.length;
  updateSlide();
});

rightArrow.addEventListener("click", () => {
  index = (index + 1) % texts.length;
  updateSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
});

updateDots();

  // ================= Smooth Scroll =================
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // ================= Scroll Fade-In Effect =================
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.getElementById("confessBtn").addEventListener("click", function () {
  alert("I really like you. And I mean it, wanna be mine forever??");
});
