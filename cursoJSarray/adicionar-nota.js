const notas = [10, 6, 8];

notas.push(7); //para add um item no array

const media = (notas[0] +notas[1] + notas[2] + notas[3]) / notas.length; //aqui o index 3 já existe pq js le de cima pra baixo

console.log(media);
