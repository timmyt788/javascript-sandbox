
// arrays = complex and types
// element1, element2
const mixedAr = [9, "str", true, 65, 9.8, null, [90, false]];

const students = ["Goodness", "Aisha", "Adura"];
console.log(students);

// Array properties (length)
console.log(students.length);
// getting element in an array - position arrName[position]
console.log(students[1]);
// change el in an array
students[0] = "john doe";

// Array methods
// adding and removing els frm an array push shift and unshift
// LIFO
students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// conver arrays to a string(toString, john)
console.log(students.toString());
conso…
// arrays = complex and types
// element1, element2
const mixedAr = [9, "str", true, 65, 9.8, null, [90, false]];

const students = ["Goodness", "Aisha", "Adura"];
console.log(students);

// Array properties (length)
console.log(students.length);
// getting element in an array - position arrName[position]
console.log(students[1]);
// change el in an array
students[0] = "john doe";

// Array methods
// adding and removing els frm an array push shift and unshift
// LIFO
students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// conver arrays to a string(toString, john)
console.log(students.toString());
conso // object
const person1 = ["ade", "wale", 67, "google", true];
// {key :  value, key2: value2}
// key and value pairs are called object properties
const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: 64,
  isMarrried: true,
  friends: ["john", "bola"],
  workHours: {
    monday: "8 hours",
  },
};
console.log(person);

// acess properties inside of object
// two ways to acees properties in an object --dot notation and bracket notation
//
// dot notation
console.log(person.age);
console.log(person.friends);
console.log(person.car);
console.log(person.workHours.monday);

// bracket notation objNAme['propertyName']
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

// adding a new property to an object
person.car = "Benz";
console.log(person);
person.hobbies = ["running", "sleeping"];
console.log(person);

// removing a property from an ovject delete
delete person.isMarrried;
console.log(person);

// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "**",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
  dateOfAccount: 2020,
  posts: {
    title: "JS is Fun",
    desc: "I love JS a lot",
  },
};

user.profilePic;
user.posts.title;
user.fullName;

const { username, profilePic, dateOfAccount, password, followers } = user;
const {
  posts: { title, desc },
} = user;
console.log(title, desc);

const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;

// array desturcturing

const peoplesNames = ["susan", "joy", "mercy", "ade"];
const [, , three] = peoplesNames;
console.log(three);
