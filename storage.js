// localStorage API: setItem, getItem, removeItem, clear
// localstorage --> save that data into browser's storage, after close browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete thato nathi)
// ~ 5 MB storage

// set Item
// localStorage.setItem("key_name", "value")
localStorage.setItem("name", "user");
localStorage.setItem("email", "u@u.com");
// console.log -- into brower console
// Application -- Storage -- Local Storage

// get Item
// localStorage.getItem("key_name")
let val = localStorage.getItem("name");
console.log(val);

//remove Item
// localStorage.removeItem("kwy_name")
localStorage.removeItem("name");

// update Item
// localStorage.setItem("key_name", value);
// setItem -- add value and update value
localStorage.setItem("name", "test");

// sessionStorage API
// Session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe chhe, jyare pan tab close karsho tyare teni sahte data pan delete thai jai chhe)
// ~ 5Mb Storage

// same as a LocalStorage
// setItem

// getItem

// removeItem

// updateItem

// clear
// sessionStorage.clear()

// Storing/retrieving strings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string
// JSON.stringify
// JSON.parse

// Basic cookie structure (manual key = Value; path =/ format)
// Cookie --> store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save kare chhe, cookie no use light data save karva mate thai chhe)
// when you reload web page data will be automatically send to server
// ~4 KB storage
document.cookie = "email = test@test.com";
// remove cookie: cookie in expire past ma set karo
// add extension -- Edit this cookie
// exprie cookie
document.cookie = "username=meet; max-age=60"; // 60 sec for minutes 60*minutes
document.cookie =
  "username=meet; expires=Wed, 20 Feb 2026 12:00:00 GMT";

// use case: save token, user banned or not




// Theme Perfrence
// window.matchMedia('(prefers-color-scheme: dark)') // hold OS themes
function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.add("dark");
  }
}

setDarkOrLight();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      setDarkOrLight();
    }
  });

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// put into first
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  setDarkOrLight();
}


// Optimaze it



// project 1 --> real time serach bar
