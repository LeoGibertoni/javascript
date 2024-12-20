let num = [5, 8, 3, 2, 5, 6, 7]
num.sort() //ordem crescente
num.push(1) //adiciona o numero no final do vetor
//numero 1 ficou no final pq o em ordem está antes
console.log()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro do vetor é ${num[0]}`)

console.log()

for(let pos = 0; pos < num.length; pos++) { //repete todos os numero do vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log()

for(let pos in num) { //for resumido
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log()

let pos = num.indexOf(7) //vê qual o modulo do vetor está o numero 7
console.log(`O valor (7) está na posição ${pos}`) //se der -1 é porque não tem o numero