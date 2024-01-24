/*Procurando em uma lista: -crie uma function que recebe cm argumento o
nome de um aluno. - Verificar se ele esta na lista - Se sim, retornar
a media do aluno tirada da lista de medias, se nao, exibir msg de que o
aluno nao foi encontrado*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeeNota (aluno){
    if (lista[0].includes(aluno)){ //includes() determina se um array contém um determinado elemento retornando true or false.
      const [alunos,medias] = lista; //desestruturando um array 
      const indice = alunos.indexOf(aluno); //retorna o indice da primeira ocorrencia do valor fornecido
        const mediaAluno = medias[indice]; //entrando 2 array
        console.log(`${aluno} tem a média ${mediaAluno}`);
     } else {
        console.log('Estudante não encontrado');
     }
}

exibeNomeeNota('Ana');
exibeNomeeNota('Malu');