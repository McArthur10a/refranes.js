//Pedimos los dos numero y la operación al Usuario.
var n1 = NaN(prompt("Introduce el primer Número: "));
var n2 = NaN(prompt("Introduce el Segundo Número: "));
var operacion = prompt("Introduce La operacion (suma, resta, multiplicación, división): ");

//Realizamos la operacion correspondiente.
let resultado;
if (operacion == "suma") {
    resultado = n1 + n2;
} else if (operacion == "resta") {
    resultado = n1 - n2;
} else if (operacion == "multiplicación") {
    resultado = n1 * n2;
} else if (operacion == "división") {
    resultado = n1 / n2;
}
alert("Operacion es reconocida: ");

//mostrando
if (resultado !== undefined) {
    console.log("El resultado es: " + resultado);
}

/*Este código solicita al usuario dos números y una 
operación a realizar.Luego realiza la operación 
correspondiente y muestra el resultado en la consola.
Si la operación introducida no es reconocida, se muestra 
un mensaje de error.Recuerda que este 
código debe ejecutarse en un entorno que soporte 
JavaScript y tenga acceso a las 
funciones prompt(), alert() y
console.log().Por ejemplo, puedes probarlo en la 
consola de tu navegador.*/

