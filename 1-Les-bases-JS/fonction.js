/*Une fonction est une boîte qui porte un nom mais qui va exécuter toutes sortes d'instructions.
C'est un algorithme qui porte un nom*/

//Ici on déclare la fonction
function faireQuelqueChose() {
  //On y met des instruction
  console.log("Je fais un truc");
  console.log("Super");
}

//Puis, on doit l'appeler pour avoir le contenu de la fonction. Si on ne l'appelle pas, elle ne s'exécutera pas
faireQuelqueChose();

//Les fonctions flêchées
//Ici on déclare une fonction qu'on stocke dans une variable const. Ici on n'écrit plus le mot function et on met un paramètre à la fonction (ici tache), mais le paramètre est facultatif
const faireUneTache = (tache) => {
  console.log("Je fais " + tache);
};
//Ici, on appelle la constante et on lui passe "faire les courses" en paramètre de "tache". Ici le paramètre tache est une valeur dynamique qui va évoluer à chaque fois qu'on rappelera (c'est la porte d'entrée de notre fonction)
faireUneTache("les courses");
faireUneTache("le ménage");

//Le return permet de retourner une valeur, mais le return arrête aussi une instruction. Tout se qui se trouve au-dessous ne sera pas exécuté.
function calc(x, y) {
  return x + y;
}

//Les fonctions qui s'éxucute toutes seules au chargement de la page. On n'a pas besoin de l'appeler. Il faut juste la contenir entre parenthèses et ajouter ensuite les parenthèses des paramètres. C'est une fonction anonyme
(function () {
  console.log("Je me joue toute seule");
})();

//ou
(() => {
  console.log("Je me joue aussi toute seule");
})();

//La portée des variables. Ici on déclare une variable dans la fonction et elle ne sera accessible que dans la fonction
function addTo() {
  let a = 4;
  console.log(a);
  return a + 2;
}
addTo(); //retournera la valeur de a
//console.log(a); reournera une erreur car la variable a n'est pas définie à l'extérieur de la fonction
