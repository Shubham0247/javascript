// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailabale: true,

    orderChai: function() {
        console.log("chai nahi bani");
    }
}

// console.log(chai);

const chaiDescriptor = Object.getOwnPropertyDescriptor(chai, "name")

// console.log(chaiDescriptor);

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
})
const updatedChaiDescriptor = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(updatedChaiDescriptor);

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        // console.log(`${key} : ${value}`);
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

Object.defineProperty(Math,'PI', {
    writable: true
})

const updatedDescriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(updatedDescriptor);