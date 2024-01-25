//calcular média das notas com for

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0; //var para guardar a soma das notas

//i < notas.lenght = enquanto i for menor que o tam do array

for (i = 0; i < notas.length; i++){
    somaDasNotas  += notas[i];
    //o js a cada laço vai acessar a var somaDasNotas
    //e incrementar nela 
}

const media = somaDasNotas / notas.length; //fazendo o calculo da media

console.log(`A média das notas é ${media}`);
