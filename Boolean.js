// BOOLEAN VALUES (True or False) these are use to make decision
const isMarried = false

// comparison operator 
// > < == loose equality (doesnt check data types)
// === strict equality
//<= >=
// 6 > 9
console.log(6.0 > 9)
console.log(5 =="5")
console.log(5 ==="5")

console.log(6.0 >= 6)
console.log(7.2 =="7.2")
console.log(5.0 === 5.0)
console.log(7 <= 8)
console.log(9.0 >="90")
console.log(89 ==="89")
console.log(4 + 4 >= 7)


// LOGICAL OPERATIONS and &&, or ||, ! not
//(yaba and ikeja) (yaba or ikeja)
console.log(7 > 6 && 5 > 4) // t and t
console.log(11 === "11" && 3 >= 2) // f and t
console.log(5 >= 6 && 2 == 2)
console.log(7 === 7 && 9 > 11)
console.log("a" === "A" && 2 === 2)
console.log(6 > 7 && 32 >= 8)

console.log(false || false )
console.log( 6 > 7 || 5 < 8)

console.log(8 !== 8 && 2.0 > 2)

const country = "Nigeria"
const isIsland = false

// TRUTHY AND FALSY VALUES\
// Strings "wale" ... any tangible values are true...
console.log(Boolean (""))
//numbers all valid numbers (-ve or +ve) ... only zero 0 is false
console.log(Boolean (0)) 

// NULL AND undefined are falsy value
