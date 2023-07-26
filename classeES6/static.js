// class Math {
//   add(nb1, nb2) {
//     return nb1 + nb2;
//   }
//   multi(nb1, nb2) {
//     return nb1 * nb2;
//   }
// }

// const myMath = new Math()

// console.log(myMath.add(5,6));
// console.log(myMath.multi(3,6));

class Math {
  //static permet de ne plus appartenir a l instance specifique
  //mais a la classe elle meme static add devient dependande de la class Math
  static add(nb1, nb2) {
    return nb1 + nb2;
  }
  static multi(nb1, nb2) {
    return nb1 * nb2;
  }
}

const myMath = new Math();

console.log(Math.add(5, 6));
console.log(Math.multi(3, 6));
