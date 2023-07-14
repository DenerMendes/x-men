
const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('.selecionado');
    
        if(window.innerWidth < 450) {
            window.scrollTo({top : 0, behavior: 'smooth'});
        }

        
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;

        
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        
        const descriçãoPersonagem = document.getElementById('descricao-personagem');
        descriçãoPersonagem.innerText = personagem.getAttribute('data-description');


    })
})












