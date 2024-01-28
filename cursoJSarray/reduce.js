/*somando os arrays e tirando a média de cada um.

- o reduce() é uma função (callback) que reduz todos os valores, elementos
do array. a um só elemento - neste caso, ele vai somar todos os eleme do 
meu array. */

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function calculaMedia (listaDeNotas){    //ele recebe dois parametros, o acumulador, e a nota que é o elemento que está sendo iterado no momento
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0); // no reduce() dps que passamos a função interna temos que passar
          // outro parametro que é o valor iniciar para ser acumulado;
          
//essa function em uma linha so:
//const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));