/*const meuArray = [];
meuArray.push(2);
meuArray.push(4);
meuArray.push(6);

meuArray[0] = 4;

console.log(meuArray);*/

/* Crie uma função que receba uma array e 
imprima no console o número do índice e o elemento.

const numChamada = [1,2,3,4,5,6,7,8,9];

for (i=0; i < numChamada.length; i++){
    console.log(i,numChamada[i]);
}*/

/*Crie uma função que receba uma array de números inteiros 
e retorne a soma dos elementos. 
const numChamada = [1,2,3,4,5,6,7,8,9];

let soma = 0;

for (i = 0; i < numChamada.length; i++){
    soma +=numChamada[i];
}
let media = soma / numChamada.length;
console.log(media);*/

/*Crie um programa que utilize um laço for para percorrer 
uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
e exibir no console apenas os números pares contidos nesse array. 

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array: ');

for (i = 0; i <= numeros.length; i++){
    if (numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}*/

/*Crie um programa que calcule a média dos números 
presentes em um array utilizando um loop for. 
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let soma = 0;
for (i=0; i < numeros.length; i++){
    soma += numeros[i];
}
let media = soma /numeros.length;
console.log(`A média da soma do array é ${media}`);*/

/*Crie uma função que receba uma array de números 
inteiros e retorne o menor valor e o maior valor da array, 
no seguinte formato: 
'o menor número é X e o maior número é Y' */

const array = [5, 37, 18, 59, 12, -5];

function maiorEmenor(array){
    let maior = 0;
    let menor = 0;

    for (i = 0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i];
        }else{
            menor = array[i];
        }
    }
    return `o maior número é ${maior} e o menor número é ${menor}`;
}
console.log(maiorEmenor(array));


