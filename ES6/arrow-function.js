/* syntaxe
arg => value  */
//arrow function with argument

const myFunction = (arg) => arg * 5;
console.log(myFunction(4));

const me = {
  name: "johan",
  presentFriend: function (friend) {
    return "connais-tu " + friend + " ? ";
  },
};
console.log(me.presentFriend("kevin"));

const me2 = {
  name: "johan",
  presentFriend: (friend) => "connais-tu " + friend + " ?  ",
};

// //with three arg
const me3 = {
  name: "johan",
  presentFriend: (friend1, friend2, friend3) =>
    "tu connais " + friend1 + " , " + friend2 + " , " + friend3 + " ? ",
};
console.log(me3.presentFriend("kevin", "johan", "caro"));

//------------------------------------------------------------------

const classicFunction = function () {
  console.log(this);
};
const arrowFunction = () => console.log(this);

//this => objet global
const classicFunctionBind = classicFunction.bind(this);

const me4 = {
  name: "johan",
  presentClassic: classicFunction,
  presentArrow: arrowFunction,
  presentClassicBind: classicFunctionBind,
};

me4.presentClassic();
me4.presentArrow();
me4.presentClassicBind();
