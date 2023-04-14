/* 
Crie uma função que valide usuário e senha.
usuario correto : Elvis
Senha correta: 1234
*/

// Uso da função:

function validar(usuario, senha) {
    if (usuario === 'Elvis' && senha === '1234') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'Elvis';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log ('Acesso Concedido');   
}else {
    console.log ('Acesso NEGADO!');
}

