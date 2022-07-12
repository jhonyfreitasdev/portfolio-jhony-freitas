let menu = document.querySelector(".menu");
let menuHamburger = document.querySelector(".menu-hamburger");
let rotacaoMenu = document.querySelector(".hamburger");
let statusAtivo = false;


menuHamburger.addEventListener('click', function(){
    if (statusAtivo) {
        menu.classList.remove("versao-hamburger");
        rotacaoMenu.classList.remove("ativo");
        statusAtivo = false;
    }else{
        menu.classList.add("versao-hamburger");        
        rotacaoMenu.classList.add("ativo");
        statusAtivo = true;
    };
});

