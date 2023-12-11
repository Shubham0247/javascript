// let score = "a" -> NaN
// let score = "123" -> 123
// let score = null -> 0
// let score = undefined -> NaN
// let score = true -> 1
// let score = false -> 0

let score = true
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn = "" --> false
// let isLoggedIn = "1" --> true
// let isLoggedIn = 1 --> true
// let isLoggedIn = 0 --> false
let isLoggedIn = "Shubham" 

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);


// ********************** Operations ************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Shubham"
let str2 = " Audattapure"

let str3 = str1 + str2

console.log(str3);

console.log(1 + "2");
console.log("1" + 2);

console.log("1" + 2 + 2);

console.log(1 + 2 + "2");

console.log(1 + "2" + 2);

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);