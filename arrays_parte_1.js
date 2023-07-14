let arr = ['Guedes', 23, 1.76, true]

console.log(arr)

console.log('Primeiro: ', arr[0])

//tamanho do array
console.log(arr.length)

console.clear()

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

for (let elemento of arr) { //o for percorre os elementos do array
    console.log(elemento)
}

console.clear()

for (let variavel in arr) { //o in percorre o indice do array
    console.log(variavel)
}

console.clear()

for (let indice in arr) {
    console.log(indice, arr[indice])
}