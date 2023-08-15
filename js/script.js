function toggleMode(){
        // declarando uma variável constante
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    /* versão completa
    if (html.classList.contains('light')){
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }
    */

    // Versão com auxilio de uma função existente - mesma coisa da de cima
    html.classList.toggle('light')

    // trocando a imagem de perfil entre mudança de mode
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    } else{
        img.setAttribute('src','./assets/avatar.png')
    }

}