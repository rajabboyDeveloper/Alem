function changeLanguage(lang, flagUrl) {
  // Update the displayed language
  document.getElementById("current-language").textContent = lang;

  // Update the flag icon source
  const flagImg = document.querySelector(".flag");
  flagImg.src = flagUrl;

  // Hide the dropdown after selection
  document.querySelector(".dropdown").style.display = "none";
}

// Show/hide dropdown on click
document
  .querySelector(".language-selector")
  .addEventListener("click", function () {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
// Инициализация Swiper

const input = document.querySelector("#phone");

// Инициализация intl-tel-input
const iti = intlTelInput(input, {
  initialCountry: "uz", // Начальная страна (Узбекистан)
  preferredCountries: ["uz", "ru", "us"], // Предпочтительные страны
  separateDialCode: true, // Разделяем код страны
  autoHideDialCode: false, // Код страны всегда видим
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18/build/js/utils.js", // Скрипт для форматирования
});

// Валидация номера телефона
input.addEventListener("blur", () => {
  if (iti.isValidNumber()) {
    console.log("Валидный номер телефона:", iti.getNumber());
  } else {
    console.error("Неверный номер телефона");
  }
});
const dropdownToggle = document.querySelector(".custom-dropdown-toggle");
const dropdownMenu = document.querySelector(".custom-dropdown-menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

// Close the dropdown if clicked outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".custom-dropdown")) {
    dropdownMenu.classList.remove("active");
  }
});
const openBtn = document.getElementById("open-offcanvas");
const closeBtn = document.getElementById("close-offcanvas");
const offcanvasContainer = document.getElementById("offcanvas-container");
const offcanvas = document.getElementById("offcanvas");

openBtn.addEventListener("click", () => {
  offcanvasContainer.style.display = "flex";
  setTimeout(() => offcanvas.classList.add("show"), 10);
});

closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("show");
  setTimeout(() => (offcanvasContainer.style.display = "none"), 300);
});

offcanvasContainer.addEventListener("click", (event) => {
  if (event.target === offcanvasContainer) {
    offcanvas.classList.remove("show");
    setTimeout(() => (offcanvasContainer.style.display = "none"), 300);
  }
});
const collapseHeader = document.getElementById("collapse-header");
const collapseBody = document.getElementById("collapse-body");
const collapseIcon = document.getElementById("collapse-icon");

collapseHeader.addEventListener("click", () => {
  const isVisible = collapseBody.classList.toggle("show");
  collapseIcon.classList.toggle("rotate", isVisible);
});
