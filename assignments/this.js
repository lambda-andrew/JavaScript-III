/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The four principles help us understand where `this` is bound.
*
* 1. The first principle is when `this` is used within the global scope.
* 2. The next principle is when `this` is used within a function. The 'dot' token determines the implicit binding of `this`.
* 3. The third principle is when we use the `new` constructor that binds `this` to an instatiated object.
* 4. The last principle is when we use `call` or `apply` to explicitly define where `this` is bound.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this)

// Principle 2

// code example for Implicit Binding
let obj = {
  values: [1, 2],
  sum: function() {
    return this.values[0] = this.values[1]
  }
}
// console.log(obj.sum())

// Principle 3

// code example for New Binding
function Person(name) {
  this.name = name
  this.speak = function() { return `Hi, my name is ${this.name}.` }
}
let john = new Person("John")
let sue = new Person("Sue")
// console.log(john.speak())
// console.log(sue.speak())

// Principle 4

// code example for Explicit Binding
console.log(sue.speak.apply(john))
