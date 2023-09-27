// Cadena dada
let myString = 'Javascript+es+super+cool';

/*Convertir la cadena en un array, eliminando los caracteres '+' en el proceso*/
let myArray = myString.split('+');
console.log("Mensaje: "+ myArray);

// Almacenar la longitud del array
let arrayLongitud = myArray.length;
console.log("Longitud de Mensaje: " + arrayLongitud);

// Almacenar el último elemento del array
let lasitem = myArray[myArray.length - 1];
console.log("ultimo elemento:" + lasitem);

/*Crear un nuevo array con los elementos 
en orden inverso*/
let myInversearray = myArray.slice().reverse();
console.log("Mensaje Invertido:" + myInversearray);

// Agregar un elemento al final de myInverseArray
myInversearray.push("Si!");
console.log("Agregar elemento-Mensaje: " + myInversearray);

// Crear un array con los elementos en el orden especificado
myArray = ["Si!", "Javascript", "es", "super", "cool"];
console.log("Mensaje Ordenado: " + myArray);


