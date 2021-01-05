const styleSheet = document.querySelector("#stylesheet");
const toggle = document.querySelector("#toggle");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

toggle.addEventListener("click", () => {
  if (styleSheet.hasAttribute("disabled")) {
    add.style.display = "none";
    remove.style.display = "initial";
  } else {
    add.style.display = "initial";
    remove.style.display = "none";
  }

  styleSheet.toggleAttribute("disabled");
});

const menubutton = document.querySelector("#menu_button");
const closebutton = document.querySelector("#close");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("header nav > a");

console.log(navLinks);

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
