// what are the four the pillars of OOP

// Inheritance, abstraction, polymorphism, encapsulation.

class User {
    //how the user is made
    constructor(nameInput) {
        this.name = nameInput;
    }

    hello() {
        console.log(this);
        console.log("hello");
        return  this.hello() // gen.hello() 
    }
}

let Joshua = new User("Joshua")
let David = new User("David")
let Genesse = new User("Genesse")
// console.log(Joshua);
// console.log(David);


// let person = {
//     // stuff
// }