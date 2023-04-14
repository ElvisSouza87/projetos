function maiorDeIdade (idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 28;
let verificacao = maiorDeIdade(idade);
console.log (verificacao);

///////////////////////////////////////

if (verificacao) {
    console.log('E maior de idade');
}else {
    console.log('E menor de idade');
}
