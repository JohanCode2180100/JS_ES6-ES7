class upperCaseArray extends Array {
  uppercase() {
    let newArray = [];
    this.forEach((element) => newArray.push(element.toUpperCase()));
    return newArray;
  }
}

const myArray = new upperCaseArray();

myArray.push("johan", "dada", "poney", "kevin");

console.log(myArray.uppercase());
