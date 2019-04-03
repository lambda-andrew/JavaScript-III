/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing 
  several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the 
  bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.name = gameAttributes.name;
  this.dimensions = {
    length: gameAttributes.dimensions.length,
    width: gameAttributes.dimensions.width,
    height: gameAttributes.dimensions.height
  };
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterStatsAttributes) {
  GameObject.call(this, characterStatsAttributes);
  this.healthPoints = characterStatsAttributes.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  this.healthPoints--;
  return `${this.name} took damage. HealthPoints --> ${this.healthPoints}`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

//This is cool!!

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/* Begin commenting */
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
/* end of commenting*/

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result
// * in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.useShield = function() {
  console.log(`Current health points for ${this.name} `, this.healthPoints);
  this.healthPoints -= 3;
  if (this.healthPoints <= 0) {
    console.log(this.destroy());
    return `${this.name} has lost all health points !! out of game!`;
  } else {
    return (
      `${
        this.name
      } Used his shield - Lose 5 health points - Current health points ` +
      this.healthPoints
    );
  }
};

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.useCharm = function() {
  console.log(`Current health points for ${this.name} ` + this.healthPoints);
  this.healthPoints -= 5;
  if (this.healthPoints <= 0) {
    return `${this.name} has lost all health points !! out of game!`;
  } else {
    return (
      `${
        this.name
      } used his charm - Lose 5 health points - Current health points ` +
      this.healthPoints
    );
  }
};

// creating Villain
const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 13,
  name: "Darth Vader",
  team: "Forest Kingdom",
  weapons: ["Bow", "laserbeam"],
  language: "Elvish"
});

//creating Hero
const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 13,
  name: "Yoda",
  team: "Forest Kingdom",
  weapons: ["Bow", "Force"],
  language: "Elvish"
});

console.log(villain.useShield());
console.log(hero.useCharm());
console.log(villain.useShield());
console.log(hero.useCharm());
console.log(villain.useShield());
console.log(hero.useCharm());
