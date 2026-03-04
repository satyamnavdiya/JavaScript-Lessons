// Design Patterns:
// to make a scalable project or write a thounsand lines of code you have to learn about design pattern

// Module Pattern (IIFE)
// Module Pattern ek design pattern chhe, jema aapde code ek self executing function (IIFE) ni andar lakhiye chhiye, jethi variable and fnc private rahe

// in this fnc we can only retrun that values or fnc that we want to use outside

// main fecture or this pattern is data hidding(encapsulation) and clean structure, secure code, reusable and manageable code

// IIFE
let Bank = (function () {
  let bankbalance = 12000;

  function checkBalance() {
    console.log(bankbalance);
  }

  function setBalance(val) {
    bankbalance = val;
  }

  function withdraw(val) {
    if (val <= bankbalance) {
      bankbalance -= val;
      console.log("new bank Balnce", bankbalance);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();

Bank.checkBalance();

// in Module pattern --> we create a IIFE --> IIFE return --> we creat an object that

// Revealing Module Pattern
let Bank1 = (function () {
  let bankbalance = 12000;

  function checkBalance() {
    console.log(bankbalance);
  }

  function setBalance(val) {
    bankbalance = val;
  }

  function withdraw(val) {
    if (val <= bankbalance) {
      bankbalance -= val;
      console.log("new bank Balnce", bankbalance);
    }
  }

  return {
    check: checkBalance, // you can deside that the name
    set: setBalance,
    draw: withdraw,
  };
})();

Bank1.check();

// Factory Function Pattern
// Ek function banavo chho, je objects create kare chhe (factory = objects banava nu machine)

// factory function pattern ek aevi design chhe jema aapade ek simple function banaviye chhiye, je nava objects create kari ne retrun kare chhe

// aa pattern no main idea chhe --> object creation ne ek function na upyog thi control karvu

// every time will call a factory function, tyare ek new object malse jema aapade methods and private data rakhi sakiye chhiye

// aa pattern tyare use karva ma aave chhe jayre, ek j type na multiple objects create karvana hoy, jeva ke users, products, tasks, etc.

function CreateProduct(name, price) {
  let stock = 10;

  return {
    name,
    price,
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`Booked - ${stock} pieces left`);
      } else {
        console.error(
          `We Don't Have These Many Pieces Currently. we Only Have ${stock}`,
        );
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`refilled the stock - ${stock} pieces now`);
    },
  };
}

let iphone = CreateProduct("iphone", 70000);
let KitKat = CreateProduct("KitKat", 10);
iphone.buy(6);

// Observer Pattern (basic pub-sub)
class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }
  CountUser() {
    let total = this.subscribers.length;
    console.log(total);
  }
  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name}, You Have subscribed the channel`);
  }
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`You Have un-subscribed the channel`);
  }
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let laminds = new YoutubeChannel();
let user1 = new User("Satyam");
let user2 = new User("Riken");

laminds.subscribe(user1);
laminds.subscribe(user2);

laminds.notify("new video is Live one the Channel...");
