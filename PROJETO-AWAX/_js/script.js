window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
            
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
            
        }
    });
};


/*let nome = prompt("Qual nome do piloto: ?");
let velocidade = 0;

velocidade = prompt("Qual velocidade voce gostaria de estar? KM:");

let confirmacao = confirm("Certeza que quer começar nessa velocidade? "+acelerar+" KM");

if(velocidade = 0 ) {
    console.log("Nave parada, aumentar a velocidade");
}else if (velocidade < 40) {
    console.log ("Nave esta devagar, podemos aumentar mais");
}else if (velocidade >= 40 && velocidade >= 80) {
    console.log ("Boa velocidade para manter");
}else if (velocidade > 80 && velocidade >=100) {
    console.log ("Velocidade alta.Diminua");
}else if ( velocidade > 100) {
    console.log ("Controle automatico forçado");
}else  {
    console.log ("ERRO FATAL --- INFORMAR A TORRE");
}

console.log ("Nome do piloto: "+nome+" velocidade " +velocidade+" KM");
*/

/*
let pilotName = prompt("Qual seu nome, piloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")
if(confirmVelocity) {
    velocity = newVelocity
}
if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")
*/

