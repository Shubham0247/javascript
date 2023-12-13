// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log(`DB connected`);
// }
// // chai()

(function chai() {
    console.log(`DB connected`);
})(); // semicolon is must to end this function

(() => {
    //named IIFE
    console.log(`DB connected two`);
})();

((name) => {
    
    console.log(`DB connected two ${name}`);
})('Shubham')

