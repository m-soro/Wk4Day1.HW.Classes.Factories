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
