//Les sélecteurs qui permettent de sélectionner des éléments du DOM
//Ici, on demande à JS de sélectionner la balise h4 grâce à la méthode querySelector(). En général, on préfère sélectionner les éléments avec des classes ou des id. Puis on change le style du h4 (avec style) et on met une couleur de fond en jaune. On aurait pu mettre n'importe quel attribut CSS (border, margin...).JS peut absolument tout faire avec une aisance incroyable.
//ex : document.querySelector("h4").style.background = "yellow";

//L'exemple précédent fonctionne mais n'est pas pratique, du coup, on va cloisonner notre élément dans une variable. C'est la meilleure pratique : on va chercher la balise que l'on souhaite cibler et on stocke cette valeur dans une constante. Puis on utilise la constante. On fera cela tout le temps (ce qui nous évitera à chaque fois de retaper document.querySlector("h4")).
// const baliseHTML = document.querySelector("h4");
// // console.log(baliseHTML);
// // ex avec le code ci-dessus:
// baliseHTML.style.background = "yellow";
// baliseHTML.style.borderRadius = "150px"; // Attention au camelCase

///////////////////////////////////////////////////////
/******************* Click Event *****************/
//Ici, on cible la classe "click-event" avec la methode querySelector(), que l'on stocke ensuite dans la constante questionContainer
const questionContainer = document.querySelector(".click-event");
//console.log(questionContainer);
//Puis on déclare toutes les variables qui nous serons utiles dans le document. C'est une bonne pratique en JS
const btn1 = document.querySelector("#btn-1");
//Cette manière de rechercher un id est plus efficiente avec getElementById
const btn2 = document.getElementById("btn-2");
//console.log(btn1, btn2);
const response = document.querySelector("p");
//console.log(response);

//Puis on utilise la constante questionContainer et on lui ajoute un évènement avec la méthode AddEventListener (la plus commune et la plus moderne). Cette méthode prend 2 paramètres, le nom de l'évènement et une fonction fléchée qui exécute un code. Ici, quand on cliquera sur ce qui correspond à la class click-event, la couleur de fond deviendra rouge avec une bordure par exemple
questionContainer.addEventListener("click", () => {
  //console.log("Click !!!!!");
  //   questionContainer.style.background = "red";
  //   questionContainer.style.border = "3px solid teal";
  //Cette première technique n'étant pas pratique (car trop longue si on a 5 style à ajouter), on va injecter une classe que l'on aura créé en CSS avec toute une variété de styles (background, border-radius, border etc...). On utilise pour cela classList et la méthode add et entre les parenthèses le nom de la classe créée en CSS et qui contiendra tout le style (attention, on ne met pas de point quand on appelera cette classe en JS)
  // ex : questionContainer.classList.add("question-clicked");
  //On utilisera plutôt la méthode toggle qui ajoutera la classe si elle n'existe pas et la supprimera si elle existe, ce qui n'est pas possible avec la méthode précédente, on aurait dû réécrire une ligne avec un remove. Cela se fait bcp pour des boutons
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  //console.log("Clickkkk");
  //Ici, quand on va cliquer sur le btn1, la réponse contenue dans la balise p va apparaître (ici la constante response). On va faire comme ci-dessus : créer une classe "show-response" en CSS qu'on va injecter ici grâce à classList et la méthode add
  response.classList.add("show-response");
  //Et comme la réponse est bonne, elle s'affichera en vert
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  //console.log("Clickkkk");
  //Ici, quand on va cliquer sur le btn1, la réponse contenue dans la balise p va apparaître. On va faire comme ci-dessus : créer une classe "show-response" en CSS qu'on va injecter ici grâce à classList et la méthode add
  response.classList.add("show-response");
  //Et comme la réponse est mauvaise, elle s'affichera en rouge
  response.style.background = "red";
});

///////////////////////////////////////////////////////////////////
/************************** Mouse Events *************************/
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);

//Quand on créé un évènement sur la souris, on met cela dans l'objet window (qui représente la fenêtre). Ici, par exemple on peut ajouter un évènement : à chaque fois que la souris bouge, on fait quelque chose grace à l'évènement mousemove
window.addEventListener("mousemove", (e) => {
  //Ici on log pour voir si tout fonctionne. Ici chaque mouvement de la souris déclenche un console.log
  //console.log("MOUSEMOVE !!!!!!!");
  //A chaque fois d'un évènement est créé, on peut le récupérer grâce au paramètre e, ce qui rend le JS si puissant. Ce paramètre e renferme toute une série de data et les récupère toutes à chaque mouvement de la souris (date, élément survolé, endroit exact dans la page...)
  //console.log(e);
  //e est un objet, donc on peut récupérer une data bien particulière en mettant un . comme dans l'exemple ci-dessous
  //console.log(e.target);

  //Ici, on voudrait qu'un rond suive les déplacement de la souris dans la page. A chaque fois que l'évènement mousemove se produit sur le DOM, j'aimerais que tu m'injecte du style (pageX et pageY étant l'emplacement exact de la souris dans la page). Il est obligatoire de mettre une position en px, sinon ça ne marcherait pas
  mousemove.style.left = e.pageX + "px"; //Pour l'axe des x
  mousemove.style.top = e.pageY + "px"; //pour l'axe des y
});

