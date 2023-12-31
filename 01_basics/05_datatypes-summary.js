// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(typeof(id));

// Refernce (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"Shubham",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);

myFunction()


// ++++++++++++++++++++ Memories in javascript +++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non primitive)

let myYoutubename = "shubham.com"

let anotherName = myYoutubename

anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
