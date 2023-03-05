//--------------
//1. Présentation
//---------------

const obj = {
  //index:valeur
  pseudo: "Gui",
  ville: "Lille",
  admin: false,

  //On peut aussi déclarer des méthodes, dans dire fonction. Ici le this fait référence à l'objet. This désigne les choses à l'intérieur même d'un objet. En disant this.pseudo, je fait référence à pseudo:"Gui". Si on dit juste pseudo (sans le this), on aurait eu undefined car pseudo n'est pas déclaré car on fait référence à un index
  //   direBonjour() {
  //     console.log("Bonjour je suis " + this.pseudo);
  //   },
  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
};

// console.log(typeof obj); //retourne object

// let array = [1, 2, 3];
// console.log(typeof array); // retourne object

// console.log(typeof document.body); // retourne object
// console.log(typeof null); //retourne object

//pour ajouter un index et une valeur, il y a 2 options
obj.age = 24;
//console.log(obj);
obj["admin"] = true;

//pour modifier une valeur
obj.pseudo = "Martin";
console.log(obj);

//pour supprimer un index et une valeur
delete obj.ville;
console.log(obj);

//pour savoir si une propriété existe
console.log("pseudo" in obj); //true
console.log("ville" in obj); //false

//parcourir un objet
for (const key in obj) {
  console.log(key); // retourne pseudo, age et admin (les index)
  console.log(obj[key]); // retourne les valeurs, ici Gui, 24 et false
  console.log(key + " : " + obj[key]); // retourne les index et les valeurs
}

console.log(obj.direBonjour());

//-----------
//2. Les méthodes natives avec Object
//------------

//Obtenir les index d'un objet
const keys = Object.keys(obj);
console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
console.log(values);

//Obtenir les deux
const nestedArray = Object.entries(obj);
console.log(nestedArray);

//fusionner des objets. Si des objets ont la même clé, ici pseudo, c'est la dernière déclarée qui l'emporte
const obj2 = {
  taille: "1.80",
  poids: "75kg",
  pseudo: "Lucien",
};

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

//Empêcher des modifications
const newObj = Object.freeze(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";
console.log(newObj); //rien ne changera

//Modifier que des valeurs mais pas les index
const newObj1 = Object.seal(obj);
newObj1.pseudo = "Test";
newObj1.adresse = "42 avenue du code";
console.log(newObj1); // seul pseudo changera mais addresse ne sera pas ajoutée

//--------------
//3. Les constructeurs d'objets
//--------------

//Quand on a des milliers d'entrées, il est impossible de créér des milliers de nouvelles entrées, pour cela, on utilise un constructeur

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
    //revient à dire user2.pseudo + " habite à " + user2.ville. Voilà l'importance du this
  };
}

//Ici on créé un nouvel utilisateur en utilisant la fonction User ci-dessus.
const user1 = new User("Hermine", "Rennes");
const user2 = new User("Denis", "Nantes");
console.log(user1);
console.log(user2.getCity()); // Denis habite à Nantes

//Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3("Gérard", "Nice");
console.log(user4);

// Les classes
class Utilisateur {
  constructor(pseudo, ville) {
    //On met les valeurs de bases
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //Et on peut mettre autant de méthodes qu'on le souhaite
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}
const user5 = new Utilisateur("Fabien", "Lyon");
console.log(user5);
