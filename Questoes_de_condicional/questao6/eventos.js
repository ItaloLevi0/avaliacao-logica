// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são
// VERDADEIROS ou FALSOS.

let a = false
let b = false

if (a === true && b === true) {
    console.log('Ambos são verdadeiros')
} 

if (a === true && b === false) {
    console.log('b é falso')
}

if (a === false && b === true) {
    console.log('a é falso')
}


if (a === false && b === false) {
    console.log('Ambos são falsos');
}