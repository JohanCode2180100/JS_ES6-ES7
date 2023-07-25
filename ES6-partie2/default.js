function nomComplet(prenom, nom = "smith") {
  console.log(prenom + " " + nom);
}
//parametre par defaut
nomComplet("brad");

// le parametre par defaut est ecrase si nom specifie
// argument de gauche a droite, attention lors de la declaration
//mettre les parametres normaux avant les defauts
nomComplet("johan", "codeur");
