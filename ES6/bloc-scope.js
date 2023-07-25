// la variable a est dans le bloc enfant et ne peut donc pas etre lu
// par le console log

function first() {
  if (true) {
    let a = 5;
  }
  console.log(a);
}

// Le bloc enfant connait les variables du bloc parent mais
// pas l inverse

let i = 62;

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

// VO global
// - i : 62

// VO bloc
// - i : 0, 1 etc

// sortie du bloc i vaut 62 ( il est declare en global)

/* ------------------------------------------------------------------
---------------------------REGLES DE BASE-------------------------
------------------------------------------------------------------

1 NE PLUS UTILISER LE VAR 
2 TOUJOURS UTILISER LE CONST 
3 SI ON REASSIGNE UNE VALEUR A LA VARIABLE,UTILISER LE let */
