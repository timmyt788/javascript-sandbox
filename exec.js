const markMass = 95;
const marksHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const marksBmi = markMass / marksHeight ** 2;
const johnsBmi = johnMass / johnHeight ** 2;
const markHigherBMI = marksBmi > johnsBmi;
console.log(marksBmi, johnsBmi);

console.log(markHigherBMI);
//print a nice
//
//

if (markHigherBMI) {
  console.log("Marks BMI is Higher than Johns");
} else {
  console.log("Johns BMI is Higher than marks");
}

// comment out the first conditional statement
// improve it to clear for if the marks bmi and johns bmi are equal
if (marksBmi > johnsBmi) {
  console.log("Marks BMI is higher than johns");
} else if (johnsBmi > marksBmi) {
  console.log("Johns BMI is Higher than marks");
} else {
  console.log("Johns Bmi And Marks BMI is equal");
}
// errors , syntax error(means we writing wrong java script syntax)
//reference error (calling on reference that doesnt exist)
//
// boolean vaule (true of false)


// NaN / not a Number
console.log("hello" * 6)