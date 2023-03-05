//Ceci est un commentaire

/*Ceci est commentaire
sur plusieurs
lignes*/

/* Une variable est un espace dans lequel on stocke les choses. C'est comme une boîte qui porte un nom pour la reconnaître.
Ici, on déclare une variable, puis on l'initialise : ce qui est à droite donne sa valeur à ce qui est à gauche */
var unTexte = "Voici un texte";
console.log(unTexte);

/*On change la valeur de la variable, il ne faut pas remettre les mots-clés var, let ou const*/
unTexte = "Nouveau texte";
console.log(unTexte);

/*Nouvelle syntaxe*/
/*Les constantes : elles sont imumuables, on ne peut pas les modifier*/
const prenom = "Martin";
console.log(prenom);
//Ceci ne fonctionnera pas
//prenom = "Hermine";

/*let peut être modifié*/
let unChiffre = 24;
unChiffre = 12;
console.log(unChiffre);

let chaine = "Je suis une chaine de caractères";

//La concaténation
let nouvelleChaine = "Chaîne précédente : " + chaine;
console.log(nouvelleChaine);

let chiffre = 24;
nouvelleChaine = "Chaîne précédente : " + chiffre + " degrés";
console.log(nouvelleChaine);

//Avec les ` inutile de mettre les "+" pour concaténer, mais on utilise les ${}
nouveauChiffre = 32;
nouvelleChaine = `Le chiffre attendu est : ${nouveauChiffre} degrés`;
console.log(nouvelleChaine);

//Les types de données
//1. Le type string, entre ""
let string = "Je suis une chaine";

//2. Le type Number, pas de "" (sinon ce serait une chaîne de caractères)
let number = 24;

//3.Les booléens (true et false);
let boolean = true;

//4. Les tableaux (à mettre entre crochets)
let array = ["Je", "suis", 24, false];

//5. Les objets (à mettre en accolades). A l'interieur on a des données (à gauche, c'est l'index, à droite la valeur)
let object = {
  nom: "Lucien",
  age: 34,
  ville: "Lille",
};

//6. null (vide) et undefined (non défini)
//Ici on déclare une variable qu'on initialisera plus tard, ça se fait souvent en JS
let arbre;
console.log(arbre); //renvoi undefined car elle n'est pas définie
console.log(typeof arbre); //Undefined est de type undefined

let autreArbre = null;
console.log(autreArbre); // renvoie null (vide), mais à la différence de l'exemple précédent, la variable est ici définie et sa valeur est null
console.log(typeof autreArbre); //Null est de type object

//Connaître le type d'une variable : typeof
console.log(typeof string);
console.log(typeof array);

//Les opérateurs
let total = 0;
total++; //équivaut à total = total + 1;
console.log(total);
total--; //équivaut à total = total - 1;
console.log(total);

total += 5;
console.log(total); // donnera 5

let x = 4;
total = x++;
console.log(total); // donnera 4 car l'élément de droite donne sa valeur à l'élément de gauche. Donc l'opération ne sera pas effectuée

let y = 4;
total = ++y;
console.log(total); // donnera 5. Ici l'opération est exécuté
