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
