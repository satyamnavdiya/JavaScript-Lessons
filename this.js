// this keyword special keyword in javascript
// beacause of this keyword we can access the properties and methods of an object
// this keyborad is used to refer to the current object
// this keyword is userful when we have to access the properties and methods of an object inside a method of that object

// this keyborad context is determined by how a function is called(that is the reason why this keyword is called dynamic scope)(this ni value this nu use kaya context ma chhe te par depend kare chhe)

// gobal context/scope:
console.log(this); // this give windows object

// function context/scope:
function abc() {
  console.log(this);
}
abc(); // this give windows object

// method context/scope:
let obj = {
  name: "john",
  sayName: function () {
    console.log(this); // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give obeject

    // if you arrow function then this key give you windows object because arrow function does not have its own this keyword it takes this value from its parent scope
    // if you create one more function inside method then this loose their value --> soluation --> you have to create a arrow function
  },
};
obj.sayName();

// event handler context/scope:
document.querySelector("h1").addEventListener("click", () => {
  alert("clicked");
  console.log(this); // this give html element that you select for event
});

// class context/scope:
class Person {
  constructor() {
    console.log("Heyhey");
    this.a = 12;
  }
}

let p1 = new Person(); // this value - blank obj.

// context --> this keyword value
// global context --> window
// function context --> window
// method context with es5 fnc --> object
// method context with es6 fnc --> window
// arrow function inside es5 fnc --> object
// es5 fnc inside es5 fnc--> window
// event handler context --> html element
// class --> blank object

// arrow function and lexical this
// arrow function does not have its own this keyword it takes this value from its parent scope
let obj1 = {
  name: "john",
  sayName: function () {
    console.log(this); // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give obeject
    let abc = () => {
      console.log(this); // arrow function does not have its own this keyword it takes this value from its parent scope
    };
    abc();
  },
};
obj1.sayName();

// Manual Binding
// call, applt, bind
// function ne call karti vakhate this keyword ni value set karva mate call, apply, bind method no upyog kariye chhiye
let obj2 = {
  name: "john",
  age: 26,
};

function abcd(a, b, x) {
  console.log(this, a, b, c);
}

// function.call(object_name) --> this keyword ni value set karva mate call method no upyog kariye chhiye
abcd.call(obj2);

// function.apply(object_name) --> this keyword ni value set karva mate apply method no upyog kariye chhiye
abcd.apply(obj2, [1, 2, 3]);

// function.bind(object_name) --> this keyword ni value set karva mate bind method no upyog kariye chhiye
let fnc = abcd.bind(obj2); // that create a new value of function with this keyword value set to obj2
fnc(1, 2, 3);

// use case of this keyword -- create a folder -- this keyword
const userManager = {
  users: [],
  init: function(){},
  addUser: function () {},
  removeUser: function () {},
};




