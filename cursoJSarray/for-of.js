const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let soma = 0;

//bom para casos que quer pegar do 1 ao último indice do array
//crio uma var nota que vai armazenar a cada iteração o valor
// dos itens (10,8.5,5...) e nao o indice como no for classico
// of notas (aqui dps do of passa o nome do array)

for (let nota of notas){
    soma += nota;   //passo o valor de dentro de notas para dentro
                   // da var soma incrementando +1
}

const media = soma / notas.length;

console.log(`a média das notas é ${media}`);