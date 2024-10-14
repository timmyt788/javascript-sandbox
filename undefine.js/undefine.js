const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

// 1. Function to print the title of each product in the cart
function printProductTitles(cart) {
  cart.forEach((product) => console.log(product.title));
}

// 2. Function to calculate the total number of items (quantity) in the cart
function totalQuantity(cart) {
  return cart.reduce((total, product) => total + product.quantity, 0);
}

// 3. Function to find and print the most expensive product in the cart
function mostExpensiveProduct(cart) {
  const expensiveProduct = cart.reduce((max, product) =>
    product.price > max.price ? product : max
  );
  console.log(expensiveProduct);
}

// 4. Function to calculate the total value of the cart
function totalCartValue(cart) {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

// 5. Function to filter and display products that cost more than 100
function filterExpensiveProducts(cart) {
  return cart.filter((product) => product.price > 100);
}

// 6. Function to check if a certain product is in the cart based on its title
function isProductInCart(cart, productTitle) {
  return cart.some((product) => product.title === productTitle);
}

// 7. Function to display each product along with its total value (price * quantity)
function displayProductValues(cart) {
  cart.forEach((product) => {
    const totalValue = product.price * product.quantity;
    console.log(`${product.title}: $${totalValue}`);
  });
}

// 8. Function to concatenate all the product titles into a single string
function concatenateProductTitles(cart) {
  return cart.map((product) => product.title).join(", ");
}

// 9. Function to check if the cart contains any products that are more expensive than 70
function containsExpensiveProducts(cart) {
  return cart.some((product) => product.price > 70);
}

// 10. Function to clear the entire cart
function clearCart() {
  return [];
}

// Example usages:
printProductTitles(cart);
console.log("Total Quantity:", totalQuantity(cart));
mostExpensiveProduct(cart);
console.log("Total Cart Value: $", totalCartValue(cart));
console.log("Products costing more than $100:", filterExpensiveProducts(cart));
console.log("Is Laptop in cart?", isProductInCart(cart, "Laptop"));
displayProductValues(cart);
console.log("Concatenated Titles:", concatenateProductTitles(cart));
console.log(
  "Contains products more expensive than $70?",
  containsExpensiveProducts(cart)
);
const emptyCart = clearCart();
console.log("Cleared Cart:", emptyCart);
