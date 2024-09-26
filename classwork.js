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

// Functions
// fucntions are used to run snippets of code

// let DolphinsScore= {96, 108, 89};
// let PandasScore = {88, 91, 110};

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const pandaScore1 = 109;
const pandaScore2 = 95;
const pandaScore3 = 123;

const totalDolphinScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const totalPandaScore = pandaScore1 + pandaScore2 + pandaScore3;

const averageDolphinScore = totalDolphinScore / 3;
const averagePandaScore = totalPandaScore / 3;

console.log("Average Dolphin Score is $ {averageDolpinScore}");
console.log("Average Panda Score is $  {averagePandaScore}");

if (averageDolphinScore > averagePandaScore) {
  console.log("Dolphins wins");
} else if (averageDolphinScore < averagePandaScore) {
  console.log("Panda wins");
} else {
  console.log("this is a tie");
}

// if (averageDolphinScore >= 100 && averageDolphinScore > averagePandaScore) {
//   console.log("Dolphins wins");
// } else if

if (averageDolphinScore > averagePandaScore && averageDolphinScore >= 100) {
  console.log("Dolphins wins");
} else if (
  averageDolphinScore < averagePandaScore &&
  averagePandaScore >= 100
) {
  console.log("Panda wins");
}
{
  console.log("No teams wins");
}
///

if (averageDolphinScore > averagePandaScore && averageDolphinScore >= 100) {
  console.log("Dolphins wins");
} else if (
  averageDolphinScore < averagePandaScore &&
  averagePandaScore >= 100
) {
  console.log("Panda wins");
} else if (
  averageDolphinScore === averagePandaScore &&
  averageDolphinScore >= 100 &&
  averagePandaScore >= 100
) {
  console.log("this is a draw");
}
{
  console.log("No teams wins");
}
