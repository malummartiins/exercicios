//manipulando array: crie uma listaEstudantes e mude dois
//e adicione 1 - quero deletar ANA e CAIO


const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1,2, 'Rodrigo'); //quero deletar ANA e CAIO, dou indice da primeira e digo ao todo quantos quero deletar

//primeiro indice é onde começa o meu processo
//segundo paremtro pe a quantidade de elementos que quero deletar
//terceiro item o elemento que vai ser incluido

console.log(listaEstudantes);