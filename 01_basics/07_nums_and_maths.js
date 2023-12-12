const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8353
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8353
console.log(otherNumber1.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++ Maths in JavaScript +++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //makes the integer positive, here 4
console.log(Math.round(4.3)); //round offs to nearest integer, here 4
console.log(Math.ceil(4.3)); // nearest next integer, here 5
console.log(Math.floor(4.3)); // nearest previous integer, here 4

const arr = [2,4,5,5,26,1,63]
console.log("Minimum value :- " + Math.min(arr[0],arr[1]));
console.log("Maximum value :- " + Math.max(arr[0],arr[1]));

// Math.random

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor((Math.random()*10 + 1)));

// random range

const min = 1
const max = 100

console.log(Math.floor(Math.random()*(max - min + 1) + min));
