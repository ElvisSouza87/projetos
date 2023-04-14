let cores = ['azul', 'preto' , 'branco' ,'vermelho'];

cores.push('verde');

for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

////EXEMPLO 2

for (let i in cores) {      // CODIGO RESUMINDO 
    console.log(cores[i]);
}

//// EXEMPLO 3

for (let cor of cores) {
    console.log(cor);
}


