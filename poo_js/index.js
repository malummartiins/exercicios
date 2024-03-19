import User from "./User.js";
import Prof from "./Prof.js";
import Admin from "./Admin.js";

//const novoUser = new User ('Luna', 'luna@hogwarts.com', '12/12/1970')
//console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Hagrid', 'hagrid@hogwarts.com', '01/02/1960')
console.log(novoAdmin.nome);
novoAdmin.nome = 'Rubeo'
console.log(novoAdmin.nome);