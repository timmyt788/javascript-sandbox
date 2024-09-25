// CONDITIONAL STATEMENT .. allows us to perform logics conditonally
// Control

const myBalance = 3000;
const transaction = 3000;
// if statement
//if (condition){
//lines of code
//}
if (false) {
  console.log("yes");
}

if (myBalance >= transaction) {
  console.log("Transaction successful");
}
//18+
const age = 27;
if (age >= 18) {
  console.log("you are eligible to vote");
}

// if the length of the password is 7 and above has @ - good password
const password = "a67e78876@";

if (password.length >= 7 && password.includes("@")) {
  console.log("Good password");
}

// if else statement

// if (condition){
//first action
//} else{
//second action
//}

// if (age2 >= 18) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are ineligible to vote, you must be 18+");
// }

// youth/underage 0-40 or aged 41
const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
  console.log("you are in the youth/underage category");
} else {
  console.log("you are in the aged category");
}
let number = 9;
if (number % 2 === 0) {
  console.log(number + "is even");
} else {
  console.log(number + "is odd");
}

const savings = 4000;
const transactionAmount = 4500;
if (savings >= transactionAmount) {
  console.log("TransactionSuccessfull");
} else {
  console.log("insuficientFunds");
}
// multiple conditions else if statement

// positive > 0 negative < 0 and zero
let myNum = 98;

if (myNum > 0) {
  console.log("This is a positive number");
} else if (myNum < 0) {
  console.log("This is a negative number");
} else {
  console.log("This iS Zero");
}

// underage 0 - 12 teens 13- 19 adults 20 aged 41
let age4 = 24;
if (age4 >= 0 && age4 <= 12) {
  console.log("underage");
} else if (age4 >= 13 && age4 <= 19) {
  console.log("teens");
} else if (age4 >= 20 && age4 <= 40) {
  console.log("Adult");
} else if (age >= 41) {
  console.log("Aged");
} else {
  console.log("invalid age, try again");
}

// if(age4 >- 41){
//     console.log("aged")
// } else if (age4 <= 20){
//     console.log("adults");
// } else if (age4 <= 19){
//     console.log("teens")
// } else if (age4 <= 12)
//    {
//     console.log("underage")
//    }

// Switch Statement
// a - excellent , b- very good

let grade = "C";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("VeryGood");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("fair");
    break;
  case "E":
  case "e":
    console.log("poor");
    break;
  case "F":
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("Invalid Grade");
}
