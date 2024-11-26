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
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 6, // Количество карточек на экране
  spaceBetween: 20, // Расстояние между карточками (в пикселях)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swipertwo = new Swiper(".swiper-one", {
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 4, // Количество карточек на экране
  spaceBetween: 20, // Расстояние между карточками (в пикселях)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperthree = new Swiper(".swiper-two", {
  slidesPerView: 1.5, // Видно 1.5 карточки
  spaceBetween: 20, // Расстояние между карточками
  centeredSlides: true, // Центрируем активный слайд
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
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