//L'évènement mousedown se déclenchera au clic de la souris
window.addEventListener("mousedown", () => {
  //console.log("test");
  //Ici, au clic de la souris, le rond rose va changer de taille. Par contre, on a déjà utilisé cette propriété en CSS, du coup il faut lui rappeler que cette propriété existe en CSS et qu'il faut la conserver. Et comme l'élément est 2 fois plus grand, il faut diviser par 2 le translate
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

//L'évènement mouseup se déclenchera quand on arrête de cliquer sur la souris
window.addEventListener("mouseup", () => {
  //console.log("test");
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

//Ici, on déclenche un évènement quand la souris entre et survole une zone
//Ici, on ajoute un évènement à notre conteneur
questionContainer.addEventListener("mouseenter", () => {
  //Ici, quand la souris va survoler le container, on va changer la couleur de fond
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

//Ici, on déclenche un évènement quand la souris sort d'une zone
//Ici, on ajoute un évènement à notre conteneur
questionContainer.addEventListener("mouseout", () => {
  //Ici, quand la souris va sortir du container, on va remettre un autre style par exemple, ce qui rend cette fonction bcp plus puissante qu'un :hover car avec ce dernier on revient au style de base alors qu'avec mouseout, on créé un 3è style
  //console.log("mouseout !!!!");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

///////////////////////////////////////////////////////////////////
/************************** keypress event *************************/

//On récupère le container qu'on stocke dans keypressContainer
const keypressContainer = document.querySelector(".keypress");
//console.log(keypressContainer);
//On récupère le span grâce à son id qu'on stocke dans la variable key. Ici la touche qui est appuyée
const key = document.getElementById("key");
//console.log(key);

//Insérer de la musique en JS. On créé une fonction que l'on stocke dans une constante ring
const ring = () => {
  //Ici, on créé une constante audio qui va contenir un objet de JS (appelé Audio)
  const audio = new Audio();
  //On va chercher le morceau
  audio.src = "./Archive.mp3";
  //On lançe le morceau grâce àa méthode play()
  audio.play();
};

//Quand on déclenche un évènement sur une touche du clavier, l'évènement se produit dans document. On y ajoute un évènement qui s'appelle keypress
document.addEventListener("keypress", (e) => {
  //console.log("Super !!");
  //Ici, on va récupérer des données du clavier grâce au paramètre e
  //console.log(e);
  //e est un objet, donc on peut récupérer une data bien particulière en mettant un . comme dans l'exemple ci-dessous
  //console.log(e.key); //qui récupère la lettre sur laquelle on a tapée
  //Maintenant on va insérer la touche sur laquelle on appuie. On va y injecter du texte dans notre span portant l'id key
  //key.textContent = "voici du texte";
  //Maintenant on va injecter la touche sur laquelle on appuie grâce à e qui est un objet et sa propriété key
  key.textContent = e.key;

  //On peut étendre le code, comme mettre des conditions par exemple. Exemple, si on appuie sur la touche j, la couleur de fond du conteneur sera rose, si on appuie sur h, ce sera du bleu, le reste ce sera du rouge
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "blue";
  } else {
    keypressContainer.style.background = "red";
  }
  //Quand on appuie sur une touche, on lance le morceau musical avec la fonction ring()
  ring();
});

///////////////////////////////////////////////////////////////////
/************************** scroll event *************************/
//Ici, on a créé une petite barre de navigation que nous avons placée en haut de la page (grâce à position:fixed) et qui n'apparaît pas (grâce à top:-50px). L'objectif est de faire apparaître cette barre de navigation quand on scrollera dans la page

//On sélectionne la barre de nav que l'on stocke dans une variable nav
const nav = document.querySelector("nav");
//console.log(nav);

//On créé un évènement scroll. Ici on est sur la fenêtre et non le document
window.addEventListener("scroll", () => {
  //console.log("Test");
  //Ici, on récupère la valeur en pixel de ce qui a été scrollé depuis le début gra^ce à l'objet window et la propriété scrollY. Ici on n'a pas besoin de e
  console.log(window.scrollY);

  //Si la valeur en pixel est supérieure à 120px, alors tu révèle la navigation en haut de la page (avec top=0). Sinon, on la supprime avec top =-50px
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

///////////////////////////////////////////////////////////////////
/************************** Form event *************************/
//Les évènements load seront très importants pour les formulaires et les inputs
//On selectionne notre input de type text qu'on stocke dans une variable inputName
const inputName = document.querySelector('input[type="text"]');
//console.log(inputName);
//on selectionne le select et on le stocke dans une variable select
const select = document.querySelector("select");
//console.log(select);
//On selectionne le formulaire
const form = document.querySelector("form");
//console.log(form);
//Ici, on va stocker dans un let, ce que nous allons récupérer le pseudo tapé dans l'input
let pseudo = "";
//Ici, on va stocker dans un let, ce que nous allons récupérer le langage préféré de l'utilisateur choisi dans le select
let language = "";

//On accole un évènement input à inputName
inputName.addEventListener("input", (e) => {
  //console.log("yes !!!");
  //Grace au paramètre e, on récupère toutes les data, ici ce que l'utilisateur a tapé dans l'input et on stocke ça dans la variable pseudo
  //console.log(e.target.value);
  pseudo = e.target.value;
  //console.log(pseudo);
});

//Ici, on va se stocker le langage favori de l'utilisateur avec un évènement input
select.addEventListener("input", (e) => {
  //console.log(e.target.value);
  language = e.target.value;
});

//Ici, on va faire en sorte de changer le comportement par défaut du type submit, qui change automatiquement de page quand on clique dessus. Pour cela on va utiliser un évènement submit
form.addEventListener("submit", (e) => {
  //console.log("yes !!");
  //Le e.preventDefault permet au formulaire de ne plus disparaître. En fait, e.preventDefault annule le comportement par défaut de la page (qui ne change pas quand on appuie sur le bouton submit)
  e.preventDefault();
  //console.log("yes");
  //On va faire en sorte que l'on ne puisse pas valider le formulaire si les CGV ne sont pas cochées. Dans le formulaire, on a un id cgv qu'on récupère ici et on lui met checked
  //console.log(cgv.checked); //renverra true
  if (cgv.checked) {
    //On affiche le contenu des variables dans un div qu'on récupère d'abord. On affiche du texte dans des balises grâce à innerHTML (textContent n'affiche que du texte). Puis on concatène les résultats grâce aux ` et au ${}
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

///////////////////////////////////////////////////////////////////
/************************** Load event *************************/
//Cet évènement se déclenche quand toute la page a été chargé. On déclenchera cet événement quand on aura des fonctionnalités très lourdes et qu'on voudra qu'elles se déclenchent à la fin.
window.addEventListener("load", () => {
  //console.log("Document chargé");
});

///////////////////////////////////////////////////////////////////
/************************** for each *************************/
//Ici on a 3 boîtes qui ont une classe "box". on utilise le getElementsByClassName ici car on a 3 class box, si on en avait qu'une ça ne fonctionnerait pas. Mais comme il y a souvent des pbs avec cette méthode, on utilisera plutôt un querySelectorAll
//const boxes = document.getElementsByClassName("box");
//console.log(boxes);
const boxes = document.querySelectorAll(".box");
//console.log(boxes);

//Au lieu de coder 3 eventListener pour chacune des box, on va le faire une seule fois en utilisant un forEach. Dans le paramètre, on met le nom qu'on veut appeler chacune de ces boxes, ici box
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    //console.log(e.target);
    //Ici on cible l'élément cliqué avec e.target et on change son style par exemple
    e.target.style.transform = "scale(0.7)";
  });
});

//////////////////////////////////////////////////////////////////
/************************** addEventListener vs onclick *************************/
//Technique identique à l'une des évènement click vu ci-dessus, fauf qu'on utilise directement la méthode onclick et non un addEventListener. Cette manière de faire est acceptée mais non recommandée
document.body.onclick = () => {
  //console.log("Click");
};

//Cette méthode n'est pas recommandée à cause de celui. Si on veut attacher un deuxième évènement au body avec onclick, le premier évènement sera écrasé
document.body.onclick = () => {
  //console.log("Je reclique");
};

//Mais le onclick peut être directement utiliser dans la page HTML, ce qui peut s'avérer pratique. Cette pratique n'est absolument pas recommandée.

//Avec un addEventListener, les deux évènements click s'exécuteront, ce qui n'était pas le cas avec onclick. De plus on a 2 éléments Usecapture et Bubbling
//Le bubbling est pour déclencher l'évènement à la fin (de base l'eventlistener est paramétré en mode bubbling). De base cet argument est false (donc on n'est même pas obligé de l'écrire)
document.body.addEventListener(
  "click",
  () => {
    console.log("clique 1");
  },
  false
);

//Si on veut mettre en mode Usecapture, le paramètre sera true
document.body.addEventListener(
  "click",
  () => {
    console.log("clique 2");
  },
  true
);

//Ici, c'est le click 2 qui sera exécuté avant le clic 1 car on a mis en mode Usecapture

//////////////////////////////////////////////////////////////////
/************************** La méthode stopPropagation *************************/
//Cette méthode permet d'arrêter la propagation d'un évènement
questionContainer.addEventListener("click", (e) => {
  alert("test");
  //Ici la boîte d'alerte se déclenche mais les autres évènements se propagent. Pour éviter ce comportement, on récupère l'évènement e et on lui accole un stopPropaation
  e.stopPropagation();
  //Ici le clic 2 et la boîte d'alerte se déclencheront, mais pas le click 1
});

//Il faut savoir qu'il existe une méthode removeEventListener qui permet de retirer un évènement. Elle existe mais elle est très peu utilisée

//////////////////////////////////////////////////////////////////
/************************** Le BOM *************************/
//Le Bom contient l'objet window et bcp de données, comme innerHeight qui permet de connaître la hauteur de la fenêtre
//console.log(window.innerHeight);

//Window permet de faire bcp de chose, une pop-up par exemple (ouvrir une nouvelle page google dans le cas présent)
//window.open("http://google.com", "cours js", "height=600, width=800");
//window.close() permet de fermer la fenêtre. Utile en fin de formulaire, quand un utilisateur a validé un bouton, ou un formulaire

//Les évènements adossés à window

//Le confirm. Ici, on va reprendre le btn2 et lui ajouter deuxième évènement click (le premier ci-dessus était pour montrer la réponse en rouge)
btn2.addEventListener("click", () => {
  //Ici, on va ajouter un confirm car la réponse est fausse. Cette méthode est pratique car il y a un bouton annuler dans la boîte de dialogue qui n'apparaît pas avec un simple alert()
  confirm("Voulez-vous vraiment vous tromper !");
});

//Le prompt. Ici, on va reprendre le btn1 et lui ajouter deuxième évènement click (le premier ci-dessus était pour montrer la réponse en vert).

btn1.addEventListener("click", () => {
  //Ici une boîte de dialogue s'ouvre et celle-ci attend de nous une réponse
  //Pour stocker la réponse on va créer une variable answer qui stockera la réponse
  let answer = prompt("Entrez votre nom !");
  //Pour afficher la réponse dans le container, on utilise un innerHTML. le +=, c'est pour éviter d'écraser tout le texte
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//setTimeout : permet de différer l'éxécution d'un évènement
setTimeout(() => {
  //logique a exécuter. Ici un border radius qui doit s'exécuter 2s après le lancement de la page
  questionContainer.style.borderRadius = "300px";
}, 2000 /*"temps en millisecondes avant de déclencher"*/);

// //setInterval. Le problème de setInterval, c'est que cela ne s'arrête jamais, c'est pour cela qu'on va le déclarer dans une variable
// let interval = setInterval(() => {
//   //Code a exécuter. Ici, dans le body, on va injecter des balises html. le += c'est pour éviter d'écraser. On va lui ajouter des div avec la class box
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boîte</h2></div>";
// }, 1000 /*Un temps, par exemple, toutes les 1s*/);

// //pour arrêter le setInterval on va créer un évènement. Ici quand on clique dans la page, n'importe où, le setInterval va s'arrêter avec clearInterval(nom de la variable contenant le setInterval)
// document.body.addEventListener("click", (e) => {
//   //e.target renvoie une balise dans la console. Pour supprimer la balise de la page, on fera e.target.remove()
//   //e.target.remove();
//   clearInterval(interval);
// });

//L'objet location
// console.log(location.href); //permet de renvoyer le lien de l'url dans laquelle l'utilisateur se trouve
// console.log(location.host); //permet de savoir le nom de l'Host
// console.log(location.pathname); //le nom de la page
// console.log(location.search); //utile en back pour savoir le contenu de l'utilisateur
//location.replace("http://wikipedia.org"); //permet de rediriger un utilisateur vers un autre lien, une autre page

//pour renvoyer un utilisateur vers une autre page, on peut faire ceci
// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

//l'objet Navigator permet de géocaliser un utilisateur ou un site

//l'objet History permet de connaître l'historique de navigation
console.log(window.history);
//window.history.back();//permet de revenir une page en arrière
//history.go(-2); //permet de retourner n pages en arrière, ici 2

//////////////////////////////////////////////////////////////////
/************************** setProperty *************************/
//Set property permet de modifier des styles CSS, essentiellement sur les pseudos-class CSS. Pour cela en CSS, il nous faut créer des variables (--x et --y) dans le fichier CSS.
//Ici, on veut que l'élément after suivent la souris. On utilise donc un évènement mousemouve et on récupère l'objet de l'évènement avec le paramètre e
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
