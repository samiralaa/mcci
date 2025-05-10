const langToggle = document.getElementById("lang-toggle");
const navLinks = document.querySelectorAll("#nav-links li a");
const servicesTitle = document.getElementById("services-title");

let currentLang;
// localStorage.setItem("lang", localStorage.getItem('lang') ? localStorage.getItem('lang') : "en");
currentLang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "en";
console.log(currentLang);

const updateLanguage = () => {
  const translations = currentLang === "en" ? en : ar;

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("direction", currentLang === "ar" ? "rtl" : "ltr");
  localStorage.setItem("lang", currentLang);
  console.log(currentLang);
  console.log(localStorage.getItem("lang"));

  const keys = [
    "home",
    "services_products",
    "success_partners",
    "projects",
    "about_us",
    "media_center",
    "contact_us",
    "careers",
  ];

  navLinks.forEach((link, index) => {
    if (index < keys.length) {
      link.textContent = translations[keys[index]];
    }
  });

  servicesTitle.textContent = translations["our_services"];
  langToggle.textContent = translations["lang_button"];
};

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  updateLanguage();
});

const themeToggle = document.getElementById("theme-toggle");

let isDarkMode = localStorage.getItem("dark-mode") ? true : false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
  themeToggle.textContent = isDarkMode ? "🌙" : "🌞";
});

// Initialize
updateLanguage();

function showContent(idToShow, clickedH2) {
  const divs = document.querySelectorAll(".content");
  divs.forEach((div) => {
    div.style.display = div.id === idToShow ? "block" : "none";
  });

  // Remove active class from all h2s
  const allH2s = document.querySelectorAll("h2");
  allH2s.forEach((h2) => h2.classList.remove("active"));

  // Add active class to clicked h2
  clickedH2.classList.add("active");
}
