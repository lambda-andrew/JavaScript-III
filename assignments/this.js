/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window, when you dont point at anything the "this" keyword will point at the whole
of the window you are operating your code in. AKA global scope.
* 2. Implicit, when you are within a function the "this" keyword implied that it is 
to point up at the function that it is within.

* 3. New, using the new keyword we create a new object using a constructor
function, we use the functional scope of that constructor function to let the "this"
keyword imply where it is to point to.

* 4. Explicit, we explicitly tell "this" keyword where it is to point to using
.call, .bind, .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log (this);

// Principle 2

const world = function(){
    console.log (this)
};

// code example for Implicit Binding

// Principle 3

const Dog = function(attribute){
    this.furColor = attribute.furColor
}
console.log (new Dog(fido))

// code example for New Binding

// Principle 4

const bart = {
    name: "Bart",
    age: 12,
    food: "fries",
    eat: function() {
      return `${this.name} loves to eat ${this.food}`
    }
  }

const skills = ["HTML", "CSS", "JS"]
console.log(introduce.call(bart, ...skills));

// code example for Explicit Binding