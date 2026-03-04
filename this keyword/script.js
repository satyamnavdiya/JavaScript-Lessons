let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
    console.log("function called");
  },
  submitForm: function (e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(this);
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";

    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {
    // self creation
    // add into localstorage
  },
};

userManager.init();

// create a object that have functions and blank array
// create submit event
// create a submit function
// create a addUser function
// create a removeUser function
// create a renderUi function
