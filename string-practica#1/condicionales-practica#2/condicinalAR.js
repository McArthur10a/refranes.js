const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Introduce el primer número: ', num1 => {
  readline.question('Introduce el segundo número: ', num2 => {
    readline.question('Introduce la operación (suma, resta, multiplicación, división): ', operacion => {
      let resultado;
      num1 = Number(num1);
      num2 = Number(num2);

      if (operacion == 'suma') {
        resultado = num1 + num2;
      } else if (operacion == 'resta') {
        resultado = num1 - num2;
      } else if (operacion == 'multiplicación') {
        resultado = num1 * num2;
      } else if (operacion == 'división') {
        resultado = num1 / num2;
      } else {
        console.log('Operación no reconocida');
      }

      if (resultado !== undefined) {
        console.log('El resultado es: ' + resultado);
      }

      readline.close();
    });
  });
});
