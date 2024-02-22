import User from "./User.js";

export default class Prof extends User{
    constructor(nome, email, nascimento, role = 'prof', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }


    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}

