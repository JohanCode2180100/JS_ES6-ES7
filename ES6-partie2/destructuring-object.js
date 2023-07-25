const myobject = {
  firstName: "johan",
  age: 35,
};

const { firstName, age } = myobject;

console.log(firstName);
console.log(age);

// on doit se baser sur le nom et non de l ordre

const { name1, age1 } = myobject;

console.log(name1); //undefined
console.log(age1); //undefined car nom different de l objet

//Il faut pour cela faire, se sont des ALIAS
const { name: name1, age: age1 } = myobject;
