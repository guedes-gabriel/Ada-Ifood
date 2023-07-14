const input = require('readline-sync')

let acumulador = 0;

acumulador = acumulador + 10

acumulador += 2

acumulador++ //soma um na let

//console.log(acumulador)

console.clear()


for (let g = 0; g < 3; g++) {
    console.log('Repetição', g)
}

console.clear()

for (let g = 7; g > 0; g--) {
    console.log('Repetição', g)
}

console.clear()

//calculando a media de 3 notas
let nota;
let soma = 0

for (let i = 1; i < 4; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))

    soma = soma + nota
}

console.log(`A media do aluno e ${soma / 3}.`)