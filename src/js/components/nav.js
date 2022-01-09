let navBurgerName = "js-nav-burger";
let navName = "js-nav";

const navBurger = document.querySelector(`.${navBurgerName}`);

if (navBurger) {
  const nav = document.querySelector(`.${navName}`);
  const navLinks = nav.querySelectorAll("a[href]");
  const navCloseButton = nav.querySelector("js-nav-close");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      nav.classList.remove("active");
      navBurger.classList.remove("active");
    });
  });

  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  navBurger.addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("active");
    nav.classList.toggle("active");
  });

  if (navCloseButton) {
    navCloseButton.addEventListener("click", (e) => {
      nav.classList.remove("active");
      navBurger.classList.remove("active");
    });
  }

  document.body.addEventListener("click", (e) => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      navBurger.classList.remove("active");
    }
  });
}
