const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//começamos passando para o js qual array vamos trabalhar
//e chamando o método forEach()
//o que passamos por parametro dentro do forEach é uma outra funcao

notas.forEach(function(nota){  //essa function é executada para cada elemento dentro do array
    somaDasNotas+=nota;         
})

//observe que nao crio uma var externa para guardar elementos
//e nem preciso dizer onde o array começa e termina 
//pq o forEach() automaticamente percorre do 1º ao último elem. do array

const media = somaDasNotas / notas.length;

console.log(`a média das notas é: ${media}`);
