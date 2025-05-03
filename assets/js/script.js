const langToggle = document.getElementById('lang-toggle');
const navLinks = document.querySelectorAll('#nav-links li a');
const servicesTitle = document.getElementById('services-title');

let currentLang = 'en';

const updateLanguage = () => {
  const translations = currentLang === 'en' ? en : ar;

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  const keys = [
    "home", 
    "services_products", 
    "success_partners", 
    "projects", 
    "about_us", 
    "media_center", 
    "contact_us",
    "careers"
  ];

  navLinks.forEach((link, index) => {
    if (index < keys.length) {
      link.textContent = translations[keys[index]];
    }
  });

  servicesTitle.textContent = translations["our_services"];
  langToggle.textContent = translations["lang_button"];
};

langToggle.addEventListener('click', () => {
  currentLang = (currentLang === 'en') ? 'ar' : 'en';
  updateLanguage();
});

const themeToggle = document.getElementById('theme-toggle');

let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeToggle.textContent = isDarkMode ? '🌙' : '🌞';
});

// Initialize
updateLanguage();
