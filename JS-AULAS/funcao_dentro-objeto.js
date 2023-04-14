let pessoa = {
    nome : "Elvis",
    sobrenome: 'Souza',
    idade: 89,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto());