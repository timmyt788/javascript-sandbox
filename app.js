// write a function that takes in a strings and convert every first letter to uppercase
// Hello World ===> Hello World
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
};
console.log(firstLetterToCaps("test is fun and stressfull"));

// write a function that checks if the parameter is a number or not
// return true of false

const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("hllo"));

const currenctData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// iterate over the currencydata and log a message
// The Exchange rate for USD to NGN is 1700
currenctData.map((currenctRate) => {
  console.log(
    `The Exchange Rate for ${currenctRate.from} to ${currenctRate.to} is ${currenctRate.rate}`
  );
});

//
const findCurrencyPair = (baseCurrency, toCurrency) => {
  // search through the currencyData to find a match
  const pair = currenctData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

findCurrencyPair("YEN", "NGN");

const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currenctData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${
        pair.to
      }`
    );
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);

// write a funct to add to the currency data list
// AUS NGN 300

const addNewCurrency = (from, to, rate) => {
  // push
  currenctData.push({ from, to, rate });
  console.log(currenctData);
};
addNewCurrency("AUA", "NGN", 1040);
addNewCurrency("AUA", "NGN", 1040);
