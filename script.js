
/* evento do formulaio */
function form() {
    const contatoSection = document.querySelector("#contato");
    const jScontatoLinks = document.querySelectorAll('[data-jScontato]');
    
    jScontatoLinks.forEach( jScontato =>{

        jScontato.addEventListener("click", function(event){
            event.preventDefault(); // Evita o comportamento padrão do link
    
            //aletando a classe para ocultar e deixar visivel
            if (contatoSection.classList.contains("desativa")) {
                contatoSection.classList.remove("desativa");
                contatoSection.classList.add("ativa");
            } else {
                contatoSection.classList.remove("ativa");
                contatoSection.classList.add("desativa");
            }
    
              // Rolagem para a section de contato
              contatoSection.scrollIntoView({ behavior: "smooth" });
        })
    })  
}
form()

/* evento do Scroll */
function dinamicaScroll() {
    const conteinerSectionScroll = document.querySelectorAll(".js-scroll");
    const metade = window.innerHeight * 0.5;

    conteinerSectionScroll.forEach(itemSections => {
        const sectionTop = itemSections.getBoundingClientRect().top - metade;

        // Condicional que vai verificar o ponto de partida da scroll
        if (sectionTop < 0) {
            itemSections.classList.add("ativo");
        } else {
            itemSections.classList.remove("ativo");
        }
    });
    window.addEventListener("scroll", dinamicaScroll);
}
dinamicaScroll();
