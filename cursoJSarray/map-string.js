/* Padrozina um array com nomes e por todos em maiusculo
vamos usar map() para -> percorrer o arrray deixando tudo em
maiusculo. -> e salvar essas alterações em um array corrigido. */

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadrao = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadrao);

/**Podemos utilizar o map() para fazer alterações em qualquer tipo de
 * dado que faça parte do array - Cada um dos itens do array é capturado 
 * dentro do parametro ~(nome)~ e conseguimos acessar esse valor e 
 * fazer as alterações necessárias que vao ser armazenadas em um novo
 * array ~nomesPadrao~
 */