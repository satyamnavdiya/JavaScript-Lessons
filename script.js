// ES5 Vs ES6 (ECMAScript) Mocha --> JavaScript

// words vs keywords
// keyword: js ma keva word jeni madad thi kai kari shakay tene keywords kevai

// variable -- temp data store (ex. Flipkart or Amazon that save your data for Buying purpose)
// var, let and const -- line by line comparison
// var - ES5 (old way for create a variable)
// var a = 12;
// a = 12; // never use
// let a = 12;
// var a;
// const a = 12;


// declarations and initialization
var a; // declare
var a = 12; // declare and initialize for first time
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
var a = 13;

// scope (globel, Block, functional)
var b = 23; // globel scope
{
  var c = 25; // block scope
}
function abc() {
  var d = 30; // functional scope
}

// Reassignment, redeclaration
var temp = 12;
temp = "number"; // Reassignment
var temp = "24"; // redeclaration

let temp_a = 24;
temp_a = "number";

// Temporal Dead Zone (TDZ) -- js ne khabar chhe ke variable chhe pan te value aapi shaktu nathi
console.log(a);
let a = 12;
// TDZ not working on var
console.log(temp_b);
var temp_b = 24; // on var there is no TDZ

//Hoisting Imapact
// Hoisting --> when your create a vaiable into js that braek into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d = undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 52)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impace on var, let, cont
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/

// Data Types:
// Two Type of Data Types:
// 1. Primitive Data Types
//  copy --> real value
let a = 12;
let b = a;
a = a + 2;
// types: string, number, boolean, null, undefined, symbol, bigint


// 2. Reference Data Types
// copy --> give refrence of parent
let a = [1, 2, 3];
let b = a;
b.pop(); // remove value
// types: arrays [], objects {}, functoins ()



// types: string, number, boolean, null, undefined, symbol, bigint
// string:
// ''- single quotes
// ""- dobule quoutes
// `` - backticks
// ex. let a = 'name', let a = "name", let a = `name`

// number: 
// ex. let a = 12; let a= 12.25;

// boolean: 
// ex. let a = true; let a = false;

// null:
// you give a value
// ex. let a = null;

// undefined:
// you don't give a value, by defualt value
// ex. let a;

// symbol:
// unique immutable value
// when you use libraries then your give same value but sometime that give same thing you create
// ex. let u1= Symbol("uid"), let u2= Symbol("uid"), check u1===u2
// ex. let obj ={uid: 1, name: "test", email: "test@test.com"}, let u1 = Symbol("uid"), obj[u1]= "001"

//bigint:
// cheak range of number , Number.Max_SAFE_INTEGER
// ex. let a = 900719925470991n; a +3n

// types: array, objects, fucntions


// Dynamic Typing 
// static typing nathi pan dynamic typing chhe, mate js ma darek variable chhe mate tena type change kari sakho chho
// ex. let a = 12; a = true; a = null;
// remove that error using ts

// typeof quirks
// typeof 12
// check type of variable use -->ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number 
// NaN is a failed number oprations that why that type is number


// type coeration
// js ma type automatic convert thai jase 
// "5" + 1 , "5" -1
// in programing language + oprator add and concatenation (jodavu)


// Truthy vs Falsy Values
// js ma darek value ne true and false ma convert kareli chhe
// 0 false "" null undefined NaN documnet.all -- false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true





// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1+2, "satyam" + "navdiya"
// - 
// ex. 2 - 1
// /, *
// ex. 240/2, 25*2
// % (modulas) (sheshfal)
// ex. 12/4
// ** (square)(exposination)
// ex. 2**3 --> 8

// Comparison
// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" (check type and value)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !==
// ex. 12!== "12" (reverse of !===)
// >=
// ex. 22 >= 22
// <=
// ex. 13 <= 13 
// <
// ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13

// assignment 
// =
//  give a value, value assignment operator
// ex. let a = 12;

// +=
// ex. a += 3; (add value into old value and save it into a)

// -=
//ex. a -= 4; (subtract value into old value and save it into a)

// *=
// ex. a *= 2;

// /=
// ex. a /= 2;

// %=
// ex. a %= 2; (give remainder)


// logical
// && (AND)
// ex. true && true --> true
// false && true --> false
// ture && false --> false
// false && false --> true

// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

// Unary Oprator
// + - ! typeof ++ --
// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
//-
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. a++ + a => 26
// --
// ex. let a = 3;
// a-- 
// a++

// Ternary
// ? 
// condition ? true thase to print thase : false thase to print thase
// 12>13 ? console.log("true"): console.log("false");
// :

// typeof null --> object
// typeof [] --> object, let a =[]; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type 
// typeof NaN --> number 
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo

