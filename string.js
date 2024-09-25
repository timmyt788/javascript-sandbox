// STRINGS- text, character in quotation mark
const firstName= "John"
const lastName= "Doe"
console.log(firstName)
console.log(lastName)

// string properties Length, concatenation(joining)
// string.length
console.log(firstName.length)
console.log(lastName.length)
const fullName = firstName + " " + lastName
console.log(fullName.length)

// STRINGS METHODS - functions thta can be performed on string
// toUpperCase. toLowerCase
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

// replace, replaceAll
console.log(fullName.replace("o", "*"))
console.log(fullName.replaceAll("o", "*"))
// includes
console.log(fullName.includes("h"))
console.log(fullName.includes("Y"))
// startsWith, endsWith
console.log(fullName.startsWith("JO"))
console.log(fullName.endsWith("e"))
const myEmail = "timmytimmy78@outlook.com"
console.log(myEmail.length)
console.log(myEmail.toUpperCase())
console.log(myEmail.includes("e"))
console.log(myEmail.endsWith("google.com"))

// indexOf, lastIndexOf
console.log(myEmail.indexOf("o"))
console.log(myEmail.lastIndexOf("o"))

// 
console.log(myEmail.charAt(5))
// concat
console.log(myEmail.concat("example"))
// trimming

const userName = "    user001    "
console.log(userName.length)
console.log(userName.trim())
// trimStart trimEnd
console.log(userName.trimStart())
console.log(userName.trimEnd())

// extract portions of a string
// slice, substring, /substr (start, num of character we want)/
// slice(start, end (non-inclusive))
// substr(1, 6)
const surname = "Sandler"
console.log(surname.slice(1,4))
console.log(surname.substring(1, 6))
console.log(surname.substr(0, 5))


` `
const name1 = "Ade"
const name2 = "Wale"
// Ade is a boy
const sentence = `${name1} is a boy`
// His name is wale
const sentence2 = `His name is ${name2}`

//`Tinubu said and i quote `let the poor breathe``
const quote = `Tinubu said and i quote"Let the poor breathe"`
console.log(quote)
