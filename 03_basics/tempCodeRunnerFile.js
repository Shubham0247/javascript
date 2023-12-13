// // var c = 300
// let a = 300
// if(true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("Value of a inside block scope is:- " + a);
// }

// console.log("Value of a outside block scope i s:- " + a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Shubham";

    function two() {
        const website = " Youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username  = "Shubham"
    if(username === "Shubham") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++ interesting ++++++++++++++++++++

// console.log(addone(5));

function addone(num) {
    return num = num + 1;
}

console.log(addTwo(5));

const addTwo = function(num) {
    return num+2;
}


