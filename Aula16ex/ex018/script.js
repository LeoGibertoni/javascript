let num = document.getElementById('fnum')
let list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = '' // Limpa o resultado ao adicionar novo número
        num.value = '' // Limpa o campo de entrada
        num.focus() // Coloca o cursor de volta no campo de entrada
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((acc, curr) => acc + curr, 0)
        let media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`
    }
}
