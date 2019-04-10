/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Default Binding/Window Binding 
// Default binding refers to how this is the global context whenever a 
// function is invoked without any of these other rules. If we aren't using a
//  dot and we aren't using call(), apply(), or bind(), our this will be our global object.

// Your global context depends on where you're working. If you're in the browser,
//  this will be the window. When programming in strict mode, the global context is undefined.

// For example while in Chrome: 
let printMe = function () { 
    console.log(this); } 
    
    printMe() // prints your 'Window Object' if in the browser!



// Principle 2

// code example for Implicit Binding

//Whatever to the left of the '.' is what 'this' is referring to

var me = {
    name:'lauren',
    sayName: function(){
        console.log(this.name);
    }
}

console.log(me.sayName());

//what was left of the '.' is 'me' 


// Principle 3
// code example for New Binding

//use new to invoke constructor function. new keyword in front of constructor function will create new object. 

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();






// Principle 4
// code example for Explicit Binding
//call, apply, bind

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));

// The first parameter in call() method sets the "this" value, which is the object, on which the function is invoked upon. In this case, it's the "obj" object above.
// The rest of the parameters are the arguments to the actual function.


//apply ////////////////////////////////
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));

// Similarly to call() method the first parameter in apply() method sets the "this" value 
// which is the object upon which the function is invoked. In this case it's the "obj" object
//  above. The only difference of apply() with the call() method is that the second parameter
//  of the apply() method accepts the arguments to the actual function as an array.

//bind 
//Use .bind() javascript
var obj = {name:"Niladri"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 


console.dir(bound); ///returns a function
console.log("Output using .bind() below ");
console.log(bound("Newtown","KOLKATA","WB")); //call the bound function

// The first parameter to the bind() method sets the value of "this" in the 
// target function when the bound function is called. Please note that the 
// value for first parameter is ignored if the bound function is constructed
//  using the "new" operator.
// The rest of the parameters following the first parameter in bind() 
// method are passed as arguments which are prepended to the arguments
//  provided to the bound function when invoking the target function.















