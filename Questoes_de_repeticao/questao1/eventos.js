// 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
// três e que se encontram no conjunto dos números de 1 até 500.

let numeros = [9, 12, 18, 15, 23, 30, 8, 900];
let soma = 0;

for (let n = 0; n < numeros.length; n++) {
    if (numeros[n]%2 !== 0 && numeros[n] <= 500 && numeros[n]%2 !== 0 && numeros[n]%3 === 0) {
        soma += numeros[n]
    }
}
console.log(soma);