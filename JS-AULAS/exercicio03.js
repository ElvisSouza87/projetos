/* CALCULE A PORCENTAGEM ENTRE 2 NUMEROS.
EXEMPLO: 25% DE 40 É 10
FORMULA DA PORCENTAGEM (Y / X ) * 100
USO DA FUNÇÃO

let x =40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(x ,y) {
    let pct = (y / x) * 100;
    return pct;
}
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);