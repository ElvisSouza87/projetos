let fruits = ['Maça ', 'Banana ', 'Pera ', 'Uva','Melancia'];


let bigFruits = fruits.filter((item) => item.length > 5);

console.log(bigFruits);


// EXEMPLO 2 

let ok = fruits.every ((value) => {  // fruits.some - 1 iten satisfaz ///  fruits.every - todos tem que ser. 
    if (value.length > 2) {
        return true;
    } else {
        return false
    }
})

if(ok) {
    console.log('Todos são maior que 3');
} else {
    console.log('Não são todos maior que 3');
}


// EXEMPLO 3 

if (fruits.includes('Uva'))  {
    console.log('Tem uva sim');
} else {
    console.log ('Não tem uva...');
}