
function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(num1,num2) {
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3,4)

// console.log("Result: ", result); // undefined because the function has not returned any value yet

function addTwoNumbers(num1,num2) {
    return num1 + num2;
}

const result = addTwoNumbers(3,4)

// console.log("Result: ", result); // now it will return the addition 

function loginUserMessage(username="sam") {
    if(username){
        return `${username} just loggeed in`
    }
    else{
        console.log("Please enter a username");
        return 
    }
}

// console.log(loginUserMessage("Shubham"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) { // here ... is a rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500));

//********************* Functions with object *********************

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

//********************* Functions with arrays *********************

const myNewArray = [200,300,500,600,626]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));