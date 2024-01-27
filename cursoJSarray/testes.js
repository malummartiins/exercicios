/*Utilize o método forEach para imprimir 
cada elemento de um array juntamente com seu índice.


const array = ['a','b','c','d','e']

array.forEach((elemento,indice) => {
    console.log(`Indice ${indice}, Valor ${elemento}`);
})

Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: 
um array e uma função de callback que executa alguma operação matemática. 
Essa função deve iterar por cada elemento do array e aplicar a função de 
callback em cada um dos elementos, imprimindo o resultado da operação no console.


function executaOperacaoEmArray(array, callback){
    return array.map(callback);
}

function dobraNumero(num){
    return num * 2;
}

const listaNumeros = [1,2,3];
const listDois = executaOperacaoEmArray(listaNumeros,dobraNumero)
console.log(listDois);*/

const array = [1,2,3,4,5,6];
const numProcurado = 4;
let posi = -1;

for (i = 0; i < array.length ; i++){
    if (array[i] === numProcurado){
        posi = i;
        break;
    }
}
console.log(`O NUMERO PROCURADO É ${numProcurado} O INDICE É ${POSI}`);