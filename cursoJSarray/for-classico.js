const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// i = 0; executada apenas uma vez (é uma var sendo iniciada)e digo que o valor dela é 0, sendo que 0 tbm é o primeiro indice do array 

// i < notas.leght ; ela é a condição de execução = signifca que o loop vai continuar repetindo enquanto isso for verdade; 
//ou seja vai repetir enquanto indices for menor que notas.lenght(tamanho do meu array)

// i++ ; é executada sempre no final do bloco; sempre quando o for terminar, ele vai 

for (i = 0; i < notas.length; i++){
    console.log(i, notas[i]);
}