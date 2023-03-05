//Rappel des types de données. typeof permet de connaître le type
let string = "Chaîne de caractères";
let number = 52;
let boolean = true;
let maVariable;
//console.log(typeof maVariable); //undefined
let autreVariable = null;
//console.log(typeof autreVariable); //object

//Les tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array);
//pour faire apparaître uniquement Toulouse dans la console :
console.log(array[1]); //les tableaux débutent à l'index 0
//pour avoir la troisième lettre de Toulouse, on fera ceci :
console.log(array[1][2]);

//Exemple d'un tableau plus complexe
let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Durand" }];
//Pou récupérer le 2
console.log(array2[3][1]);
//Pour afficher l'objet
console.log(array2[4]);
//Pour afficher juste Durand
console.log(array2[4].nom);

//Les objets
let objet = {
  pseudo: "Denis",
  age: 33,
  techno: ["JavaScript", "React", "Node"],
  admin: false,
};
//Pour afficher l'âge de l'utilisateur
console.log(objet.age);
//pour afficher les technos
console.log(objet.techno);
//pour afficher JavaScript
console.log(objet.techno[0]);
//Pour afficher le 1er a de JavaScript
console.log(objet.techno[0][1]);
//Pour ajouter un élément à l'objet
// objet.adresse = "22 rue du code";
// console.log(objet);
// //pour modifier la valeur de age
// objet.age = 42;
// console.log(objet);

