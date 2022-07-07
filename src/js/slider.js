
let setaAvancar = document.getElementById("seta-direita");
let setaVoltar = document.getElementById("seta-esquerda");
let listaDeProjetos = document.getElementsByClassName("projeto");
fundoAnterior = 0;
fundoAtual = 0;

function mostrarProjetoAtual() {
    listaDeProjetos[fundoAtual].classList.add("mostrar");
};

function removeProjetoAnterior() {
    listaDeProjetos[fundoAnterior].classList.remove("mostrar");
};

function desabilitarSetas() {
    if (fundoAtual === 0) {
        setaVoltar.classList.add("desabilitar-seta");
    } else {
        setaVoltar.classList.remove("desabilitar-seta");
    };

    if (fundoAtual === listaDeProjetos.length - 1) {
        setaAvancar.classList.add("desabilitar-seta");
    } else {
        setaAvancar.classList.remove("desabilitar-seta");
    };
};

function fecharSecaoDeLinks(){
    sessaoDeLinks[fundoAnterior].classList.remove("mostrar-links");  
};

setaAvancar.addEventListener('click', function () {
    fundoAnterior = fundoAtual;
    fundoAtual++;

    removeProjetoAnterior();
    mostrarProjetoAtual();
    desabilitarSetas(); 
    fecharSecaoDeLinks();
});

setaVoltar.addEventListener('click', function () {
    fundoAnterior = fundoAtual;
    fundoAtual--;

    removeProjetoAnterior();
    mostrarProjetoAtual();
    desabilitarSetas();    
    fecharSecaoDeLinks();
});
