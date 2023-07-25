const nb = [1, 2, 3, 4];

const a = nb[0];
const b = nb[1];

console.log(a, b);

// destructuring

const [aa, bb, cc, dd] = nb;

console.log(aa, bb);

const [c, ...e] = nb;

console.log(c, e); //2,3,4

//echanger les variables
[b, a] = [a, b];
