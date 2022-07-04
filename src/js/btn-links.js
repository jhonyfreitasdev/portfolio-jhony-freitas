
let botaoAcessoProjeto = document.querySelectorAll(".btn-link-projeto");
let botaoFecharLinks = document.querySelectorAll(".btn-fechar");
let sessaoDeLinks = document.querySelectorAll(div = ".links");

botaoAcessoProjeto.forEach(function(links){
    links.addEventListener('click', function(){
    sessaoDeLinks[fundoAtual].classList.add("mostrar-links");
    });
});

botaoFecharLinks.forEach(function(links){
    links.addEventListener('click', function(){
        sessaoDeLinks[fundoAtual].classList.remove("mostrar-links");    
    });
});