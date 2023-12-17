class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        // return this._password.toUpperCase()
        return `abba${this._password}abba`.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
    // get email() {

    // }

}

const shubham = new User("Shubham@gmail.com", "abc")
console.log(shubham.password);

