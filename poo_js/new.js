//new serve para criarmos instancias atraves de uma função construtora

function User(nome,email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function (){
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Draco', 'dracomalfoy@hogwarts.com')
//console.log(novoUser.exibirInfos()); 

function Admin(role){
    User.call(this, 'Draco', 'dracomalfoy@hogwarts.com')   //this aqui se refere ao contexto de user
    this.role = role || 'estudante'  //vai receber por parametro o role, se nao é estudante por padrao
}

Admin.prototype = Object.create(User.prototype)  //estamos criando um objt e passando por parametro o prototipo
const novoUser = new Admin ('admin')            // criar um novo obj a partir do construtor - porem (user esta agindo como protipo)
console.log(novoUser.exibirInfos());           //conseguimos chamar as funções
console.log(novoUser.role);

/*const user = {
    exibirInfos: function(nome){
        return nome
    }
}*/