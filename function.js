// arrow function
const myFunction = (p1, p2) => {};

// write an arrow function to check if password is long enough
// (min password length 7)

const passwordCheck = (value) => {
  if (value.trim().length >= 7) {
    console.log("Password is long enough");
  } else {
    console.log("Short password");
  }
};
passwordCheck("password");

const passwordCheck2 = (value) =>
  value.length >= 7 ? "password is long enough" : "short password";

passwordCheck("password");
console.log(passwordCheck2("password"));

// return keyword
//
// const calcAverage = (num1, num2) => {
// return (num1 + num2) / 2;
// }

const calcAverage = (num1, num2) => (num1 + num2) / 2;

console.log(calcAverage(8, 5));

const kmToMetersAgain = (value) => `${value} km is equal to ${value * 1000} m`;

console.log(kmToMetersAgain(8.5));

// SCOPING Global local

const globalVar = "EXAMPLE";
const num5 = 90;

const example = () => {
  console.log(globalVar);

  const myValue = 90;
  console.log(myValue);
};

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};

seeBalance();
console.log(mySavings);
const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
};

const func2 = (num = 78) => {
  // const num = 12;
  console.log(num);
};

console.log(num);

// write a function that takes in a strings as parameters
// and return the strings in all capital letter

const captitalizeStr = (str) => str.toUpperCase();
console.log(captitalizeStr("Adewale"));

// write a javasript function that accepts a string as a parameter
// and converts the first letter of the word to uppercase

const captitalizeFirstLetter = (str) => str.charAt(0).toUpperCase();
console.log(captitalizeFirstLetter("gbvudvd"));

// write a javascript function that accepts an argunment and returns the datatype

const checkDataType = (arg) => typeof arg;
console.log(checkDataType(90));

// write a function that returns whether a number is even or odd

// const isEvenOrOdd  (number) { return number % 2 === 0 ? "Even : Odd}

// write a function named minutesToHours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours

const minutesToHours = (minute) => minute / 60;

// write a function called longestString that receives two strings as parameters
// and return the longest of the two strings

// function longestString(str1, str2) {
//     if (str1.length > str2.length) {
//         return str1; // Return str1 if it's longer
//     } else {
//         return str2; // Return str2 if it's longer or if they are the same length
//     }

// }
// console.log(longestString("Hello", "World!")); // Output: "World!"
// console.log(longestString("JavaScript", "JS")); // Output: "JavaScript"
// console.log(longestString("Microsoft", "softmicro"));
// console.log(longestString ("Exeptional", "Exeptionals"));
// console.log(longestString("howfar", "saidwhat"));
// console.log(longestString("fantastic", "four"));

//or
const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);
console.log(longestString("Joy", "nothing"));
console.log(longestString("fantastic", "four"));

//write a function named concat3 that receives 3 strings as a parameters
//(string1, string2, string3) and an additional string named separator.
// the function should concatenate the three strings
// using the provided seperator and return the result

// function concat3(string1, string2, string3, separator) {
//   return string1 + separator + string2 + separator + string3;
// }
// console.log(concat3("Hello", "World", "from", ", joy "));
// console.log(concat3("Java", "Script", "Rocks", " ayo "));

const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3("ade", "wale", "ayuba", "#"));

// write a function that returns the square of a number

const squareNumber = (num) => num ** 2;
console.log(40);

//write a function called checkLoanEligibility, which recieves an amount
// as a parameter and returns whether a user is eligble or not based on the criterion
// the loan amount cannot be more than twice the ammmount of savings

let savings = 60000;
// 45000, 200000, 70000
const checkLoanEligibility = (loanAmount) =>
  loanAmount > savings * 2 ? "Ineligible" : "Eligible";
console.log(checkLoanEligibility(45000));
console.log(checkLoanEligibility(200000));
console.log(checkLoanEligibility(70000));

//functions
// func declartion
// func expression
// return keyword
// arrow fucntion
// scoping

// write a function logs hello world to the console
const logger = () => console.log("hello world");
logger();

// write a function that returns 34
const loggerNum = () => 34;

// write a function that returns the number of vowels in a string
// function countVowels(str) {
//   const vowelPattern = /[aeiou]/gi;

//   const matches = str.match(vowelPattern);

//   return matches ? matches.length : 0;
// }
// console.log(countVowels("Hello, World!"));
// console.log(countVowels("JavaScript"));
// console.log(countVowels("Rhythm"));

const countNumOfVowels = (str) =>{
    let vowels = "aeiou"
    let numOfVowels = 0
    const lowerCaseStr = Str.toLowerCase()
    // loop over the lowerCaseStr
    for( let i = 0; i < lowerCaseStr.length; )
}

