// create new cards

// store into local storage

// get cards details from local storage

// handles buttons

// handles filters

// select --> event --> function (change)
let addBtn = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

addBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// select form fileds
const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']",
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']",
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']",
);
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']",
);
const categoryRadios = form.querySelectorAll("input[name='category']");
const submitButton = form.querySelector(".submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim(); // trim() --> remove first and last space

  let selected = false;
  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imageUrl === "") {
    alert("Please enter an Image URL.");
    return;
  }

  if (fullName === "") {
    alert("Please enter your Full Name.");
    return;
  }

  if (homeTown === "") {
    alert("Please enter your Home Town.");
    return;
  }

  if (purpose === "") {
    alert("Please enter the Purpose.");
    return;
  }

  if (!selected) {
    alert("Please select a category");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards();
});

// save into local storage

function saveToLocalStorage(obj) {
  // get old data
  if (localStorage.getItem("tasks") === null || []) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
} // before form events

// show cards
let stack = document.querySelector(".stack");
function showCards() {
  stack.innerHTML = "";

  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach(function (task) {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Bookings
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    // Finally, add the card to the DOM (for example, inside a container)
    document.querySelector(".stack").appendChild(card); // or any container of your choice
  });
}
showCards();

// up and down btn
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

upBtn.addEventListener("click", () => {
  console.log(stack.lastElementChild);
  let lastChild = stack.lastElementChild;

  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    //update
    updateStack();
  }
});
downBtn.addEventListener("click", () => {
  console.log(stack.firstElementChild);
  let firstChild = stack.firstElementChild;

  if (firstChild) {
    stack.append(firstChild, stack.firstElementChild);
    //update
    updateStack();
  }
});

function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  //   cards.forEach(function (card, index) {
  //     card.style.zIndex = 3 - index;
  //     card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
  //     card.style.opacity = `${1 - index * 0.02}`;
  //   });

  for (let i = 0; i < 3; i++) {
    const card = cards[i];
    card.style.zIndex = 3 - i;
    card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
    card.style.opacity = `${1 - i * 0.02}`;
  }
} // before upbtn and downbtn

// 1. select first
// 2. Show Form and Close Form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn
