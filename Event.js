// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener - event nu reaction -- give reaction when click, dbclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})
let p = document.querySelector("p");
p.addEventListener("click", () => {
  p.style.color = "red";
});

// p.addEventListener("dblclick", () => {
//   p.style.color = "green";
//   p.textContent = "Change text when you double click";
// });

let abc = () => {
  p.style.color = "green";
  p.textContent = "Change text when you double click";
};

p.addEventListener("dblclick", abc);

// remove Event Listener
p.removeEventListener("dblclick", abc);

// =================================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click

// input
// how to know which is typed ?
let inp = document.querySelector("input");

inp.addEventListener("input", (details) => {
  //  console.log(details);
  // console.log(deatails.data);
  // not print null when press backspace
  if (details.data !== null) {
    console.log(details.data);
  }
});

// change -- when you chagne elements state
let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", (dets) => {
  // console.log(dets);
  console.log(dets.target.value);
  device.textContent = "Device Selected";
  // device.textContent = "Device Selected : " + dets.target.value;
  // device.textContent = `${dets.target.value} Device Selected`;
  // use css class - text transfrom
});

// keyboradevenet - file create and make it

// input btn - file create

// form submit Event - file create

// MouseOver and Mouseout

// Mouse Move - create file

// Keyup

// ==================================================
// Event Object:
// sel.addEventListener("change", (dets) => {
//   console.log(dets); ==> dets -- that called event object
// });

// target, type, preventDefault
// target --> that show element
// type -->show  Event Type
// preventDefault --> use for html-form --> prevent form to refresh and clean details




// ================================
// event delegation ==> darek child par event listener na lagavata only parent par event listner lagavvu
// Event Bubbling and Capturing
// Event Bubbling --> jena par event aave tena par listener na hoy to aapdu event tena parent par listener gotase ane aavu karta karta upar traf move karshe
document.querySelector("#nav").addEventListener("click", () => {
  alert("Clicked");
});

// when you  click on text that show strike using bubbuling
// crete list that show shopping things -- use css (text decoration -> line-through)

//  make it reverve too
//use case: make it to do list thing
// Issue: if you child have event listener that can run and also run your parent event lister beacuse of event bubbling
// show it with examples
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector(".btn-1");

// btn.addEventListener("click", () => {
//   console.log("button Clicked");
// });

// c.addEventListener("click", () => {
//   console.log("c Clicked");
// });

// b.addEventListener("click", () => {
//   console.log("b Clicked");
// });

// a.addEventListener("click", () => {
//   console.log("a Clicked");
// });

// event Capturing ==> revece of event bubbling
// when you raise event then your event flow(propogation) ==> can run into two phase
// first phase ==> event can run to top level element to bottom level element
// second phase ==>  event can run to raised element to parent element
// First --> first phase then second phase ==> but phase 1 is default off, you have to on that setting
// first phase --> capture phase
// second phase --> event bubbling

// if you on capture phase then that show first phase
btn.addEventListener("click", () => {
  console.log("button Clicked");
});

c.addEventListener("click", () => {
  console.log("c Clicked");
});

b.addEventListener("click", () => {
  console.log("b Clicked");
});

a.addEventListener(
  "click",
  () => {
    console.log("a Clicked");
  },
  true,
); // on capture phase


// phase 2 : child --> parent (most_inner-inner-outer)
// true -- outer : phase 1 (true vali event run) : Parent --> child (outer(done)) Phase 2 (true vagar ni event run thai): child --> Parent (Most_inner --> inner)
// true -- outer, inner : phase 1 (true vali event run): parent --> Child (outer(done)--> inner (done)) Phase 2 (true vagar ni event run thai): Child --> Parent (Most_inner)



// use case : 
// 1. security layer
// 2. check when event  bubbling is fail

// event vs event lister
// capture vs bubbling


// dets.target.style.textDecoration = "line-through"


// live character conter
let inp_counter = document.querySelector(".inp-conuter");
let counter = document.querySelector("span");

inp_counter.addEventListener("input", () => {
  console.log(inp_counter.value.length);
  let left = 20 - inp_counter.value.length;
  counter.textContent = left;
  if(left < 0){
    counter.style.color = "red";
    // inp_counter.disabled = true;
  } else {
    counter.style.color = "black";
  }
});

// next topic : form validation
