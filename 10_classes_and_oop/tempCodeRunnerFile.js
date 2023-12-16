class User { 
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const Shubham = new User("Shubham")
// console.log(Shubham.createId()); // this will not work because createId() is static and we cannot call static variables or methods using objects

console.log(User.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
console.log(iphone.createId());

