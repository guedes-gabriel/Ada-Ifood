let pessoa = {
    nome: 'Arnalda',
    idade: 100,
}

console.log(pessoa)

console.clear()

//como adicionar um par chave-valor
pessoa.altura = 0.49

console.log(pessoa)

console.clear()

//como remover um par e tals
delete pessoa.altura

console.log(pessoa)

console.clear()

//como percorrer objetos
for (let chave in pessoa) {
    console.log(chave)
}
