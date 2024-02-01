const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro numero: ', (primOpe) => {
  rl.question('Escolha um sinal (+, -, x, ÷): ', (sinais) => {
    rl.question('Digite o segundo numero: ', (segOpe) => {
      let resultadoFinal;

      primOpe = parseFloat(primOpe);
      segOpe = parseFloat(segOpe);

      switch (sinais) {
        case "+":
          resultadoFinal = primOpe + segOpe;
          break;
        case "-":
          resultadoFinal = primOpe - segOpe;
          break;
        case "x":
          resultadoFinal = primOpe * segOpe;
          break;
        case "÷":
          resultadoFinal = primOpe / segOpe;
          break;
        default:
          console.log("Operador inválido.");
          rl.close();
          return;
      }

      console.log('Resultado: ', resultadoFinal);
      rl.close();
    });
  });
});
