alert('hola David')

// let interger = 10;
console.log(typeof 10);
// let float = 1.5;
console.log(typeof 1.5);
// let string = "Bruh";
console.log(typeof "salade");
// let boolean = false;
console.log(typeof false);

// console.log(typeof "number", "interger", "string", "boolean")

const phrase = "Victor change de nom tout les jours.";

console.log(phrase.toUpperCase());

let txt = "mon texte minus";

console.log(txt);

let txtMaj = txt.toUpperCase();

console.log(txtMaj);

// avec une function lettre en minuscule

const txt2 = "JE SUIS GRAND";

console.log(txt2);

let txtMin = txt2.toLowerCase();
console.log(txtMin)

// avec une function enlever les espaces 

const txt3 = "J'ai de l'espace";

console.log(txt3);

const allSpacesRemoved = txt3.replaceAll (' ', '');

console.log(allSpacesRemoved);

// une function compter le nombre de charactères d'une string

const txt5 = "J'ai envie d'un kebab salade, tomate, oignon, sauce blanche et algérienne."

console.log(txt5)

console.log(`${txt5} ${txt5.length}`);


// avec une function vérifier si le mot "nous" est contenu dans la string

const txt4 = "il nous a fait à manger";

const word = "nous";

console.log(
  `Le mot "${word}" ${
    txt4.includes(word) ? "est" : "n'est pas"
  } dans la phrase`,
); 


