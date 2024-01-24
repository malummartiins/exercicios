/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;*/

const notas = [10, 6.5, 8, 7.5];

//const media = (nota1 + nota2 + nota3 + nota4) / 4;
//para fazer esse calculo com array eu preciso pegar o nome da var+ o indice
//e ao inves de dividr por 4 (o que me obriga a saber o tam do array)
//divido pelo nome do array .lenght
const media = (notas[0] +notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);