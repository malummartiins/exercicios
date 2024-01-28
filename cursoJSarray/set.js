/*O último desafio é remover duplicatas de uma lista. Um professor 
adicionou acidentalmente nomes repetidos na lista de chamada: 
Ana, Clara, Maria, Maria, João, João, João. 
Nossa tarefa é remover os nomes repetidos dessa lista, deixando 
apenas um de cada.*/


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set (nomes);

/*o set é um conjunto, e isso é um tipo de dado que armazena valores unicos
ele é tipo um array, mas nao é um. E a difereça é que ele nao permite valores
duplicados. Ele parece um array mas nao tem os métodos de um array.
E se eu quiser utilizar essa lista eu preciso primeiro transformar ela em um
array*/

const listaNomes = [...nomesAtualizados]; //transformando um set em array

console.log(nomesAtualizados);