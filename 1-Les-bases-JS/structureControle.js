//Exemple 1
let x = 5;
let y = 6;

//<, >, <=, >=
if (x < y) {
  console.log("x est inférieur à y");
} else {
  console.log("x est supérieur à y");
}

//Exemple 2
let a = 5;
let b = 6;

if (a >= b) {
  console.log("a est supérieur ou égal à b");
} else {
  console.log("a est inférieur ou égal à b");
}

//Exemple 3. Ici on teste la valeur
let c = 25;

//Ici on teste if c est true
if (c) {
  console.log("c existe");
}

//Ici, on teste if c n'existe pas, donc c est false, la console ne renverra rien car c esiste, donc c est true
if (!c) {
  console.log("c existe");
}

//Exemple 4
let d = 5;
let e = 5;

//Attention à ne pas confondre == (même valeur) et === (même valeur ET même type)
if (d === e) {
  console.log("True"); //ici true
} else {
  console.log("False");
}

// le ! c'est l'inverse
if (d !== e) {
  console.log("True");
} else {
  console.log("False"); //ici false
}

//Exemple 5
// Le "ou" || : une des deux conditions doit être remplie
let f = 4;
let g = "5";

if (f === g || f > 3) {
  console.log("True"); //ici true
} else {
  console.log("False");
}

//Le "et" && : les deux conditions doivent être remplies
if (f === g && f > 3) {
  console.log("True");
} else {
  console.log("False"); //false ici
}

//Exemple 6 : if, else if, else
let h = 5;
let i = "5";

if (h === i) {
  console.log("True");
} else if (h == i) {
  console.log("h et i égaux en valeur"); //C'est ce qui est renvoyé
} else {
  console.log("h et i ne sont pas du tout égaux");
}

let j = 6;
let k = "5";

if (j === k) {
  console.log("True");
} else if (j == k) {
  console.log("h et i égaux en valeur");
} else {
  console.log(j + " et " + k + " ne sont pas du tout égaux");
  console.log(`${j} et ${k} ne sont pas du tout égaux`);
}

//Exemple 7 : les ternaires (les if else sur une ligne)
let l = 5;
let m = "5";

//Si l a la même valeur que m alors (?) tu affiche "True", sinon (:) tu affiches "False"
l == m ? console.log("True") : console.log("False");
