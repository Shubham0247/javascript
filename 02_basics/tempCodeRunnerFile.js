const tinderUser = new Object() //singleton object
// const tinderUser = {} // non singleton object

tinderUser.id = "123abc",
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "shubham",
            lastname: "Audattapure",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// combining two objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2} wrong method

// const obj3 = Object.assign({},obj1,obj2) less used method

const obj3 = {...obj1, ...obj2} // mostly used method
console.log(obj3);

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 2,
        email : "s@gmail.com"
    },
    {
        id : 3,
        email : "s@gmail.com"
    },
    {
        id : 4,
        email : "s@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));