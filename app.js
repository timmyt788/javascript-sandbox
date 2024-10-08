//
// rest and spread operator written by three dot ...
// rest operator
const countries = ["cuba", "Algeria", "Mexico", "USA"];
const [one, ...others] = countries;

console.log(one);
console.log(others);

const country = {
  name: "Nigeria",
  yearOfIndependence: "1960",
  officialLanguague: "English",
  isIsland: "false",
};
const { name, isIsland, ...remaining } = country;
console.log(remaining);

// spread operator ...
const africanCountries = ["mali", "Togo", "Kenya", "Uganda"];
const asianCountries = ["China", "Japan", "Bangladesh", "Vietnam"];

const allCountries = [
  ...africanCountries,
  "Congo",
  ...asianCountries,
  "Austria",
  "France",
];

// optional chaining

const user = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "Paystack",
    three: "Meta",
  },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if (user.profilePic) {
//     // display picture
//     // <img src ={}
// }
// img src = {}
