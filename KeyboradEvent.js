let h2 = document.querySelector("h2");

window.addEventListener("keydown", (dets) => {
  console.log(dets);
  if (dets.key == " ") {
    h2.textContent = "Spc";
    console.log("space");
  } else {
    h2.textContent = dets.key;
  }
});

// ==========
let btn = document.querySelector("#btn");
let input = document.querySelector("input");
btn.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", (dets) => {
  console.log(dets);
  console.log(dets.target.files[0]?.name);
  // btn.textContent = dets.target?.files[0]?.name;
  let file = dets.target.files[0];
  if (dets.target.files) {
    btn.textContent = file.name;
  }
});
