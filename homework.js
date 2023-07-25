/**
 * ----------------------
 * CLASSES AND FACTORIES
 * ----------------------
 */

/**
 * --------------
 * HAMSTER CLASS
 * --------------
 */

class Hamster {
  constructor(owner, name) {
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }
  wheelRun = () => console.log("squeak squeak");
  eatFood = () => console.log("nibble nibble");
  getPrice = () => this.price;
}

/**
 * -------------
 * PERSON CLASS
 * -------------
 */
class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name; // init 0
    this.age = age; // init 0
    this.height = height; // init 0
    this.weight = weight; // init 0
    this.mood = mood; // init 0
    this.hamsters = []; // empty array
    this.bankAccount = bankAccount; // 0
  }
  getName = () => this.name;
  getAge = () => this.age;
  getWeight = () => this.weight;
  greet = () => console.log(`Hi! I'm ${this.name}`);
  eat = () =>
    `Weight and mood increased ${(this.weight += 1)}, ${(this.mood += 1)}`;
  excercise = () => `Weight decreased ${(this.weight -= 1)}`;
  ageUp = (age) =>
    `AgeUp => Age: ${(this.age +=
      age)} , Height: ${(this.height += 1)}, Mood: ${(this.mood += 1)}
              BankAccount: ${(this.bankAccount += 1)}`;
  buyHamster = (hamster) =>
    this.hamsters.push(hamster) &&
    `I bought a Hamster! his name is ${hamster.name}! 
    Mood: ${(this.mood += 10)} Bank Account: ${(this.bankAccount -=
      hamster.getPrice())}`;
}

/**
 * Create a Story with your Person class
 * ======================================
 * (1) Instantiate a new Person named Timmy
 * (2) Age Timmy five years
 * (3)At this point Timmy's a little bummed. As a precocious child,
 *    he feels he's "seen it all" already. Have him eat five times.
 * (4)Now Timmy's a little heavier than he wants to be.
 *    Kindergarten's coming up and he wants to look good.
 *    Have him exercise five times
 * (5)Age Timmy 9 years
 * (6)Create a hamster named "Gus"
 * (7)Set Gus's owner to the string "Timmy"
 * (8)Have Timmy "buy" Gus
 * (9)Age Timmy 15 years
 * (10)Have Timmy eat twice
 * (11)Have Timmy exercise twice
 */

// name, age, height-assuming cm, weight-assuming lbs, mood(1-100), hamsters, bankAccount
const timmy = new Person("Timmy", 5, 152, 120, 60, 0, 500);
console.log("\n======== TIMMY'S STORY ========\n");
console.log(timmy);
console.log(timmy.eat());
console.log(timmy.eat());
console.log(timmy.eat());
console.log(timmy.eat());
console.log(timmy.eat());
console.log(timmy.excercise());
console.log(timmy.excercise());
console.log(timmy.excercise());
console.log(timmy.excercise());
console.log(timmy.excercise());
console.log(timmy.ageUp(9));

console.log("\n======== TIMMY'S HAMSTER AND OLDER YEARS ========\n");
const gus = new Hamster("Timmy", "Gus");
console.log(timmy);
console.log(timmy.buyHamster(gus));
console.log(timmy.hamsters);
console.log(timmy.ageUp(15));
console.log(timmy.eat());
console.log(timmy.eat());
console.log(timmy.excercise());
console.log(timmy.excercise());

/**
 * ----------------------
 * DINNER AND CHEF CLASS
 * ----------------------
 * Chef should be a factory of Dinner
 * Add a constructor to dinner that sets the string properties,
   appetizer, entree and dessert.
 * Add a method on chef that takes three arguments and returns a
   new Dinner based on those arguments.
 * Have the Chef create 3 dinners, log the dinners
 */

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

/**
 * --------------------
 * CHEF MAKING DINNERS
 * --------------------
 * Class Chef is a factory of dinner
 */

class Chef {
  constructor(factoryType) {
    this.factoryType = factoryType;
    this.dinnerCollection = [];
  }
  makeDinners = (d1, d2, d3) => {
    const dinner = new Dinner(d1, d2, d3);
    this.dinnerCollection.push(dinner);
    console.log(`\nChef has created a scrupmtious dinner. Buon Apetito!\n`);
    console.log(dinner);
  };
  dinnerCount = () =>
    `\nThe chef has created : ${this.dinnerCollection.length} set dinners.\n`;
}

console.log("\n======== CHEF CLASS ========\n");

const dinnerChef = new Chef("dinner");

//prettier-ignore
dinnerChef.makeDinners("Seared Diver Scallops","Grilled Pork Korobuta","Nana's Panacotta");
//prettier-ignore
dinnerChef.makeDinners("Grilled Lamb Chops", "Wild Atlantic Salmon", "6 Layer Chocolate Cake");
//prettier-ignore
dinnerChef.makeDinners("Wild Goose Pate", "Seared Kobe Rib Eye", "Tiffany's Crepe Suzette");
console.log(dinnerChef.dinnerCount());
