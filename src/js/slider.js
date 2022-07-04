
let setaAvancar = document.getElementById("seta-direita");
let setaVoltar = document.getElementById("seta-esquerda");
let listaDeProjetos = document.getElementsByClassName("projeto");
fundoAnterior = 0;
fundoAtual = 0;

setaAvancar.addEventListener('click', function () {
    fundoAnterior = fundoAtual;
    fundoAtual++;

    removeProjetoAnterior();
    mostrarProjetoAtual();
    desabilitarSetas();
});

setaVoltar.addEventListener('click', function () {
    fundoAnterior = fundoAtual;
    fundoAtual--;

    removeProjetoAnterior();
    mostrarProjetoAtual();
    desabilitarSetas();
});

function removeProjetoAnterior() {
    listaDeProjetos[fundoAnterior].classList.remove("mostrar");
};

function mostrarProjetoAtual() {
    listaDeProjetos[fundoAtual].classList.add("mostrar");
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

