/**
 * ----------------------
 * CLASSES AND FACTORIES
 * ----------------------
 */
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  wheelRun = () => console.log("squeak squeak");
  eatFood = () => console.log("nibble nibble");
  getPrice = () => this.price;
}

console.log("\n======== TESTING THE CLASS AND METHOD ========\n");
const myHamster = new Hamster("Mark", "Hammy", 200);
console.log(myHamster);
myHamster.wheelRun();
myHamster.eatFood();
console.log(myHamster.getPrice());

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.namne = name; // init 0
    this.age = age; // init 0
    this.height = height; // init 0
    this.weight = weight; // init 0
    this.mood = mood; // init 0
    this.hamsters = [hamsters]; // empty array
    this.bankAccount = bankAccount; // 0
  }
  getName = () => this.name;
  getAge = () => this.age;
  getWeight = () => this.weight;
  greet = () => console.log(`Hi! I'm ${this.name}`);
  eat = () => (this.weight += 1) && (this.mood += 1);
  excercise = () => (this.weight -= 1);
  ageUp = () =>
    (this.age += 1) &&
    (this.height += 1) &&
    (this.mood += 1) &&
    (this.bankAccount += 1);
  buyHamster = (hamster) =>
    this.hamsters.push(hamster) &&
    (this.mood += 10) &&
    (this.bankAccount -= hamster.getPrice());
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
