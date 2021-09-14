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
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

const scaleCv = () => {
  document.body.classList.add('scale-cv');
}

const removeScaleCv = () => {
  document.body.classList.remove('scale-cv');
}

let areaCv = document.querySelector('#area-cv');

let cvGeneratePdfBtn = document.querySelector('#cv-button')

let opt = {
  margin:       0,
  filename:     'CV_Gadiyatov_Anton.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};


const generateResume = () => {
  html2pdf(areaCv, opt);
}

cvGeneratePdfBtn.addEventListener('click', () => {
  scaleCv();
  generateResume();
  setTimeout(removeScaleCv, 5000);
})
