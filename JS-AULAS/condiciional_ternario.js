let isMember  = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Voce é membro ' : 'Voce não e membro');
console.log("Frete: " + shipping);

// EXEMPLO 2 

let age = 18;

let isAdult = ((age >= 18) ? 'Sim' : 'Não');

console.log(isAdult);