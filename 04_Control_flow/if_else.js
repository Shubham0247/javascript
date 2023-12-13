// if

// if(true) {
//     //executed
// }

// if(false) {
//     //not executed or ignored
// }

// if (2 == "2") {
//     console.log("executed");
// }

// if (2 === "2") {
//     console.log("Not executed");
// }

// const temperature = 41;

// if(temperature < 50) {
//     console.log("less than 50");
// }  else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); will not execute because of scope

// const balance = 1000

// if (balance > 500) console.log("test");

// if(balance < 500) {
//     console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn &&  debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}