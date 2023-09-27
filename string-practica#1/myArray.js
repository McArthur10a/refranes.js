// Crear un array con tres elementos o más.
let myarray = ["Baleadas", "Pollo con tajadas", "Pupusas", "Sopa de Pollos"];

// Modificar los dos primeros elementos del array
myarray[0] = "Ramen";
myarray[1] = "Sopa de caracol";
console.log(myarray);

// Agregar un nuevo elemento al comienzo del array
myarray.unshift("Tacos de Birria");
console.log(myarray);

/*Crear una variable de tipo string con los elementos del array 
separados por guiones*/
let mystring = myarray.join("-");
console.log(mystring);

/*En este código, "Hola, mundo" es una cadena(string), 42 es un número(number), 
true es un valor booleano(boolean), null es un valor nulo(null),
undefined es un valor indefinido(undefined) y Symbol("miSimbolo") es un símbolo(symbol).*/

let myArray = ["Hola, Desarrolladores", 42, true, null, undefined, Symbol("miSimbolo")];
console.log(myArray);