const body = document.body;
const langToggle = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-en][data-es]');

// Initialize state
let currentLang = 'en';

// Language switcher
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  body.dataset.lang = currentLang;
  langToggle.textContent = `[LANG: ${currentLang.toUpperCase()}]`;

  translatableElements.forEach(el => {
    el.innerHTML = el.getAttribute(`data-${currentLang}`);
  });
  console.log(`[SYS] Language switched to: ${currentLang.toUpperCase()}`);
});

console.log("[SYS.MODE: PIPELINE] Initialized.");
console.log("Tracking execution trace...");
