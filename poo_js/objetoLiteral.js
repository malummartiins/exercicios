const user = {
    nome: "Harry",
    email: "harrypotter@hogwarts.com",
    nascimento:"30/07/1980",
    role: "estudante",
    ativo: true,

    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Hermione",
    email: "hermionegranger@hogwarts.com",
    nascimento: "12/10/1980",
    role:"admin",
    ativo: true,

    criarCurso (){
        console.log('curso criado com sucesso!');
    }
}


//Object.setPrototypeOf(admin,user)  //vou definir um protótipo - ele tem dois parametros, o 1º é quem herda as propriedades, e o 2º é quem doa
//admin.criarCurso()
//admin.exibirInfos() 