//Quand on plusieurs objets, on les stocke dans un tableau.Ici, on a une petite BDD
let data = [
  {
    pseudo: "Denis",
    age: 33,
    techno: ["JavaScript", "React", "Node"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    techno: ["JavaScript", "React", "Node"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    techno: ["PhP", "React", "Node"],
    admin: true,
  },
];

//si on affiche l'objet de notre utilisateur Nicolas
console.log(data[2]);
//Si on ne veut afficher que son pseudo
console.log(data[2].pseudo);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Les structures de contrôle *******/
//Ici on veut savoir si le pseudo 1 est plus agé que le pseudo 2
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //valeur si faux
  console.log(data[0].pseudo + " est moins agé que " + data[1].pseudo);
}

//While. Peu utilisé
let w = 0;
//tant que w < 10, tu incrémentes w
while (w < 10) {
  w++;
  console.log("La valeur de w est " + w);
}

//Do while, très peu utilisé aussi
let d = 0;
//incrémente d, tant qu'il est inférieur à 5
do {
  d++;
  console.log(d);
} while (d < 5);

//les boucles for
//Ici dans le tableau data, chaque élément individuellement je l'appelle user (c'est une variable dont j'ai inventé le nom pour me retrouver). La boucle va faire tourner le tableau et à chaque tour on va lui donner une logique
for (const user of data) {
  //+=, c'est pour ajouter et non écraser. Si on veut afficher le pseudo de nos utilisateur, on fait juste user.pseudo. De même pour l'âge. User est le point d'entrée de chaque objet de notre tableau data
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//La boucle for la plus utilisée. On déclare la valeur de i. Puis on dit jusqu'où on boucle. Enfin, on incrémente i jusqu'à la fin tant que la condition n'est pas remplie
for (i = 0; i < data.length; i++) {
  //Pour afficher toutes les entrées du tableau, au lieu de mettre un chiffre en dur, on met i
  //console.log(i);
  console.log(data[i]);
  //Si on ne souhaite avec que les technos
  console.log(data[i].techno);
  //Si on ne veut que leur première techno
  console.log(data[i].techno[0]);
  //Pour afficher à l'écran les pseudos. Attention au +=
  document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

//Le switch
document.body.addEventListener("click", (e) => {
  //Pour savoir sur quelle balise on clique, on utilise e.target. Pour ne récupérer que l'id de la balise, on rajoute un .id (l'id étant un objet). Quand on clique, on ne récupère que l'id
  console.log(e.target.id);
  //Pour éviter des if... else en cascade, on va utiliser un switch
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Méthodes String *******/
let string2 = "JavaScript est un langage orienté objet";
//console.log(typeof string2) pour connaître le stype de la variable

//eval concatène des éléments
console.log(eval("1" + 2)); //donnera 12

//parseInt transforme une chaîne de caractères en number
console.log(eval(parseInt("1") + 2)); //donnera 3

//IsNan : savoir si nous n'avons pas un nombre
console.log(isNaN(string2)); //true car ce sont des lettres
console.log(isNaN(48)); //false car 48 est un nombre

//string.length connaître la longueur d'une chaîne
console.log(string2.length); //donne 39

console.log(string2[22]); //donnera a, le 23è catactère
//Afficher le dernier caractère
console.log(string2[string2.length - 1]); //donnera t

//indexOf permet de savoir d'une part si le mot (ou une lettre) existe dans la chaîne de caractères et à partir de quel index il commence
console.log(string2.indexOf("langage")); //donne 18
console.log(string2.indexOf("s")); //donne 4
console.log(string2.indexOf("x")); //donne -1 car la lettre n'existe pas

//la méthode slice() coupe des éléments
let newString = string2.slice(2);

console.log(newString); // retourne "vascript est un langage orienté objet"

//Ici on commence à couper de 1 à 5 et de 17 à la fin
let newString2 = string2.slice(5, 17);
console.log(newString2); //retourne "cript est un"

//La méthode split() permet de découper des chaînes de caractères et d'isoler le reste dans un tableau
console.log(string2.split("i")); //coupe string2 dès qu'il rencontre un i. Ici on aura un tableau avec 3 éléments ["Javasc", "pt est un langage or", "enté objet"]
console.log(string2.split(" ")); //idem dès qu'il voit un espace
console.log(string2.split("")); //coupe chaque caractère et les met dans un tableau

//toLowerCase() : tout mettre en minuscule
//toUpperCase() : tout mettre en majuscule
console.log(string2.toLowerCase());
console.log(string2.toUpperCase());

//replace(), remplace un mot par un autre
console.log(string2.replace("JavaScript", "PHP")); //retourne Php est un langage orienté objet

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Méthodes Number *******/
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

//toFixed() permet de garder les chiffres après la virgule
console.log(number2.toFixed(2)); //retourne 42.12

//parseInt() permet de changer une chaîne de caractères en number
console.log(parseInt("43")); //retourne le chiffre 43 et non une chaine de caractères "43"
console.log(parseInt(numberString)); //retourne le premier chiffre de la chaîne de caractères, ici 42 car le point n'est pas un chiffre

//parseFloat() gardera la virgule
console.log(parseFloat(numberString)); //retourne 42.12

//Méthode Math
console.log(Math.PI); //retourne 3.14956

//Math.round(), arrondir un chiffre au plus proche
console.log(Math.round(4.4)); //retourne 4
console.log(Math.round(4.5)); //retourne 5

//Math.floor() : arrondir à l'inférieur
console.log(Math.floor(7.9)); //retourne 7
//Math.ceil() : arrondir au plus haut
console.log(Math.ceil(8.1)); //retourne 9

//Math.pow : calcule la puissance
console.log(Math.pow(2, 7)); // retourne 2 puissance 7, ici 128

//Math.sqrt : calcule la racine carrée
console.log(Math.sqrt(16)); //retourne 4

//Math.random() retourne 1 chiffre entre 0 et 1
console.log(Math.random() * 50); // retournera un chiffre aléatoire entre 0 et 50
console.log(Math.floor(Math.random() * 50)); // retournera un chiffre entier entre 0 et 49

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Méthodes Array *******/

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

//concat() : permet de fusionner 2 tableaux
let newArray = array3.concat(array4);
console.log(newArray); // ['Javascript', 'PHP', 'Python', 'Ruby', 'Solidity']
//Cette méthode est la meilleure pour fusionner 2 tableaux, c'est le spread operator
let newArray1 = [...array3, ...array4];
console.log(newArray1); // ['Javascript', 'PHP', 'Python', 'Ruby', 'Solidity']

//join() permet de séparer chaque élément d'un tableau, pour y mettre une virgule ou un tiret par exemple. Très utilisé
console.log(array3.join("-")); //retourne Javascript-PHP-Python
console.log(array3.join(" ")); //retourne Javascript PHP Python

//slice() : découpe un élément d'un tableau
console.log(array3.slice(1)); // retourne ['PHP', 'Python']
console.log(array3.slice(2)); // retourne ['Python']
console.log(array3.slice(3)); // retourne []
console.log(newArray.slice(2, 5)); // coupe de 2 à 4 (index 0) et retourne donc ['Python', 'Ruby', 'Solidity']

//indexOf() : retourne l'index si un élément existe
console.log(array3.indexOf("Python")); // retourne 2 car Python est à l'index 2

//forEach(). Boucle qui donne tous les éléments d'un tableau. Le nom en paramètre est celui que je souhaite, j'ai mis languages car le tableau comprend des langages
array3.forEach((languages) => console.log(languages)); // retourne Javascript, puis PHP et enfin Python

//Vérifier si des éléments sont contenus dans un tableau
console.log(array3.every((language) => language === "PHP")); //retournera false, car chaque élément n'est pas PHP, on a Javascript et python
console.log(array3.some((language) => language === "PHP")); //retournera true, car PHP existe dans le tableau

//shift() enlève le premier élément d'un tableau et on peut stocker le résultat dans une nouvelle variable
// let shift = array3.shift();
// console.log(shift); //Javascript
// console.log(array3); //['PHP', 'Python']

// //pop() : retire le dernier élément
// console.log(array3.pop()); // retourne Python

//méthode splice(n° de l'index à partir duquel on commence à conserver les données, le nombre d'élément à conserver, élément à remplacer par)
const restArray = array3.splice(1, 1, "C++");
console.log(restArray); // conserve ["PHP"] car on commence à l'index 1 et on garde 1 élément
console.log(array3); // retourne ['Javascript', 'C++', 'Python']

const restArray2 = array3.splice(0, 2, ...array4);
console.log(restArray2);
console.log(array3);

//////////////// IMPORTANT ////////////
let arrayNumber = [4, 74, 28, 12, 1];
//additionner, soustraire, multiplier.... tous les éléments d'un tableau : reduce()
console.log(arrayNumber.reduce((x, y) => x + y)); // retourne 119
console.log(arrayNumber.reduce((x, y) => x * y)); //retourne 99456

//Ajouter des éléments à un tableau : push()
arrayNumber.push(17);
console.log(arrayNumber); //retourne [4, 74, 28, 12, 1, 17]

//FILTER, SORT, MAP
//Filter permet de filtrer un tableau pour en garder que certains éléments
//Sort permet de trier un tableau
//Map permet de lister les choses

//Ici on utilise filter qui va nous renvoyer que les nombres supérieurs à 10. Ici, j'ai mis number en paramètres car le tableau contient des nombres, mais j'aurai pu mettre n'importe quoi
//console.log(arrayNumber.filter((number) => number > 10)); // retourne [74, 28, 12, 17]

//Sort()
//console.log(arrayNumber.sort()); // retourne [1, 12, 17, 28, 4, 74]. En fait sort() range les chiffres par index : il a mis tous les 1 en premier (1, 12, 17) puis les 2 (28) puis les 4 (ici 4) etc.. Et il classe en fonction du 2è index etc...
//a et b sont des conventions, des noms qu'on donne. a ici est le plus petit, b le plus grand, on peut définir l'ordre de tri
//console.log(arrayNumber.sort((a, b) => b - a)); //ici ça classe donc du plus grand au plus petit donc [74, 28, 17, 12, 4, 1]
//console.log(arrayNumber.sort((a, b) => a - b)); //ici ça classe du plus petit au plus grand, donc [1, 4, 12, 17, 28, 74]

//On peut chaîner les méthodes :
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => b - a)); // retourne [74, 28, 17, 12]

//Map() énumère 1 par un tous les chiffres contenus dans le tableau. Comme ci-dessus, j'ai mis number car c'est un tableau avec des nombres
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Méthodes Objet *******/
//Ici on veut afficher à l'écran nos utilisateurs
document.body.innerHTML = data
  //On filtre pour n'afficher que les utilisateurs qui sont membres
  .filter((user) => user.admin === false)
  //Ici on veut que nous n'affichions que les utilisateurs dont le pseudo contienne Den
  .filter((user) => user.pseudo.includes("Den"))
  //On classe nos utilisateurs du plus âgé au plus jeune
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      //Ici on injecte nos utilisateurs dans une div class user-card qu'on a créé en CSS. Puis on met l'âge et le statut du modérateur (ici on va utiliser une ternaire pour savoir si user.admin est true)
      `<div class="user-card">
        <h2>${user.pseudo}</h2>
        <p>Age : ${user.age} ans</p>
        <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
      </div>`
  )
  .join("");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Les Dates *******/
//Les dates classiques
let date = new Date();
//console.log(date); //Créé la date au moment du console.log

//timestamp : retourne un chiffre en ms depuis le 1/1/1970.
let timestamp = Date.parse(date);
console.log(timestamp); //retourne 1633423752000

//isoString, format le plus répandu
let iso = date.toISOString(); //retourne 2021-10-05T08:49:12.133Z

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Le destructuring *******/
let moreData = {
  destVar: ["Element 1", "Element 2"],
};
//console.log(moreData.destVar); //retourne Element 1, Element 2
//Ici on va destructurer le tableau de l'objet pour le manipuler plus facilement. Ces un truc de fénéant qui existe parfois dans le code, cela évite d'écirire ceci :
//const destVar = moreData.destVar;
const { destVar } = moreData;
console.log(destVar); //retourne Element 1, Element 2

let array5 = [70, 80, 90];
// console.log(array5[0]); //70
// console.log(array5[1]); //80
// console.log(array5[2]); //90
//Ecrire tous cela n'est pas pratique, on aimerait que 70 soit le nom d'une variable, 80 le nom d'une variable et 90 le nom d'une variable. On va isoler des éléments de tableau dans une variable
let [x, y, z] = array5; //ici les nom de variables sont aléatoires
console.log(x, y, z); //retourne 70 80 90

console.log(iso);
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Les Datasets *******/
//Données que l'on peut mettre dans des balises
//const h3js = document.getElementById("javascript");
//console.log(h3js);
//console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
//console.log(h3);
//h3.forEach((langs) => console.log(langs.dataset.lang));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/******* Les Regex *******/
let mail = "mrtn.piat@gmail.com";
//search : recherche un élément dans une chaîne de caractères
console.log(mail.search(/mrtn/)); //comme mrtn existe dans la chaîne qu'on teste, search renvoie 0, si le mot n'existe pas ce sera -1

//replace remplace un élément par un autre
console.log(mail.replace(/mrtn/, "martin")); // retourne martin.piat@gmail.com

//match de trouver des occurences dans la chaîne de caractères
console.log(mail.match(/PIat/)); // retourne null car la regex ne marche pas à cause des deux premières lettres majuscules
console.log(mail.match(/PIat/i)); // renvoie true. Le i permet d'éviter les problèmes de casse
console.log(mail.match(/[zu]/)); // renvoie null car il n'y a pas de z ni de u dans la chaine
console.log(mail.match(/[zup]/)); // renvoie true car le p est trouvé
console.log(mail.match(/[123]/)); // retourne null
//retourne toutes les lettres
console.log(mail.match(/[a-z]/));

//contrôler un mail
console.log(mail.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)); //renvoie true

//https://practicalprogramming.fr/node-js-api
