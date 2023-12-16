class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        
        super(username)

        this.email = email
        this.password = password
        }

        addCourse() {
            console.log(`A new course was added by ${this.username}`);
        }
    }


const chai = new Teacher("Chai","chai@gmai.com","123")

// console.log(chai);
// chai.addCourse()

const masalaChai = new User("masalaChai")

// masalaChai.logMe()

// console.log(chai instanceof Teacher === masalaChai instanceof Teacher); fasle
// console.log(chai instanceof Teacher === masalaChai instanceof User); fasle
