const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];


//vou juntar em UM ARRAYS, os dois arrays de cima
const lista = [alunos, medias];

//vai me retornar um array com os outros dentro como elementos

//console.log(lista);

//[ [ 'João', 'Juliana', 'Caio', 'Ana' ], [ 10, 8, 7.5, 9 ] ]

//como acesso os valores de cada um dos arrays:
//por ex, acessar a aluna Juliana e a nota dela que é 8

console.log (
    `a aluna da posição 1 da lista é:  ${lista[0][1]}
    a nota dessa aluna é: ${lista[1][1]}`
) 

//o item acima fica, o primeiro [] é o numero do array
//e o segundo é o indice dentro deste array, por exemplo
//${lista[0][1]} é acesse o array de posição 1 e dentro dele o elemento de index 1




