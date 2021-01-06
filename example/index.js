const menubutton = document.querySelector("#menu_button");
const closebutton = document.querySelector("#close");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("header nav > a");

menubutton.addEventListener("click", () => {
  header.classList.add("open");
});

closebutton.addEventListener("click", () => {
  header.classList.remove("open");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    header.classList.remove("open");
  })
);
