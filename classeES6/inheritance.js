class Person {
  constructor(name, age, power) {
    this.name = name;
    this.age = age;
  }

  Present() {
    console.log(`hello ${this.name}`);
  }
}
//j execute le constructor de la classe Person
//super fait reference a la classe de base
class Hero extends Person {
  constructor(name, age, power) {
    super(name, age);
    this.power = power;
  }
  usePower() {
    console.log(`i am using my power : ${this.power}`);
  }
  //on va chercher la fonction present dans la class Person
  presentHero() {
    super.Present();
    console.log(`my power is : ${this.power}`);
  }
}

let johan = new Hero("Johan", 35, "vitesse");

johan.Present();
johan.usePower();
johan.presentHero();
