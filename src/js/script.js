const showMenu = (toggleId, navId) => {
  const toggle = document.querySelector(`#${toggleId}`);
  const nav = document.querySelector(`#${navId}`);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

const navLinks = document.querySelectorAll(".nav__link");

const showMenuHandler = () => {
  const navMenu = document.querySelector(`#nav-menu`);
  navMenu.classList.toggle("show-menu");
};

navLinks.forEach((link) => {
  link.addEventListener("click", showMenuHandler);
});

const sections = document.querySelectorAll(`section[id]`);

const scrollActiveSectionHandler = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*="#${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*="#${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActiveSectionHandler);

const scrollTop = () => {
  const scrollTop = document.querySelector(`#scroll-top`);
  const scrollY = window.pageYOffset;

  if (scrollY >= 200) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollTop);

const themeBtn = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const scaleCv = () => {
  document.body.classList.add("scale-cv");
};

const removeScaleCv = () => {
  document.body.classList.remove("scale-cv");
};

let areaCv = document.querySelector("#area-cv");

let cvGeneratePdfBtn = document.querySelector("#cv-button");

let opt = {
  margin: 0,
  filename: "CV_Gadiyatov_Anton.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

const generateResume = () => {
  html2pdf(areaCv, opt);
};

cvGeneratePdfBtn.addEventListener("click", () => {
  scaleCv();
  generateResume();
  setTimeout(removeScaleCv, 5000);
});

const languageElement = document.querySelector(".change-language");
const languageElementLanguageContent = document.querySelector(
  ".change-language__language"
);
const languageBtn = document.querySelector("#language-button");
const languageIcon = "bx-toggle-right";

const selectedLanguage = localStorage.getItem("selected-language");
const selectedLanguageIcon = localStorage.getItem("selected-language-icon");

const getCurrentLanguage = () =>
  languageElementLanguageContent.textContent === "RU" ? "RU" : "ENG";
const getCurrentLanguageIcon = () =>
  languageBtn.classList.contains(languageIcon)
    ? "bx-toggle-right"
    : "bx-toggle-left";

languageElement.addEventListener("click", () => {
  languageElementLanguageContent.textContent =
    languageElementLanguageContent.textContent === "RU" ? "ENG" : "RU";
  languageBtn.classList.toggle(languageIcon);

  localStorage.setItem("selected-language", getCurrentLanguage());
  localStorage.setItem("selected-language-icon", getCurrentLanguageIcon());

  changeLanguage();
});

if (selectedLanguageIcon === languageIcon) {
  languageBtn.classList.toggle(languageIcon);
}

if (selectedLanguage === "RU") {
  languageElementLanguageContent.textContent = "RU";
} else {
  languageElementLanguageContent.textContent = "ENG";
}

if (selectedTheme === "dark") {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);
}

const changeLanguage = () => {
  if (getCurrentLanguage() === "RU") {
    changeLanguageToEng();
  } else {
    changeLanguageToRu();
  }
};

const changeLanguageToRu = () => {
  document.querySelector(".home__title").innerHTML = `
  АНТОН <b>ГАДИЯТОВ</b>
  `;

  document.querySelector(
    ".home__information"
  ).innerHTML = `<i class="bx bx-map home__icon"></i> Уфа, Россия`;

  document.querySelector(".social .section-title").textContent =
    "Cоциальные сети";

  document.querySelector(".profile .section-title").textContent = "O себе";

  document.querySelector(".profile__description").textContent =
    "Начинающий frontend-developer с техническим и экономическим образованием. Уверенное знание HTML, CSS/SCSS, JavaScript.";

  document.querySelector(".education .section-title").textContent =
    "Образование";

  const eduTitles = document.querySelectorAll(".education__title");
  eduTitles[1].textContent = "Экономист-менеджер";
  eduTitles[2].textContent = "Техник в отрасли связи";

  const eduStudies = document.querySelectorAll(".education__studies");
  eduStudies[0].textContent = "Cамообучение";
  eduStudies[1].textContent =
    "Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А.Бонч-Бруевича";
  eduStudies[2].textContent =
    "Санкт-Петербургский колледж телекоммуникаций им. Э.Т.Кренкеля";

  document.querySelector(".skills .section-title").textContent = "Навыки";

  document.querySelector(".experience .section-title").textContent =
    "Опыт работы";

  const expTitle = document.querySelectorAll(".experience__title");
  expTitle[0].textContent = "Старший инженер";
  expTitle[1].textContent = "Инженер";
  expTitle[2].textContent = "Старший техник";

  const expComp = document.querySelectorAll(".experience__company");
  expComp[0].textContent = "С 2017 по 2018 | РИРВ";
  expComp[1].textContent = "С 2014 по 2017 | РИРВ";
  expComp[2].textContent = "С 2009 по 2014 | РИРВ";

  const expDescr = document.querySelectorAll(".experience__description");
  expDescr[0].textContent =
    "Написание программ для автоматического тестирования печатных плат. Автоматическое и ручное тестирование печатных плат. Периодические испытания изделий. Работа с документацией";
  expDescr[1].textContent =
    "Автоматическое и ручное тестирование печатных плат. Периодические испытания изделий. Работа с документацией.";
  expDescr[2].textContent =
    "Ручное тестирование печатных плат. Периодические испытания изделий.";

  document.querySelector(".projects .section-title").textContent = "Проекты";

  document.querySelector(".certificates .section-title").textContent =
    "Сертификаты";

  document.querySelector(".languages .section-title").textContent = "Языки";

  const langNames = document.querySelectorAll(".languages__name");
  langNames[0].innerHTML = `
    <span class="languages__circle"></span> Русский
    <span class="languages__aditional-info"> (родной)</span>`;
  langNames[1].innerHTML = `
  <span class="languages__circle"></span> Английский
  <span class="languages__aditional-info"> (B1/B2)</span>`;
  langNames[2].innerHTML = `
  <span class="languages__circle"></span> Немецкий
  <span class="languages__aditional-info"> (A1)</span>`;

  document.querySelector(".interests .section-title").textContent = "Интересы";

  const interContent = document.querySelectorAll(".interests__content");
  interContent[0].innerHTML = `
  <i class="bx bx-book interests__icon"></i>
  <span class="interests__name">Чтение</span>`;
  interContent[1].innerHTML = `
  <i class="bx bx-dumbbell interests__icon"></i>
  <span class="interests__name">Фитнесс</span>`;
  interContent[2].innerHTML = `
  <i class="bx bxs-keyboard interests__icon"></i>
  <span class="interests__name">Игры</span>`;

  document.querySelector(".code .section-title").textContent = "Пример кода";
};

const changeLanguageToEng = () => {
  document.querySelector(".home__title").innerHTML = `
  ANTON <b>GADIYATOV</b>
  `;

  document.querySelector(
    ".home__information"
  ).innerHTML = `<i class="bx bx-map home__icon"></i> Ufa, Russia`;

  document.querySelector(".social .section-title").textContent = "Social";

  document.querySelector(".profile .section-title").textContent = "Profile";

  document.querySelector(".profile__description").textContent =
    "Novice frontend-developer with technical and economic education. Confident knowledge of HTML, CSS/SCSS, JavaScript.";

  document.querySelector(".education .section-title").textContent = "Education";

  const eduTitles = document.querySelectorAll(".education__title");
  eduTitles[1].textContent = "SPECIALIST OF ECONOMIC";
  eduTitles[2].textContent = "COMMUNICATION TECHNICIAN";

  const eduStudies = document.querySelectorAll(".education__studies");
  eduStudies[0].textContent = "Self taught";
  eduStudies[1].textContent =
    "The Bonch-Bruevich St. Petersburg State University of Telecommunications";
  eduStudies[2].textContent =
    "Saint-Petersburg College of Telecommunications of The Bonch-Bruevich Saint-Petersburg State University of Telecommunications";

  document.querySelector(".skills .section-title").textContent = "Skills";

  document.querySelector(".experience .section-title").textContent =
    "EXPERIENCE";

  const expTitle = document.querySelectorAll(".experience__title");
  expTitle[0].textContent = "Senior engineer";
  expTitle[1].textContent = "Engineer";
  expTitle[2].textContent = "Senior technician";

  const expComp = document.querySelectorAll(".experience__company");
  expComp[0].textContent = "From 2017 to 2018 | RIRT";
  expComp[1].textContent = "From 2014 to 2017 | RIRT";
  expComp[2].textContent = "From 2009 to 2014 | RIRT";

  const expDescr = document.querySelectorAll(".experience__description");
  expDescr[0].textContent =
    "Tests development for automatic circuit boards testing. Automatiс and manual circuit boards testing. Periodic product testing. Document management.";
  expDescr[1].textContent =
    "Automatiс and manual circuit boards testing. Periodic product testing. Document management.";
  expDescr[2].textContent =
    "Manual circuit boards testing. Periodic product testing.";

  document.querySelector(".projects .section-title").textContent = "projects";

  document.querySelector(".certificates .section-title").textContent =
    "certificates";

  document.querySelector(".languages .section-title").textContent = "languages";

  const langNames = document.querySelectorAll(".languages__name");
  langNames[0].innerHTML = `
    <span class="languages__circle"></span> Russian
    <span class="languages__aditional-info"> (native)</span>`;
  langNames[1].innerHTML = `
  <span class="languages__circle"></span> English
  <span class="languages__aditional-info"> (B1/B2)</span>`;
  langNames[2].innerHTML = `
  <span class="languages__circle"></span> Deutsch
  <span class="languages__aditional-info"> (A1)</span>`;

  document.querySelector(".interests .section-title").textContent = "INTERESTS";

  const interContent = document.querySelectorAll(".interests__content");
  interContent[0].innerHTML = `
  <i class="bx bx-book interests__icon"></i>
  <span class="interests__name">Reading</span>`;
  interContent[1].innerHTML = `
  <i class="bx bx-dumbbell interests__icon"></i>
  <span class="interests__name">Fitness</span>`;
  interContent[2].innerHTML = `
  <i class="bx bxs-keyboard interests__icon"></i>
  <span class="interests__name">Gaming</span>`;

  document.querySelector(".code .section-title").textContent = "Code sample";
};

changeLanguage();
