// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Audattapure",//cant used by dot operator
    [mySym] : "mykey1",
    age: 18,
    location: "Pune",
    email: "Shubham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym); // not converted to symbol due to wrong syntax of symbol

// console.log(JsUser[mySym]);

// JsUser.email = "Shubham@chatgpt.com"
// Object.freeze(JsUser);
// JsUser.email = "Shubham@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");
}

JsUser.greeting2 = function() {
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting2());