// 1. select first
// 2. Show Form and Close Form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn

// select - event - function
let addBtn = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

addBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});

let form = document.querySelector("form");
let imgUrlInput = document.querySelector(
  "input[placeholder = 'https://example.com/photo.jpg']",
);
let nameInput = document.querySelector("input[placeholder='Enter full name']");
let homeInput = document.querySelector('input[placeholder="Enter home town"]');
let purposeInput = document.querySelector(
  'input[placeholder="e.g., Quick appointment note"]',
);
let categoryInput = document.querySelectorAll('input[name="category"]');
let submitInput = document.querySelector(".submit-btn");
console.log(categoryInput);

categoryInput.addEventListener("click", () => {
  console.dir(categoryInput);
});N

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let img = imgUrlInput.value.trim();
  let name = nameInput.value.trim();
  let home = homeInput.value.trim();
  let purpose = purposeInput.value.trim();

  if (img === "") {
    alert("Pleace Enter Image URL");
    return;
  }
  if (name === "") {
    alert("Pleace Enter Your Name");
    return;
  }
  if (home === "") {
    alert("Pleace Enter Your Home Town");
    return;
  }
  if (purpose === "") {
    alert("Pleace Enter Your Purpose");
    return;
  }
  if (cateogry === "") {
    alert("Pleace Enter Category");
    return;
  }
});
