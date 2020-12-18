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

radius.addEventListener("change", (e) => {
  boxes.forEach((box) => {
    ["r-1", "r-2", "r-3", "r-4", "r-5", "r-full"].forEach((i) =>
      box.classList.remove(i)
    );
    box.classList.add(
      `r-${e.target.options[e.target.options.selectedIndex].value}`
    );
  });
});

color.addEventListener("change", (e) => {
  boxes.forEach((box) => {
    ["primary", "success", "attention", "danger", "info"].forEach((i) =>
      box.classList.remove(i)
    );
    e.target.options[e.target.options.selectedIndex].value &&
      box.classList.add(
        `${e.target.options[e.target.options.selectedIndex].value}`
      );
  });
});
