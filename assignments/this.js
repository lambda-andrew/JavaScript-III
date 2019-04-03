/* The for principles of "this";
* In your own words, explain the four principles for the "this" keyword below.
*
* 1. Window / Global Binding

        When using ".this" in a function that is not a method, inside of an object, then ".this" will 
        refer to the object above it. Which is the window object, it contains all of the JavaScript the 
        browser uses. To use the kingdom analogy, the function might be the kingdom but ".this" refers to
        the whole planet. 


* 2. Implicit Binding

        Using ".this" with implicit binding is when a function is called with an object in front of it with 
        dot notation. The function is a method within an object and when object.function.this is called ".this" 
        refers to the method in that object, whatever is to the left of the dot. 


* 3. New Binding

        New Bindings are when ".this" is used in a Constructor Function, a function that acts as a template to 
        build new objects. Making a new constant and using "new" with your constructor function and the data you 
        want to pass along will create an object where the ".this" gives the data the ability to use everything 
        in the constructor function but doesn't change the constructor function. 

* 4. Explicit Binding

        Explicit Binding is when ".call", ".apply", and ".bind" are used to change/save what a constructor function set 
        objects to. ".call" uses a list of arguments and ".this" to apply new key:values to a function.  ".apply" 
        needs an array to pass the arguments to be applied to key:values in a function. ".bind" creates a new function
        with ".this" bound somewhere else and allows for calling that new function and applying ".this" from another place. 

* write out a code example of each explanation above
*/

// Principle 1 - Window / Global Binding

    function doSomething(thing){
    console.log(this); // console shows everything in the window object
    return `doing the ${thing}`
    }
    console.log(doSomething('dance'));

// Principle 2 - Implicit

    const students = {
        class: 'Web19',
        phrase: function(name) {
            console.log(`${name} is in ${this.class} and loves to code!`);
        }
    }
    console.log(students.phrase("Preston"));

// Principle 3 - New Binding

    function Fruits(fruit){
        this.noise = 'mmmmm';
        this.fruit = fruit;
        this.saying = function(state) {
            console.log(`${this.noise} ${this.fruit} ${state}`);
            console.log(this); // refers to the Fruits function
        };
    }

    const banana = new Fruits('banana');
    const mango = new Fruits('mango');

    console.log(mango.saying('is good'));
    console.log(banana.saying('is great'));

// Principle 4 - Explicit Binding

    const squash = {
            "veg": "squash"
    }

    function vegetable(a,c){
        return `${a} its a ${this.veg} ${c}`;  //this refers to the const squash key "veg"
    }
    
    console.log(vegetable.call(squash, 'eww', 'gross' ));