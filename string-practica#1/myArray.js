// Crear un array con tres elementos o más.
var myarray = ["Baleadas", "Pollo con tajadas", "Pupusas", "Sopa de Pollos"];

// Modificar los dos primeros elementos del array
myarray[0] = "Ramen";
myarray[1] = "Sopa de caracol";
console.log(myarray);

// Agregar un nuevo elemento al comienzo del array
myarray.unshift("Tacos de Birria");
console.log(myarray);

/*Crear una variable de tipo string con los elementos del array 
separados por guiones*/
var mystring = myarray.join("-");
console.log(mystring);