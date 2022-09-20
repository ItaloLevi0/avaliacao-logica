// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
// decrescente.

let a = 4
let b = 1
let c = 4


if (a >= b && a >= c && b >= c) {
        console.log('', a, b, c)
} 

if (a >= b && a >= c && c >= b) {
    console.log('', a, c, b)
} 

if (b >= a && b >= c && a >= c) {
    console.log('', b, a, c)
} 

if (b >= a && b >= c && c >= a) {
    console.log('', b, c, a)
} 


if (c >= a && c >= b && a >= b) {
    console.log('', c, a, b)
} 


if (c >= a && c >= b && b >= a) {
    console.log('', c, b, a)
} 

if (a === b && b === c) {
    console.log('', a, b, c)
}