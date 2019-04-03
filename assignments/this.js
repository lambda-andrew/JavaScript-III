/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit: Implicit will bound whatever keyword to the object that is before the dot.
* 2. Explicit: Explicit allows you to execute a function in a different context that directly points at a specific function.
* 3. New: New allows for any function to be turned into a constructor function. You can thus have unique objects applied to the original function.
* 4. Window: When a value of "this" is used inside of a function in the global scope, the function will apply to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
}
sayName("John");
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Yo',
    sayYo: function (name) {
        console.log(`${this.greeting} ${name} is so internet-savvy she should start her own social-networking site designed specifically for moms. It would be really popular.`);
        console.log(this);
    }
};
myObj.sayYo('Mama');
// code example for Implicit Binding

// Principle 3
function rapper(rap) {
    this.battle = 'Hi! ';
    this.myNameIs = 'My name is ';
    this.who = '(Who?) ';
    this.what = '(What?) ';
    this.greeter = rap;
    this.rap = function () {
        console.log(this.battle + this.myNameIs + this.what + this.myNameIs + this.who + this.myNameIs + this.greeter);
        console.log(this);
    };
}

const slim = new rapper('Slim Shady!');
slim.rap();
// code example for New Binding

// Principle 4
function greet(lang1, lang2, lang3) {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I enjoy programming in ${lang1}, ${lang2}, and ${lang3}.`)
}

const user = {
    name: 'John',
    age: 33,
}

const languages = ['JavaScript', 'HTML', 'CSS']

const bio = greet.bind(user, languages[0], languages[1], languages[2])
bio()