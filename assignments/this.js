/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default (Window/ Global [Node.js]) - If the call site of a function is the window Object, (i.e. your function call is not prefixed with an `object.`, then `this` defaults to the window/global binding)

* 2. Implicit - Any function's `this` keyword will refer to the call site of the object that's invoking it as a method. -- unless explicitly bound -- For example, in `obj1.ojb2.method`, the `this` in the method will point at obj2, since that's its call site. You can determine the call site of a function by looking at what immediately preceeds it.

* 3. Explicit - You can explicitly set what a function's `this` will point to by using Javascript's native `call`, `apply`, or `bind` methods that are derived from `Function.prototype`.
* 4. new - When you instantiate an object using the `new` keyword followed by a constructor function, the `this` inside the body of the constructor function refers to the resulting object that will be instantiated upon construction.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding