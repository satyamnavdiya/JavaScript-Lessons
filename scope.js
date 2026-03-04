// scope
// scope chhe ke tame tamra created variables and functions no kya sudhi use kari shako chhavo te batave chhe

// scope types:
// function scope --> function ni andar j use kari shakai chhe
function abc() {
  var a = 12; // function scope
}
// global scope --> pura code ma use kari shakai chhe
var b = 15; // global scope
// block scope --> {} --> curly braces ma j use kari shakay chhe
{
  var c = 16; // block scope
}

// execution content
// Phase :  1.memory creation
//          2. execution phase

// lexical scope vs dyanamic scope
// lexical scope : varibale ja available tya tene use/excess kari shakiye chhiye

// dyanamic scope: variable ne jya acess karo tena par depand karshe ke shu value malashe

// what's log?
let d = 20;
function bcd() {
  console.log(d);
}
function efg() {
  let d = 25;
  bcd();
}
efg();

// Closure definition and How variables are preserved
// closures hoi chhe funcations je koi parent fnc ni undar hoy ane andar valo fnc return thato hoy, ane return fnc use kare, parent fnc no koi variable
function parent() {
  let a = 12;
  return function () {
    // when you retrun funcation that function was killed with their logic and variable --> but when you use closures that create a backlink that save your killed fnc, and that backlink name is [[environment]]
    console.log(a);
  };
}
let fnc1 = parent();
fnc1(); // if you use closure use have to run fnc two times
// use case:
// private counters
function count() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}
let fnc = count();
fnc();
fnc();
fnc();
fnc();
fnc();

let fnc2 = count();
fnc2();
fnc2();
fnc2();
fnc2();

// encapsulation -- limit acess of functions

function clickLimit() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked : ${click} times`);
    } else {
      console.error("limit reached");
    }
  };
}
let fnc3 = clickLimit();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();

// create a toaster
function createToster(configs) {
  let parent = document.querySelector(".parent");
  return function (noti) {
    let div = document.createElement("div");
    div.className = `inline-block ${configs.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} px-6 py-3 rounded-lg shadow-lg duration-300 pointer-events-none `;

    if (configs.positionX !== "left" || configs.positionY !== "top") {
      parent.className += `${configs.positionX === "left" ? "left-10" : "right-10"} ${configs.positionY === "bottom" ? "bottom-10" : "top-10"}`;
    }

    div.textContent = noti;
    parent.appendChild(div);

    setTimeout(() => {
      parent.removeChild(div);
    }, configs.duration * 1000);
  };
}

let toaster = createToster({
  positionX: "left",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toaster("This is a dummy notifications");
toaster("This is a dummy notifications");
toaster("This is a dummy notifications");

// with timer
setTimeout(() => {
  toaster("create a Toaster");
}, 2000);


// next topic : this keyword