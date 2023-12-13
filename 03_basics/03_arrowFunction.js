/* Notes:-

1. syntax for arrow function :- () => {}
2. for returning any value :- (a) => {return a}
3. returning without using return keyword:- (a,b) => (a,b) //mainly used in react for objects

*/
const user = {
    username: "Shubham",
    price: 999,

    welomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welomeMessage();
// user.username = "sam"
// user.welomeMessage();

// console.log(this);

// function chai() {
//     let username = "Shubham"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Shubham"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,5));

const addTwo = (num1, num2) => ({username: "Shubham"})
console.log(addTwo(3,5));

const myArray = [2,3,4,5,6]

myArray.forEach((a) => {
    if(a%2==0)
        console.log(a);;
});

