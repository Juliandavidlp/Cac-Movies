//Imprimir en la consola:
console.log('Buen día mundo desde la consola con una archivo externo!');

// Comentario de una línea.
/* 
    Comentario de varias líneas:
*/

//Declaración de variables:
var movieOne; //Una variable global, legacy

//Tipos de datos, declaración y definición:
let movie2= 'El padrino';
let rating= 8; //number - integer
let rating2=9.7; //number - float
let rating3= "6.5";
let isNew= false; // boolean o lógico
let movie3=null // objet, para asignarle un string o un objeto, por ejemplo

//Una propiedad y un valor, para definir un objeto
let movie4={ 
    name:'El padrino 3'
}

console.log(typeof(rating3));

//Para declarar constantes, en mayúsculas.
const YEAR = 2024;

// Operaciones aritméticas
let average= (rating+rating2 + parseInt(rating3)) / 2;

// Operaciones de concatenación
console.log('El promedio es:'+ average) //Ojo, porque si no cambio el tipo de dato concatena números con texto



// Manipulación del DOM: Document Objet Model

//Capturo un elemento desde Javascript
let parrafo= document.querySelector("#parrafo");

console.log(parrafo);

parrafo.innerHTML= 'Hola, lo agrego desde JS.';

