// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let johan = new Person("johan");
// console.log(johan.name);

// johan.name = "jo";
// console.log(johan.name);

class Person {
  constructor(name) {
    //ne pas oublier le tiret du bas, rend prive
    this._name = name;
  }
  get name() {
    return `Mr ${this._name}`;
  }
  set name(value) {
    if (value.length > 2) {
      this._name = value;
    } else {
      console.log(`trop court`);
    }
  }
}

let johan = new Person("johan");

//message trop court
johan.name = "ko";

// console.log(johan.name);
// console.log(johan._name);

// le get permet de controler ce que voit la personne
