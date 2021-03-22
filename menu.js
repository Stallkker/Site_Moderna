let menu = document.querySelector(".caixa-nav");
let acessarMenu = document.querySelector(".hamburger");

let sobre = document.createElement('a');
let lembrete = document.createElement('a');
let tarefas = document.createElement('a');
let calendario = document.createElement('a');
let calculadora = document.createElement('a');
let contato = document.createElement('a');

let sobreTxt = document.createTextNode("Sobre")
let lembreteTxt = document.createTextNode("Lembrete")
let tarefasTxt = document.createTextNode("Tarefas")
let calendarioTxt = document.createTextNode("Calendario")
let calculadoraTxt = document.createTextNode("Calculadora")
let contatoTxt = document.createTextNode("Contato")


let liSobre = document.createElement('li');
let liLembrete = document.createElement('li');
let liTarefas = document.createElement('li');
let liCalendario = document.createElement('li');
let liCalculadora = document.createElement('li');
let liContato = document.createElement('li');

let lista = document.createElement('ul');

/*function adicionandoHtml(){
    
}

function colocandoClass() {


    adicionandoHtml();
}*/

/*function adicionadoFilhos(){



    colocandoClass();
}*/

function removerImg(){
    menu.removeChild(acessarMenu);

    sobre.appendChild(sobreTxt);
    lembrete.appendChild(lembreteTxt);
    tarefas.appendChild(tarefasTxt);
    calendario.appendChild(calendarioTxt);
    calculadora.appendChild(calculadoraTxt);
    contato.appendChild(contatoTxt);

    liSobre.appendChild(sobre);
    liLembrete.appendChild(lembrete);
    liTarefas.appendChild(tarefas);
    liCalendario.appendChild(calendario);
    liCalculadora.appendChild(calculadora);
    liContato.appendChild(contato);

    lista.appendChild(liSobre);
    lista.appendChild(liLembrete);
    lista.appendChild(liTarefas);
    lista.appendChild(liCalendario);
    lista.appendChild(liCalculadora);
    lista.appendChild(liContato);

    lista.classList.add("nav-lista");

    sobre.classList.add("item-lista");
    lembrete.classList.add("item-lista");
    tarefas.classList.add("item-lista");
    calendario.classList.add("item-lista");
    calculadora.classList.add("item-lista");
    contato.classList.add("item-lista");

    menu.appendChild(lista);
    //adicionadoFilhos();
}

menu.addEventListener("click",removerImg);