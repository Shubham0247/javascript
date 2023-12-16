
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function() {
    console.log(`Shubham is present in all objects`);
}

// heroPower.shubham()

// myHeros.shubham()

Array.prototype.heyShubham = function () {
    console.log(`Shubham says hello`);
}

myHeros.heyShubham()

// heroPower.heyShubham()

// inheritance is done through __proto__ but it is old

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

// Teacher.__proto__ = User

// modern syntax for inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Shubham           "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`Your true length is :- ${this.trim().length}`);
}

anotherUsername.trueLength()

"Shubham".trueLength()
"Chai".trueLength()