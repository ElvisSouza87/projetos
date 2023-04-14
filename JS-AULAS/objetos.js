let personagem = {
    nome: 'Elvis',
    idade: 33,
    pais: 'Brasil',
    carros : [
        {modelo: 'fiat' ,cor: 'preto'},
        {modelo: 'Ferrari', cor:'vermelho'}
    ],
    olhos: ['preto' , 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
  
}

console.log(personagem.nome);

console.log(`${personagem.nome} tem ${personagem.idade} anos.`)

console.log(personagem.caracteristicas.forca);

console.log(personagem.olhos[1]);


// ALTERAR OS DADOS 

console.log(personagem.carros[0].modelo);

personagem.nome = 'Kate' // trocar os nomes

personagem.caracteristicas.forca += 5; 

personagem.olhos.push('verde');

console.log(personagem.nome);

console.log(`força: ${personagem.caracteristicas.forca}`);

console.log(personagem.olhos[2]);