let idade = 17;
let age = 14;

if (idade >= 18) {
     console.log ("Você é maior de idade");
}else {
    console.log ("Você é menor de idade");
}

// <
// >

// == 
// === IGUALDADE NO MESMO TIPO DE VARIAVEL - AMBOS TEM QUE SER STRING OU NUMBER 
// >=

// <=
// !=

/*
  if (age >= 18) { 
    if (age < 60) {
    console.log("Você é adulto");
    } 
}

*/

// MULTI-CONDICIONAL 

if (age >= 18 && age < 60) {
    console.log("Você é adulto");
    
} else {
    console.log ("Você e Menor de idade ");
}

// CONDICIONAL DUPLA

let edad = 60;

if ( edad < 18 ) {
    console.log ("Voce é uma criança");
} else if (edad >= 18 && edad < 60) {
    console.log ("Voce é uma adulto");
} else if (edad >= 60 ) {
    console.log ("Voce é um idoso");
}


// DESMISTIFICANDO O IF

let ano = 2025

let verificacao = ano >= 2020 && ano < 2030;

if(verificacao) {
    console.log ("Entrou no IF");
} else {
    console.log("Não entrou no IF");
}