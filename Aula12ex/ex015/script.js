function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'homem'
        } else if (fsex[1].checked) {
            gênero = 'mulher'
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}