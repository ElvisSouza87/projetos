/*
CALCULE O PREÇO DO IMOVEL
 - m² = 3.000
 - SE TIVER 1 QUARTO , O M² E 1X
 - SE TIVER 2 QUARTO , O M² E 1.2X
 - SE TIVER 3 QUARTO , O M² E 1.5X
USO DA FUNÇÃO:
*/

function calculeImovel (metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    
    switch(quartos) {
        case 1:
        default :
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;    
    }
   
    return preco;
}

let metragem = 123;
let quartos = 2;
let preco = calculeImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);