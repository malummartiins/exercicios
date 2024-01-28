/*Faça uma função que aceite vários arrays como argumentos e retorne 
um único array contendo todos os elementos dos 
arrays fornecidos, utilizando Spread Operator.

const array1 = [1,2,3,4,5];
const array2 = [5,6,7,8,9];
const array3 = [10,20,30,40,50];

function concatArrays(...arrays){
    return [].concat(...arrays);
}

const arraysConcatenados = concatArrays (array1,array2,array3);
console.log(arraysConcatenados);

2) Crie um array de números chamado valores. Depois,escreva um programa que 
some todos os elementos deste array utilizando o método reduce.

const valores = [10,20,30,40,50];

const result = valores.reduce ((acumulador, num) =>{
    return acumulador + num;
}, 0)

console.log(result);


3) Considere duas listas de cores: const 
coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] 
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'] 
Crie um programa que una essas 
duas listas, removendo cores duplicadas e exiba a lista final.


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const totalCores = coresLista1.concat(coresLista2);

const final = new Set(totalCores);

const todasCores = [...final];

console.log(todasCores);

4) Escreva uma função que receba um array 
de números e retorne um array contendo apenas os números pares.

const array2 = [5,6,7,8,9];

function numPares (pares){
   return pares.filter (num => num % 2 === 0); //filtras os num pares
}

const listaPares = numPares(array2);
console.log(listaPares);

5) Crie uma função que filtre os números de um array 
que são múltiplos de 3 e maiores que 5.

const array2 = [3, 6, 9, 4, 12, 2, 7];

function filtrar(array){
    return array.filter (num => num % 3 === 0 && num > 5);
}
const listaFinal = filtrar(array2);
console.log(listaFinal);

6) Crie uma função que receba um array de números 
e retorne a soma de todos os elementos.

const listaNumeros = [1, 2, 3, 4, 5];

const result = listaNumeros.reduce((acumulador, num) => {
    return acumulador+num;
}, 0 )

console.log(result);*/