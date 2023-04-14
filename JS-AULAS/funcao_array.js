let fruits = ['Maça ', 'Uva ', 'Banana ', 'Pera ', 'Melancia'];

fruits.push('Kiwi'); // add item
fruits.pop(); // Ultimo item
fruits.shift(); // Primeiro item

fruits[fruits.length - 1] = ' Melão';

console.log(fruits);
console.log(fruits.length);


console.log(fruits.join(' -> ')); // add string entre eles

