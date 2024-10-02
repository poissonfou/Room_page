//mobile menu toggle
const hamburguerMenu = document.getElementById("menu__icon");
const closeIcon = document.getElementById("close__icon");
const navMobile = document.getElementById("nav__mobile");
const overlay = document.getElementById("overlay");

hamburguerMenu.addEventListener("click", () => {
  navMobile.classList.add("nav--active");
  overlay.classList.add("overlay--active");
});

closeIcon.addEventListener("click", () => {
  navMobile.classList.remove("nav--active");
  overlay.classList.remove("overlay--active");
});

const imgCarrousel = document.getElementById("imgs__container");
const imagesMobile = document.getElementsByClassName("main__img--mobile");
const imagesDesktop = document.getElementsByClassName("main__img--desktop");
const leftBtnDesktop = document.getElementById("left__btn--desktop");
const rightBtnDesktop = document.getElementById("right__btn--desktop");
const leftBtnMobile = document.getElementById("left__btn--mobile");
const rightBtnMobile = document.getElementById("right__btn--mobile");

let i = 0;
rightBtnDesktop.addEventListener("click", () => {
  if (i == 3) return;
  i++;
  imagesDesktop[i].scrollIntoView({ behavior: "smooth" });
});

leftBtnDesktop.addEventListener("click", () => {
  if (i == 0) return;
  i--;
  if (i == 2) i--;
  imagesDesktop[i].scrollIntoView({ behavior: "smooth" });
});

rightBtnMobile.addEventListener("click", () => {
  if (i == 3) return;
  i++;
  imagesMobile[i].scrollIntoView({ behavior: "smooth" });
});

leftBtnMobile.addEventListener("click", () => {
  if (i == 0) return;
  i--;
  if (i == 2) i--;
  imagesMobile[i].scrollIntoView({ behavior: "smooth" });
});
