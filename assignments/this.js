/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
Using dot notation to create a function. left of the dot defines the function.
* 2.
Explicit
Uses call apply or bind and push this into it
* 3.
Global Binding this will be the window or console object
* 4.
New Binding - constructor functon reffering to a specific instance.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this.js = 'Javascript'

function sayJs (){
  console.log(`${js} is a pain in the ass.`)
}
sayJs();
// Principle 2
// code example for Implicit Binding
const jscript= {
  isapain: 'is a pain in the ass...',
    say() {
    console.log(`JavaScript ${this.isapain}`);
  },
  sayWhat: {
    really: 'No... Really',
    say() {
      console.log(`${this.really}`);
    }
  }
};

jscript.say();
jscript.sayWhat.say();
// Principle 3
// code example for New Binding
function JavaScript(sucks) {
  this.javaScript = 'JavaScript ';
  this.sucks = sucks;
  this.speak = function() {
    console.log(this.javaScript + this.sucks);
    console.log(this);
  };
}

const java = new JavaScript('Newman');
const script = new JavaScript('is a pain in the ass...');

script.speak();
script.speak();

// Principle 4
// code example for Explicit Binding
function js (j1, j2, j3) {
  console.log(
    `${this.name} ${j1} ${j2} ${j3}`
  )
}

const jS = {
  name: 'JavaScript',
}

const context = ['is a', 'pain in', 'the ass....']

const newFn = js.bind(jS, context[0], context[1], context[2])
newFn()
