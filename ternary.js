//
let myAtmPin = 5678;
let enteredPin = 5679;
const myBalance = 5000;
if (myAtmPin === enteredPin) {
  console.log("Perform Transaction");
} else {
  console.log("Incorrect Pin");
}
// ternary operator
// condition ? first action : second action

myAtmPin === enteredPin
  ? console.log("Perform Transaction")
  : console.log("Incorrect Pin");

myBalance >= transactionAmount
  ? console.log("Transaction Successful")
  : console.log("Insufficient funds");
