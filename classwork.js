//determin whether variables should be const or let
// create a variable my country set it to whatever value
// create a variable called my age set it to your value
// create a variable called fullName and set it to any value
//log the length of your country as well as the length of fullname to the console

const myCountry = "Nigeria";
let myAge = 34;
const fullName = "EmmanuelTimileyin";
console.log(myCountry.length);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.slice(8, 17));
const description = `${fullName} is a citizen of ${myCountry}`;
console.log(description);
// const quote =  "EmmanuelTimileyin is a citizen of Nigeria"
// console.log(quote)
myAge++;
console.log(myAge);
console.log(100 % 7);
console.log(myCountry.startsWith("h"));

let userChoice = "scissors";
let computerChoice = "paper";
// paper rock scissors

if (userChoice === computerChoice) {
  console.log("This is a tie");
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("User wins, Rock smashes scissors");
  } else {
    console.log("Computer Wins, Paper covers rock");
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("User wins, paper covers rock");
  } else {
    console.log("computer wins, scissors cuts paper");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    console.log("Computer wins, rock smashes scissors");
  } else {
    console.log("User wins, scissors ccuts paper");
  }
} else {
  console.log("Invalid entry, try again");
}
