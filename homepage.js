const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-button");
const body = document.body;

openMenu.addEventListener("click", () => {
 navbar.classList.add("open");
 body.classList.add("overlay");
});

closeMenu.addEventListener("click", () => {
 navbar.classList.remove("open");
 body.classList.remove("overlay"); 
});

window.addEventListener("resize", () => {
 if (window.innerWidth > 768) {
  navbar.classList.remove("open");
  body.classList.remove("overlay");
 }
});