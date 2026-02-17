// // let result = function(){}
// // function abcd(val){val();} --> abcd(function(){console.log("hello")})
// // function abcd(){ return function(){} } --> abcd()()

// // function can be returned from other function
// function abc(){
//   return function (){
//     console.log("function within function")
//   }
// }
// abc()();

// function abc2(){
//   return () => {
//     console.log("arrow function within function")
//   }
// }
// abc2();

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare )
let a = 20;
function change_a() {
  return "a not change(pure function) " + a;
} // -- pure function

console.log(change_a());
// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare )
function change_a1() {
  a++;
  return "a change (impure function)" + a;
}
console.log(change_a1());

// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
  let outer_var = "Outer Function Variable";
  function inner() {
    console.log(outer_var);
  }
  inner();
}
outer();

//lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
  let outer_var = "Outer Function Variable";
  function inner1() {
    console.log(outer_var);
    let inner_var = "Inner Function Variable";
    function most_inner() {
      console.log(outer_var);
      console.log(inner_var);
    }
    most_inner();
  }
  inner1();
}
outer1();

// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye
(function () {
  console.log("IIFE executed");
})();


// Hoisting in function
// use case --> show project structure
temp_fnc();

function temp_fnc(){
  console.log("hoisting in function")
}