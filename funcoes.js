const input = require('readline-sync')

//definição da função
function saudacao() {
    console.log('Salve')
}

saudacao()

console.clear()

//enviando parametros para as funções
function saudacao(nome, complemento) {
    console.log(`Salve ${nome} ${complemento}`)
    //console.log(nome)
}

saudacao('Guedes', 'tmj!')

console.clear()

//retorno da função
function soma(numero1, numero2) {
    return numero1 + numero2
}

let resultado = soma(7, 9)

console.log(resultado)

console.clear()

function maiorQue47(numero) {
    if (numero > 47) {
        return true
    } return false
}