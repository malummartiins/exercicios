const notas = [10, 6, 8, 5.5, 10];

notas.pop(); 

//diferente do push nao adicionamos nada ele sempre vai tirar o
//ultimo elemento do array

const media = (notas[0] +notas[1] + notas[2] + notas[3]) / notas.length; //aqui o index 3 já existe pq js le de cima pra baixo

console.log(media.toFixed(2)); //tofixed metodo para ajustar quantos num dps da virgula
