const mesNombres = [5, 3, 44, 53];

function sum(nombres) {
  let somme = 0;
  for (let i = 0; i < mesNombres.length; i++) {
    somme += nombres[i];
  }
  return somme;
}

console.log(sum(mesNombres));

// const Nombres = [5, 3, 44, 53];
//... permet d entrer des nombres libres qui seront dans un array
function sum2(...nombres) {
  let somme = 0;
  for (let i = 0; i < mesNombres.length; i++) {
    somme += nombres[i];
  }
  return somme;
}

console.log(sum2(5, 3, 44, 53));
