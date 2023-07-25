// a l inverse de REST, il va prendre l array est tranformer en valeur libre
const mesNbs = [5, 8, 21];

function sum3Nb(nb1, nb2, nb3) {
  return nb1 + nb2 + nb3;
}

console.log(sum3Nb(...mesNbs));

//ici nous eclatons les variables pour les regrouper dans un new array
const fruitsRouges = ["fraise", "framboise"];
const fruitsVerts = ["pomme", "poire"];

const fruits = [...fruitsRouges, ...fruitsVerts];

console.log(fruits);

const fruitsRouges2 = [...fruitsRouges];

fruitsRouges2.push("cerise");

//ajout de cerise
console.log(fruitsRouges2);
//aucun impact sur ce array
console.log(fruitsRouges);
