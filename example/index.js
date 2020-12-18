const boxes = document.querySelectorAll(".box");

boxes.forEach((box) =>
  box.addEventListener("transitionend", (e) => {
    e.target.classList.remove("move");
  })
);

document.querySelector("button").addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.add("move");
  });
});

eases.addEventListener("change", (e) => {
  boxes.forEach((box) => {
    ["in", "out", "inout"].forEach((i) => box.classList.remove(i));
    box.classList.add(e.target.options[e.target.options.selectedIndex].value);
  });
});
