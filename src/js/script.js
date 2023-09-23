let pergunta = document
.querySelectorAll('.container-pergunta')


pergunta.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item.classList.contains('ativado')){
            item.classList.remove('ativado')
            return;
        }

        let perguntaAtiva = document
        .querySelector('.ativado')

        if(perguntaAtiva){
            perguntaAtiva.classList.remove('ativado')
        }

        item.classList.add('ativado')
    })
})


