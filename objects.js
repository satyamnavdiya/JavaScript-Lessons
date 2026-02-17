// Objects vs Array
// Objects -- when you want to show all data based on one entity(ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex. all users)

// create
// varabile = {}
// key : value --> key-value sturcture
let user = {
  last_name: "abc",
  "first-name": "xyz", 
  age: 35,
  role: "user"
};

// access (dot vs square notation)
// variable_name.key;
user.name;
user.last_name;
// user.first-name;
// variable_name['key'];
// user['name']
// user[first_name]
// let demo = "name"
// user[demo] --> convert into name (demo = 'name') --> output: abc

// Nesting and Deep Access
const user1 = {
  name: "test",
  address: {
    city: "Surat",
    pin: 395009,
    locations: {
      lat: 24.2,
      lng: 77.4,
    },
  },
  email: "test@gmail.com",
};
user1.address.locations.lng;
// user1.address.location.lng;

// Object destructuring:
let { lat, lng } = user1.address.locations;
let {lat : locations} = user1.address.locations.let;
// destructure and rename variable name



// ------------------------------------------------------------

let demo = {
  first_name: "Demo", 
  last_name: "User", 
  age: 45,
  email: "demo@user.com"
}

// Looping
// for (variable name in object_name){}
for (const key in demo) {
  console.log(key);
  // obj.key --> not working
  console.log(demo[key]);
}

// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// Use case: User profile form validation
// ex. website par thi user form ma data add kare chhe ane te data backend pase object formate ma aave chhe
// const userProfile = {
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 25
// };
// now check how many field user fill up
// const keys = Object.keys(userProfile);
// console.log(keys); 
// console.log(keys.length); 


// Object.entries -- add key and value into array formate
// give array of arrays
let key_value_arr = Object.entries(demo);
// Use case: Display user details dynamically (UI)
// ex. backend give you data into object formate
// const user = {
//   name: "Priya",
//   city: "Ahmedabad",
//   role: "Admin"
// };
// print key and value both in profile page
// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key} : ${value}`);
// });
// Object.entries(user) ==> convet into Arrays
// forEach ==> Array loop



// Copying Objects: Spred, Object.assign, deep clone
// Spred
let user_data = {...demo};
// Use case: State update
// const user = {
//   name: "Amit",
//   age: 30
// };

// const updatedUser = {
//   ...user,
//   age: 31
// };

// console.log(updatedUser);



// Object.assing -- copy and add keys-value 
let user_data_assign = Object.assign({}, demo); // - nothing will be add just copy 
let user_data_assign1 = Object.assign({phone_number: 7894567894}, demo); // - nothing will be add just copy 
// Use case: Default settings + user settings merge
// const defaultSettings = {
//   theme: "light",
//   language: "en"
// };

// const userSettings = {
//   theme: "dark"
// };

// const finalSettings = Object.assign({}, defaultSettings, userSettings);

// console.log(finalSettings);


// -----------------------------------------------------------------


// Object.assing vs spred
// Object.assing() -- Method -- ES5 Old version, Less used
// Spred -- Oprator -- state updated, most used in react application, clean code, 


// deep clone 
let temp_user1_clone = {...user1}
// user1_clone.address.city = "Valsad" --> that will change value of user1 too 
// issue :  when you clone & copy nested object using spred or object.assing into new variable that copy all value but nested object pass only refrence not copy 
// (Jyare tame nested object(parent obj.) spred na upyog thi copy karo tyare nested obj.(child obj.) reference pass karshe -- value copy thase nahi)
// How to clone that -- use deep clone
// first convert your object to string 
// JSON - JavaScript Object Notation
// JSON.stringify(obj._name) -- convert object into string
// JSON.parse(stingify_Object) -- convet string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case: 
// Real time use:
// API response handling
// Avoid data mutation bugs

// -----------------------------------------------------------------

// Optional Chaining, Computed Properties
// user1.address.location.lng;
user1?.address?.location?.lng; //-- ? Optional Chaining
// use case:
// Without optional chaining → app crash
// Backend data incomplete 
// API response safety
// const apiResponse = {
//   user: {
//     profile: {
//       name: "Neha"
//     }
//   }
// };
// console.log(apiResponse.user?.profile?.name); 
// console.log(apiResponse.user?.address?.city); 

// ------------------------------------------------------------



// Computed Properties
let role = "admin";
let user2 = {
  name: "test", 
  age: 26, 
  email: "test@gmail.com",
  address:{
    city: "Surat"
  }, 
  [role]: "test"
}
// Use case: Dynamic object keys
// const fieldName = "email";
// const user = {
//   name: "Ravi",
//   [fieldName]: "ravi@gmail.com"
// };
// console.log(user);





