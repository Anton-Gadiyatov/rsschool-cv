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

const sections = document.querySelectorAll(`#section[id]`);

const scrollActiveSectionHandler = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActiveSectionHandler);
