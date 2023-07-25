const fruitsRouges = ["fraise", "Framboise", "cerise"];

// avant
for (let i = 0; i < fruitsRouges.length; i++) {
  console.log(fruitsRouges[i]);
}

// simplifie

for (let fruit of fruitsRouges) {
  console.log(fruit);
}
