//primeira classe

//construtor da classe user ele vai receber todas as propriedades que a 
//classe precisa pra ser iniciada por parametro. 
//para poder exportar uma classe para usar ela tem qe colocar export default


export default class User {
    #nome   //para dizer que o atributo é privado
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos(){
        return  `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`
    }

}

