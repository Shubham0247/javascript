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

let isLoggedIn = ""

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);