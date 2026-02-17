// Array -- Hold multiple values at same time
// [20, 30, 40, 5, -8, 10]
// ["Hello", "World", "Hi", "Why"]
// [10, "Hello", -5, true, null, undefined]

// create
// define a variable = [multiple values]
let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position]
// arr[3], arr[2],  arr[10]

// modify
// array_name[position] = new value
// arr[3] = 10
// arr[4]= 20
// arr[50] = 50

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
a.push(700);
// use case -- enter new producats into existing producats list

// pop --> remove last value into array
let b = [10, 20, 30, 40];
b.pop();
// use case -- remove last producat you add into your list

//shift -- remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
// use case -- remove old producat automatic after sometimes

// unshift -- add value into array -- first
let d = [52, 35, 65, 85];
d.unshift(20);
// use case -- add a value into top of that data you receive

// splice - remove value into array -- specific position and specific number of values
// into () - first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case -- select msg and remove multiple msg at on click

// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
// use case -- copy specific data and save it into new variable
// generate a report based on date and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
g.reverse();
// use case -- show latest update first into your fronted

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return b - a; // decending order
// })

// use case -- sort product price low to high





// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let i = [10, 20, 30, 40, 50];

i.forEach(function (val) {
  // darek value function ma aavse
  let sum = val + 5;
  console.log(sum); // aaveli darek value console ma print thase
});

// important into Array
// now all method are used in real world projects
// all mothod are working with function
// manipulate date using array methods and function

// map
// map tyare j use karvu ke jare ek new array create karvo chhe
// first map create a black array -- only for understanding
let temp_data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
// let new_temp_data = temp_data.map(function (val) {
//   return 12; // je value return thase te new array ma add thase
// });

let new_temp_data = temp_data.map(function (val) {
  if (val > 20) return val;
});
// je value 20 thi vadhare chhe te new array ma add thase and biji value mate array ma undefined add thase
// use case -- data ma thi specific data new array ma store karvo hoy
// ex. product ma thi specific category na product new array ma store karva hoy
// if you want to show only electronics producat on your homepage


// map vs forEach
// forEach -- no return -- only looping
// map -- create new array and save the return value into new array



// filter
// filter tyare juse karvu ke jare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter(function (price) {
  if (price > 30000) {
    return true;
  }
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare
// use case -- data ma thi specific data new arrat ma store karvo hoy based on condition
// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
function getProducts(type) {
  if (type === "Tablet") {
    return ["Tab 9i", "Tab Pro", "Tab Air"];
  }
  if (type === "Mobile") {
    return ["Mobile Pro", "Mobile Air", "Mobile Mini"];
  }
  return [];
}

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [15000, 500, 100, 500];

let final_price = total_price.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0); // intial value of accumulator

// accumulator --> je value function ma retun thase te accumulator ma store thase --> accumulator name change kari sako cho
// val --> array ni darek value

// use case -- data ma thi ek single value calulate karvi hoy
// ex. producat ma thi total price calculate karvi hoy

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find(function (item) {
  if (item === "Tablet") {
    return true;
  } else if (item === "Mobile") {
    return true;
  } else {
    return false;
    // console.log("can't find product"); not working why??
  }
});

// let find_product = product.find(item =>
//   item === "Tablet" || item === "Mobile"
// );

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. producat ma thi specifice producat find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

// filter --> you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log(AllSara);

// example 2: Book bus for travel

// some
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks = [10, 20, 35, 90];
let any = marks.some(function (val) {
  if (val > 85) return true;
  // if (val < 85) return "need improvement";
});
// use case -- check if some producat are out of stock in your cart


//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare 
// false -- ek pan fail thay to
let def =[20, 30, 40, 50];
let num = def.every(function(val){
    return val < 60;
})
// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr1 = [1, 2, 3, 4, 5]
let [j, k] = arr; // --> destructuring
// let [j, , k] = arr;


// spread oprator -- copy value from main array
let arr3 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not copy value(when you change into arr4 that will be change arr3 too)
let arr4 = [...arr3]; 
// ... --> rest --> into function
// ... --> spred --> into Array



// issue with .sort()
// [100, 150, 300].sort() --> convert into string
// "100", "150", "300"
// arr.sort((a, b)=> a-b);

// questions:
// 1. use .map() to square each number
// let arr = [1, 2, 3, 4]


// 2. use .filter() to keep numbers greater than 10:
// let arr = [5, 12, 20, 8, 35, 45];

// 3. use .reduce() to find the sum of this array:
// let arr = [10, 20, 30];

// 4. use .find() to get the first number less than 10:
// let arr = [12, 15, 3, 8, 20];

// 5. Use .some() to check if any student has scored below 35:
// let arr = [45, 60, 28, 90];

// 6. use .every() to check if all numbers are even:
// let arr = [2, 4, 6, 8, 10];

// 7. destructure this array to get firstName and lastName
// let fullName = ["abc", "xyz"];

// 8. Merge two arrays using spred operator:
// let a = [1, 2]
// let b = [10, 20]

// 9. Add "India" to the start of this array using spred:
// let countries = ["USA", "UK"];

// 10. clone this array properly (not by reference):
// let arr =[15, 20, 35];
