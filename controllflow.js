// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else else-if)
// if (condition) {})
//ex. if(65){console.log("true")}

// if-else Statement
// if (condition) {} else {}
//ex. if(65){console.log("true")} else{console.log("false")

// if-else if-else Statement
/*
if (condition) {    
} else if (condition) {
} else{}
*/
/*
 ex. if(loggedin && admin){
     console.log("welcome admin")
 } else if(loggedin){
     console.log("welcome user")
 } else{
     console.log("go to login page")
 }
     */

// Switch case Statement
/*
switch (value) {
    case value:
        break;
    default:
        break;
}*/
/*
ex. switch (grade) {
    case "A":
        console.log("Excellent");
        break; -- why use break?
    case "B":
        console.log("Good");
        break;
    default:
        console.log("Invalid grade");
    }
    */

// Early Return Pattern
function getValue(value) {
    if(value < 100) return "Value is less than 100"; // Early return
    else if(value < 75) return "Value is less than 75";
    else if(value < 50) return "Value is less than 50";
    return "Value is 100 or more";
}
getValue(80);
// console.log(getValue(80));

function score(value) {
    if (value > 90) {
        return "Value is more than 90"
    } else if(value < 80){
        return "Value is less than 80"
    } else if(value < 70){
        return "Value is less than 70"
    } else if(value < 60){
        return "Value is less than 60"
    } else {
        return "Value is less than 60"
    }
}


function getValue1(value) {
    if(value < 25) return "Value is less than 25";
    else if(value < 50) return "Value is less than 50";
    else if(value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}
getValue1(80);

// Grade Function
function getGrade(marks) {
    if(marks >= 90 && marks <= 100) return "A"; // use early return
    else if(marks >= 80 && marks < 90) return "B";
    else if(marks >= 70 && marks < 80) return "C";
    else if(marks >= 60 && marks < 70) return "D";
    else if(marks >= 33 && marks < 60) return "E";
    else if(marks >= 0 && marks < 33) return "Fail";
    else return "Invalid Marks";
}

// Rock, Paper, Scissors Game
function rps(user, computer){
    if(user === computer) return "It's a tie!";
    else if(
        (user === "rock" && computer === "scissor") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissor" && computer === "paper")
    ) return "User wins!";
    else return "Computer wins!";
}

function rps1(user, computer){
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins"
    if(user === "rock" && computer === "paper") return "computer wins"
    if(user === "paper" && computer === "scissor") return "computer wins"
    return "it's a tie"
}


function rps2(user, computer){
    if(user === computer) return "It's a tie!";

    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}