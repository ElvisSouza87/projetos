/*function clicou() {
    console.log("Clicou no botão");
}
*/

/*let botao = document.querySelector ('.botao');
botao.addEventListener("click" , () => {
    clicou();
})

*/

function clicou() {
    const teste = document.querySelector('.teste');
    /*console.log(teste.children); */
    const ul = teste.querySelector('ul');

    //console.log(ul.innerHTML);

    //ul.innerHTML = ul.innerHTML + "<li>Item alterado</li>";

    //ul.children[0].innerHTML += "Item alterado"

    //console.log(ul.outerHTML);

    //ul.outerHTML  = "<strong>Alterado!</strong>";

    //ul.children[0].append(" (alterado)"); 
   
    /*
    let nemLI = document.createElement("li");
    nemLI.innerHTML = "Item adicionado";

    ul.appendChild(newLI); // add um item no final do texto

    ul.prepend(newLI); // add um item no inicio do texto
    */
     
    /*
     const newButton = document.createElement ('button');
     newButton.innerHTML = "botão";

    ul.after(newButton) // AFTER = DEPOIS  // BEFORE = ANTES
    */

    let newUl = document.createElement ('ul');

    for (let i = 0; i < 5; i++ ) {
        let newLI = document.createElement ('li');
        newLI.innerHTML  = "item add " + i;
        newUl.append(newLI);
    }

    ul.after(newUl);
}