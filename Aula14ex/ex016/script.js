function contar() {
    let inicio = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0 ) {
        alert ("Campos invalidos!")
    } else {
        res.innerHTML = 'contando, '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}, `
            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}