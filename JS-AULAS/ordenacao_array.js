let fruits = ['Maça ', 'Uva ', 'Banana ', 'Pera ', 'Melancia'];

fruits.sort(); // ORDEM ALFABETICA 
fruits.reverse(); // INVERTE AS ORDENS 

console.log(fruits);


let cars = [
    {brand: 'Fiat' , year: 2022},
    {brand: 'Ferrari' , year: 2018},
    {brand: 'BMW' , year: 2021},
];

cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;  
    }
});

// OUTRO JEITO 

cars.sort((a, b) => a.year - b.year); // CODIGO SIMPLIFICADO.

console.log(cars);