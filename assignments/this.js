/* The four principles of "this";
 * in your own words. explain the four principles for the "this" keyword below.
 *
 * 1. Window/Global: 'this' refers to the global window object. 
 
 * 2. Implicit: The object before the "dot" when calling a function is an example of this.
 
 * 3. New: Lets you create new objects based off of a constructor template 
 
 * 4. Explicit: Wherever a call, bind, or apply method is used.
 
 *
 * write out a code example of each explanation above
 */

// Principle 1

function nameCaller(name) {
    console.log(this);
    return `You're a jerk, ${name}`;
}

nameCaller("Eric");

// code example for Window Binding

// Principle 2

let person = {
    firstName: "Eric",
    lastName: "Nunn",
    showFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

person.showFullName();

// code example for Implicit Binding

// Principle 3

function Greeter(greeter) {
    this.greeting = 'Oh, hey there ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
    };
}

const person1 = new Greeter('Professor');
const person2 = new Greeter('Bender');

person1.speak();
person2.speak();

// code example for New Binding

// Principle 4

function Person(property) {
    this.age = property.age;
    this.name = property.name;
    this.homeTown = property.homeTown;
    };

    const speak = function () {
        return `Hi, I'm ${this.name}.`
    };

const fry = new Person({
    age: 28,
    name: 'Fry',
    homeTown: 'New New York'
});

console.log(speak.call(fry));

// code example for Explicit Binding