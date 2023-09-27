//👉Declaración de la variable miRefrán
let refran = "Mas vale tarde que nunca";
console.log("Mi refran:                         " + refran);

/*👉Declaración de la variable longitudRefran
y asignación de la longitud de miRefrán*/
let longitudRefran = refran.length;
console.log("Longitud de Refran:                " + longitudRefran);

//👉Asignación de la novena letra del refrán a la variable novenaLetra
let novenaLetra = refran.charAt(9);
console.log("Novena letra:                      " + novenaLetra);

//👉Asignación de la última letra del refrán a la variable ultimaLetra
let ultimaLetra = refran.charAt(longitudRefran - 1);
console.log("Ultima letra:                      " + ultimaLetra);

/*👉Búsqueda del índice de la cadena "que" en el refrán y asignación a la 
variable índicePalabra*/
let indicePalabra = refran.indexOf("que");
console.log("índicePalabra (que):               " + indicePalabra);

/*👉Si el índice es menor que cero, busca cualquier otra preposición 
hasta que sea mayor a 0*/
if (indicePalabra < 0)
{
    indicePalabra = refran.indexOf("de");
}
    console.log("Indice de Palabra (de):            " + indicePalabra);

//👉 Reemplazo de la preposiciónencontrada por la cadena "xxx"
refran = refran.replace("que", "xxx");
console.log("refran (reemplazo):                " + refran);

//volver la cadena
refran = refran.replace("xxx", "que");
console.log("volver palabra ('que')-refran:     " + refran);

// Conversión a mayúsculas todos los caracteres del refrán
refran = refran.toUpperCase();
console.log("Refran en Mayuscula:               " + refran);
