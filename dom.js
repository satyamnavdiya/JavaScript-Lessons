// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node, Element, text, comment, Tags


// DOM Manipulation - change body or website using 
// select element from html
// chagne text
// change html
// change css
// change attribute
// event listeners


// Selecting Elements
// getElementById
let a = document.getElementById("abc");
// console.log(a)   
console.dir(a);

let b = document.getElementsByClassName("abc");
console.dir(b);

// most used in project and used by company 
let c = document.querySelector("h1") // -- only select first element that find in your html
console.dir(c);

let d = document.querySelectorAll("h1") // select all elements in you r html
console.log(d);

// Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag


// e.innerText = "Chagne Text Content"; // change text into h1 tag
// e.textContent = "Chagne Text Content";
e.innerHTML = "<i>Chagne Text Content</i>"; // change html tag and text both


// -----------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.body.querySelector('a')
console.dir(link)   
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// link.href = "www.google.com"
// element.setAttribute("name", "change")
link.setAttribute("href", "www.google.com")

// element.removeAttribute("name")
link.removeAttribute("href")


// --------------------------------
// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let pre = document.createElement("pre");
pre.textContent = "Hello Pre tag"
// append / prepend
// document.querySelector("body").append(pre);
document.querySelector("body").prepend(pre);

// remove 
let remove_h1 = document.querySelector("#abc")
remove_h1.remove();

// appendChild
 let div_h1 = document.createElement("div");
div_h1.textContent = "innder Div Tag create with JS";
document.querySelector(".box").appendChild(div_h1)


// append vs appendChild
// remove vs removeChild

// -------------------------------------------------------
// Style Updates via .style and classList (add, remove, toggle)
let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "white";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "capitalize";

// Class
// Add 
h1.classList.add("text");
console.dir(h1);
// remove
h1.classList.remove("abc");
console.dir(h1);
// toggle -- class --> available --> remove it
//          class --> not available --> add it
h1.classList.toggle("abc");
console.dir(h1)

// Tasks:
// 1. What is the DOM ? How Does it represent the HTML Structure?
// 2. Name the types of nodes in the DOM tree.
// 3. What's the difference between an element node and text node?
// 4. Inspect the following HTML in the browser and identify each node:
// <div>Hello<span>World</span></div>
// 5. What is Difference between getElementById and querySelector?
// 6. What does getElementsByClassName return? Is it an array?
// 7. Use querySelectorAll to select all buttons with class "buy-now".
// 8. T1: Select the heading of a page by ID and change its text to "Welcome to JS DOM"
// 9. T2: Select all <li> elements and print their text using a loop.
// let list = documnet.querySelectorAll("li");
// list.forEach((val)=>{
    // console.log(val.textContext)
    // })


    // for(let i=0; i < list.length; i++){
    //     console.log(list[i].textContent)
    // }


// 10. What's the differnce between innerText, textContent and innerHTML?
// 11. When should you use textContent instend of innerHTML?
// 12. T3: Select a Paragraph and replace its content with: <b> Updated </b> by JavaScript
// 13. How do you get the src of an image using JavaScript?
// 14. what does setAttribute() do?
// 15. Add a title attribute to a div dyanmically.
// 16. Remove the disabled attribute from a button.
// 17. what does createElement() do ? what's retured?
// 18. What's the difference between appendChild() and prepend()?
// 19. can you remove an element using removeChild() ?
// 20. create a new list item <li> New Task</li> and add it to the end of a <ul>.
// 21. create a new image element with a placeholder source and add it at the top of a div.
// 22. Select the first item in a list and delete it from the DOM.
// 23. How do you change the background color of an element?
// 24. What's the difference between .classList.add() and classList.toggle()?
// 25. Add hightlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((elem)=>{
    // elem.classList.add("highlight")
    // })
// 26. Set the font size of all <p> elements to 18px using .style
