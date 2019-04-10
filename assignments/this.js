/* Project Title - The Four Principles Of "This" */

/* Explain The Four Principles For The "This" Keyword Below. */
/* Write Out A Code Example For Each Explantion. */

/* 1. The First Principle is Window Binding, or Default Binding. This is when "This" is the global context whenever a function
        is invokved without any other rules. IE if we are not using a dot, are not using call(), apply(), etc. Then our "This"
        will be the global object. */

    /* 1. The Code Example Window Binding is: */

    let printMe = function () {
         console.log(this); } 
         printMe()

/* 2. The Second Principle is Implicit binding. This occurs when dot notation is used to invoke a function. */
/*      Through this method, anything to the left of the dot becomes the context for "This" in the function.  */ 

/* 2. The Code Example For Implicit Binding is: */

        var me = {
            name: 'Jon',
            sayName: function(){
                console.log(this.name);
            }
        }
        console.log(me.sayName());

/* 3. The Third Principle is New Binding. Use "New" to invoke constructor functions.
        The "New" keyword goes in front of constructor function to create a new object */


/* 3. The Code Example for New Binding is: */

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


/* 4. The Fourth Principle is  Explicit Binding. This occurs when the operations .call(), .apply(), or .bind() are used on a function. */
/*      The first parameter call() method sets the "this" value, which is the object, on which the function is invoked upon. */

/* 4. The Code Example for Explicity Binding is: */ 

        var obj = {name:"Ken"};
            var greeting = function(a,b,c){
            return "welcome "+this.name+" to "+a+" "+b+" in "+c;
        };
        console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));   
