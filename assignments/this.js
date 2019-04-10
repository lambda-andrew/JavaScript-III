/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding -  connects you to anytihng in the window.
* 2. Implicit Binding - there is usually a attribute atached to the left of this.
* 3. New Binding - is when {this} can be connected through something like a  constructor.
* 4. Explicit Binding - this is defined exclusively 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const Obj = {
  greet:"hello",
  fun:function(anyName){
    return console.log(`${this.greet} ${anyName}`);
  }
}

Obj.fun("john");

// Principle 3
// code example for New Binding
 function Oops (name,phrase){
  this.name = name;
  this.phrase = phrase;
  this.construct = function(){
    return console.log(`${name} ${phrase}`);
  };
}

const jim = new Oops("jim","i'm sorry");

jim.construct();
// Principle 4

// code example for Explicit Binding



function Stat (stat){
this.age = stat.age;
this.hap = stat.hap;
}

const jack = new Stat({
  age: 15,
  hap: 10
});
console.log(jack)