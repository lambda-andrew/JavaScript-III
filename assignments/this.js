/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Global context when calling functions without the other properties.
* 2. Implicit Binding - used with dot notation is used to call a function.
* 3. New Binding - when using bind() with .this it will return a new function bound to the .this
* 4. Explicit Binding - used when explicitly passing .this with call(), apply() methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function nightGreeting(hunter) {
  console.log(this);
  return `Ah, ${hunter}`;
}
nightGreeting("Hunter");

// Principle 2
// code example for Implicit Binding
const executioners = {
  despise: "Vilebloods",
  leader: "Master Logarius",
  numbers: 1,
  vileBloods: function(name) {
    console.log(`Oh, beg pardon, you may call me ${name}. Protege of ${this.leader}, hunter of ${this.despise}.`);
    console.log(this);
  }
}
executioners.vileBloods("Alfred");

// Principle 3
// code example for New Binding
function theLeague(purpose, name, league) {
	this.purpose = purpose;
	this.name = name;
  this.league = league;
	this.greeting = function() {
		console.log(`Ahh, a new face, are you? I am ${this.name}, Master of ${this.league}. Members of ${this.league} ${this.purpose}.`)
	}
}
const firstTalk = new theLeague('cleanse the streets of all the filth that is spread about during the hunt', 'Valtr', 'The League');
const join = new theLeague('who bear its rune will see vermin.', 'Valtr', 'The League')
firstTalk.greeting();
join.greeting();

// Principle 4
// code example for Explicit Binding
function moon(being) {
    this.age = being.age;
    this.name = being.name;
    };

    const nightmare = function () {
        return `Oh ${this.name}, of the moon, of the dream.`
    };

const doll = new moon({
    name: 'Flora'
});

console.log(nightmare.call(doll));
