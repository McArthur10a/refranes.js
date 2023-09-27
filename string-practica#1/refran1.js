// Declaración de la variable miRefrán
let miRefrán = "Más vale tarde que nunca";
console.log("miRefrán: " + miRefrán);

// Declaración de la variable longitudRefran y asignación de la longitud de miRefrán
let longitudRefran = miRefrán.length;
console.log("longitudRefran: " + longitudRefran);

// Asignación de la novena letra del refrán a la variable novenaLetra
let novenaLetra = miRefrán.charAt(8);
console.log("novenaLetra: " + novenaLetra);

// Asignación de la última letra del refrán a la variable ultimaLetra
let ultimaLetra = miRefrán.charAt(longitudRefran - 1);
console.log("ultimaLetra: " + ultimaLetra);

// Búsqueda del índice de la cadena "que" en el refrán y asignación a la variable índicePalabra
let índicePalabra = miRefrán.indexOf("que");
console.log("índicePalabra (que): " + índicePalabra);

// Si el índice es menor que cero, busca cualquier otra preposición hasta que sea mayor a 0
if (índicePalabra < 0) {
    índicePalabra = miRefrán.indexOf("de");
    console.log("índicePalabra (de): " + índicePalabra);
}

// Reemplazo de la preposición encontrada por la cadena "xxx"
miRefrán = miRefrán.replace("que", "xxx");
console.log("miRefrán (reemplazo): " + miRefrán);

// Conversión a mayúsculas todos los caracteres del refrán
miRefrán = miRefrán.toUpperCase();
console.log("miRefrán (mayúsculas): " + miRefrán);
