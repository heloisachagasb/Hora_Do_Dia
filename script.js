function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 6) {
        //boa madrugada
        img.src = 'img/madrugada.jpg'
        document.body.style.background = 'rgb(83, 49, 114)'
        document.querySelector(".cumprimento").innerHTML = "Boa madrugada!"

    } else if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = 'lightblue'
        document.querySelector(".cumprimento").innerHTML = "Bom dia!"

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F4A460'
        document.querySelector(".cumprimento").innerHTML = "Boa tarde!"

    } else {
        //boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(1, 27, 56)'
        document.querySelector(".cumprimento").innerHTML = "Boa noite!"
    }

}