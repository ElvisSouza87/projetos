let profession = "Fiscal"

console.log ("Profissão: " + profession)

switch (profession) {
    case 'Bombeiro' :
        console.log ('Sua camisa será VERMELHA')
        break;
    case 'Fiscal' :
        console.log ('Sua camisa será VERDE')
        break;
    case 'Policial' :
        console.log ('Sua camisa será PRETA')
        break;
    default:
        console.log ('Sua camisa será AZUL')
        break;
}