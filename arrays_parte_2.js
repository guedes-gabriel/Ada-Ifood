let arr1 = [30, 12, 45, 27, 89, 12]
let arr2 = [1, 7, 9]

//fatiamento: slice
console.log(arr1.slice(0, 2)) //o ultimo não está incluso

console.clear()

//adicionando elementos: push (insere no fim) | unshift (insere no inicio)
console.log('Antes: ', arr2)

arr2.push(10)
arr2.unshift(32)

console.log('Depois: ', arr2)

console.clear()

//removendo elementos: pop (remove no fim) | shift (remove no inicio)
console.log('Antes: ', arr2)

arr2.pop()
arr2.shift()

console.log('Depois: ', arr2)

//retornar o elemento removido -> const variavelQualquer = array.pop()

console.clear()

//concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))

console.clear()

//buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento = arr1.indexOf(45) //busca o primeiro indice do elemento citado, se houver algum após esse ele será desconsiderado
let indiceDoElemento12 = arr1.lastIndexOf(12) //busca o ultimo indice do elemento citado, se houver algum antes desse ele será desconsiderado

console.log(indiceDoElemento) //se o elemento não exisitr no array o retorno será -1
console.log(indiceDoElemento12)

console.clear()

//desconsiderar a existencia de uma elemento: includes
console.log(arr1)

console.log(arr1.includes(27))

console.clear()

//invertendo arrays: reverse
console.log(arr1)

let arr1Invert = arr1.reverse()

console.log(arr1Invert)