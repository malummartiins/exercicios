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
console.log(listDois);

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


Utilize o método concat() para unir os arrays das turmas A e B 
em um único array chamado todasAsTurmas. Depois, utilize o método find() 
para buscar um aluno específico pelo nome no array todosAlunos. 
Exiba no console uma mensagem informando o nome do aluno procurado; 
caso não exista na lista, retorne uma mensagem de aviso, por exemplo 
Aluno não encontrado.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

  const alunoProcurado = todasAsTurmas.find(aluno => aluno === 'Ana Souza');


if (alunoProcurado){
    console.log( `Aluno encontrado: ${alunoProcurado}`);
}else{
    console.log('Aluno não encontrado');
}
*/

/*Utilize o método forEach() para multiplicar cada elemento do 
array por 3 e exibir o resultado de cada multiplicação. Depois, 
utilize o método findIndex() para encontrar o índice do número 18 no array.*/


const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(numero => {
    const resultado = numero * 3;
    console.log(resultado);
})

const index18 = numeros.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
    console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
  } else {
    console.log('O número 18 não está presente no array.');
  }



