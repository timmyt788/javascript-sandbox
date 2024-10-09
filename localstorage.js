// local storage can only take in strings

const user = {
  id: 1,
  theme: "dark",
};

// JSON.stringify
// javascript objeck notation
localStorage.setItem("user", JSON.stringify(user));
//JSON.parse
localStorage.getItem("user");
JSON.parse(localStorage.getItem("user"));
