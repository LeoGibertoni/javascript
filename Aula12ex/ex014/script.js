function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#68bcf8'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#fb9800'
    } else {
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#0a1519'
    }
}