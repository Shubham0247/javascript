//Dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleDateString())

let myCreatedDate2 = new Date("01-3-2023")
// console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);
console.log(newDate.getFullYear());



console.log(newDate.toLocaleString('default',{
    weekday: "narrow",
    day: "numeric"
}));