function gravidade() {
    console.log ('A gravidade do planeta é: ');
    console.log (9.8);
}

console.log ('Opa, tudo bem? ');

gravidade();

// EXEMPLO 1

function somar(n1, n2) {
     let resultado = n1 + n2;
     console.log('Resultado: '+ resultado);
}

somar(10, 15);

// EXEMPLO 2

function nomeCompleto (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Elvis", "Souza");


// ENTRADA -> PROCESSAMENTO -> SAIDA 

// EXEMPLO 3

function nomeCompleto1 (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto1("Kate", "Souza");

console.log('Completo: ' + completo);

