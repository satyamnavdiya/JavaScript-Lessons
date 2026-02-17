// Reading Values from input, textarea, select
let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  if (nm.value.length <= 2) {
    document.querySelector("small").style.display = "block";
  } else {
    document.querySelector("small").style.display = "none";
  }
});

// prevent deafult submission

// inline and js based validation
// inline validation --> html validation --> required, minlength, maxlength

// showing error messages conditionally

// pattern attribute vs custom regex
// pattern --> [a-z]{3,8}
// regex

form.addEventListener("submit", function (dets) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // check email regex
  // user@gmail.com
  let ans = regex.test("user@test.com");
  console.log(ans);
});
// create regex using chatgpt or seacrch on google

// email and password validator
let email = document.querySelector("#email");
let password = document.querySelector("#password");
// let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    document.querySelector('#emailError').textContent = "";
    document.querySelector('#passwordError').textContent = "";


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let isValid = true;


  if(!emailans){
    document.querySelector('#emailError').style.display = "block";
    document.querySelector('#emailError').textContent = "Email is Incorrect";
    isValid = false;
  }

  if(!passwordans){
    document.querySelector('#passwordError').style.display = "block";
    document.querySelector('#passwordError').textContent = "Passsord is Incorrect";
    isValid = false;
  }

  if(isValid){
    document.querySelector("#resultMessage").textContent = "Email and Password are correct";
  }
});


// InterActive Feedback form with error highlights



// Value Vs TextContent
// Value --> get value from input field
// textContent --> html tag set value and get value


// next Value --> Timmer and Set Intervals

