// Object Oriented Javascript
// OOPS
// aap vaakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi teme nava nava object banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming

// how to create blueprint:
// create a Contruction function
function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.appendChild(h1);
  };
}



let pencil1 = new CreatePencil("Natraj", 12, "yellow", "Natraj"); // this create a new object with the help of blueprint

let pencil2 = new CreatePencil("Apsara", 15, "green", "Apsara");

// jo construction function koi field tena prototype ma add attech kari de to te field badha object ma available thase
// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function
CreatePencil.prototype.shape = "round"; // shared memory
// use case: jya apde koi field ne badha object ma available karaviye chhiye, ane te field no value badlaay nahi, te field ne prototype ma add kariye chhiye, jethi te field badha object ma available thase, ane te field no value badlaay nahi thase, ane te field no memory bhi shared thase, jethi memory efficient thase

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye
// why use class: class is more readable and easier to understand than construction function
class CreatePen {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  // what is constructor: constructor is a special method which is called when an object is created, it is used to initialize the object
  // why use constructor: constructor is used to intialize the object, it is called automatically when an object is created, it is used to set the initial values of the object
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }

  earse() {
    document.body.querySelectorAll("h1").forEach((text) => {
      if (text.style.color === this.color) {
        text.remove();
      }
    });
  }
}

let p1 = new CreatePen("Cello", "Cello", 25, "green");
let p2 = new CreatePen("D Fine", "Reynolds", 15, "red");

// extend
// create a new class that hold old class value and also have some new values
// copy old class and add new value
class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.username} : ${text}`;
    document.body.appendChild(h1);
  }

  checkrole() {
    return console.log(`you are ${role}`);
  }
}

class Admin extends User {
  // use all user filed into Admin use - extends
  constructor(name, address, username, email) {
    super(name, address, username, email); // je class na data extends kariya hoi te nu constuctor call karva mate
    this.role = "admin";
  }

  remove() {
    document.querySelector("h1").innerHTML = "";
  }
}

let u1 = new User("Test", "Surat", "test_user", "test@example.com");
let u2 = new User("Test1", "Surat", "test_user1", "test1@example.com");
let a1 = new User("Admin", "Ahmedabad", "admin_user", "admin@example.com");
// super

// prototypal inheritance vs classical inheritance
// classical Inheritance -- create a classes and extands their classes

// inheritance meaning --> class to class inheritance

// prototypal inheritance --> object to object
// ek object chhe tene tame all props/methods ne inherit kari chho ke nava object ma

let coffee = {
  color: "dark",
  drink: function () {
    console.log("gut gut gut");
  },
};

let americano = Object.create(coffee);
console.log(americano);

americano.taste = "bitter";

americano.drink();


// next topic --> async - sync
