// SetTimeout, clearTimeout

// setTimeout --> run only one time
// timeout -- in ms

setTimeout(() => {
  console.log("Hello");
}, 5000);

// setInterval, clearInterval
// setInterval --> run into loop(infinte times)
setInterval(() => {
  console.log("Hi");
}, 5000);

// clear Interval
let tm = setInterval(() => {
  console.log("Hey");
}, 1000);

clearTimeout(tm);
// clearInterval(tm);

// popup windows

// Real use: delaying UI actions, auto-refresh

let count = 10;
let interval = setInterval(() => {
  if (count >= 1) {
    count--;
    console.log(count);
  } else {
    clearInterval(interval);
  }
}, 1000);

// Downloading
// total progress = 3 seconds
// 100%
// 3000 /100
let count1 = 0;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 = document.querySelector("h2");
let down = setInterval(() => {
  if (count1 <= 99) {
    count1++;
    progress.style.width = `${count1}%`;
    percent.textContent = `${count1}%`;
  } else {
    h2.textContent = "downloaded";
    clearInterval(down);
  }
}, 30); // 3000/100

// (sec * 1000) / 100

// Auto Hide Alert Banner After 3s - self

// setTimeout Vs setInterval

// next : local storage, session storage, Cookies -- storage file
