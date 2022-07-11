let menu = document.querySelector(".menu");
let menuHamburger = document.querySelector(".menu-hamburger");
let statusAtivo = false;


menuHamburger.addEventListener('click', function(){
    if (statusAtivo) {
        menu.classList.remove("versao-hamburger");
        statusAtivo = false;
    }else{
        menu.classList.add("versao-hamburger");        
        statusAtivo = true;
    };
});

