// function
// what -->  function is a block of code that performs a specific task.
// why -->  to avoid code repetition and to make code modular and reusable.
// how -->  function keyword, name, parameters, body, return statement

// function name(params) {} --> function declaration
// let fnc = function (){} --> function expression
// let fnc = () => {} --> arrow function --> fat arrow function

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andarlakheli(pass) kareli values)

function producat() {
  console.log(`Adding producat`);
}
producat();
producat();
producat();

function producatName(producat) {
  // producat is params
  console.log(`Adding ${producat}`);
}
producatName(`Laptop`); // laptop is argument
producatName(`Mobile`);
producatName(`Smart Watch`);
producatName(`Tablet`);

function producatName_Price(producat, price) {
  console.log(`Adding ${producat} at ₹ ${price}`);
}
producatName_Price(`Laptop`, 1000);
producatName_Price(`Mobile`, 500);
producatName_Price(`Smart Watch`, 200);
producatName_Price(`Tablet`, 800);

// Default, rest and spread parameters in function
// default
function add(v1, v2) {
  console.log(v1, v2);
}
add();

function add1(v1 = 0, v2 = 0) {
  // default v1 = 0, v2 = 0
  console.log(v1, v2);
}
add1();

// rest --> Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo funtion na parameter ni anadar lakhvama aave chhe)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
  console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
  console.log(numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v1, v2, ...numbers) {
  console.log(v1, v2, numbers);
}

abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// retrun or early return
// retrun --> function mathi value bahar mokalva mate
function abcde() {
  return 12;
}

let value = abcde();
console.log(value); // value aa line par print thase

// early return --> function mathi jaldi bahar nikalva mate
function getValue1(value) {
  if (value < 25) return "Value is less than 25";
  else if (value < 50) return "Value is less than 50";
  else if (value < 75) return "Value is less than 75";
  return "Value is 100 or more";
}
let result = getValue1(80);
console.log(result);

// first Class Function
// function can be treated as variables
// function can be passed as arguments to other functions
// function can be returned from other functions

// let result = function(){}
// function abcd(val){val();} --> abcd(function(){console.log("hello")})
// function abcd(){ return function(){} } --> abcd()()

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)
// function abcd(val){val();} --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare )
let a = 10;
function abcd_pure() {
  console.log("Hello");
}

// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare )
function abcd_impure() {
  a++;
  console.log(a);
}

// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
  let count = 0;
  function inner() {
    count++; // accessing outer(parent) function variable
    console.log(count);
  }
  return inner;
}
let fnc = outer();
fnc();

//lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
  let outerVar = "I am from outer function"; // outer1 function na block scope ma variable use kari shakai
  function inner1() {
    let innerVar = "I am from inner function"; // only access in inner1 block scope
    console.log(outerVar); // accessing outer(parent) function variable
    function innerMost() {
      console.log(outerVar); // accessing outer(parent) function variable
      console.log(innerVar); // accessing inner function variable
    }
    innerMost();
  }
  inner1();
  // console.log(innerVar); // error: innerVar is not defined
}
outer1();

// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye
(function () {
  console.log("IIFE executed");
})();

// Hoisting in function
// use case --> show project structure
hoistedFunction(); // function declaration ne call kari shakai
function hoistedFunction() {
  console.log("Hoisted Function called");
}

// hoistedFunction1(); // error: hoistedFunction1 is not a function
// let hoistedFunction1 = function () {
//   console.log("Hoisted Function Expression called");
// }

// hoistedFunction2(); // error: hoistedFunction2 is not a function
// let hoistedFunction2 = () => {
//   console.log("Hoisted Arrow Function called");
// }

// regular function vs fat arrow function(arrow function)
// regular function --> ES5
// Arrow function --> ES6
// when you use object you can't use arrow function
// const obj = {
//   value: 42,
//   regular: function () {
//     return this.value;
//   },
//   arrow: () => this.value,
// };

// functions => function hoisting and TDZ
// abc(); // Done
// function abc() {}
// def(); // Error
// const def = () => {};


// discount calculator
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(200));

// counter using closure
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());

// create a pure function to transfer a value
function double(val) {
  return val * 2;
}
console.log(double(10));

// Use IIFE to isolate variable (private variable)
(function () {
  const password = "secret password";
  console.log(password);
})();

console.log(password);
