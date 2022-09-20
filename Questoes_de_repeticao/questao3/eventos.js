// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos.


let numeros = [10, -39, 20, 12];
let soma = 0;
let num_positivo = 0;

for (let n = 0; n < numeros.length; n++) {
    soma += numeros[n];

    if (numeros[n] > 0) {
        num_positivo++;
    }
}

let num_negativo = numeros.length - num_positivo;

console.log('Média:', soma/numeros.length);
console.log('Números positivos:', num_positivo);
console.log('Números negativos:', num_negativo);
console.log('Porcentagem de números negativos:', (num_negativo/numeros.length) * 100);
console.log('Porcentagem de números positivos:', (num_positivo/numeros.length) * 100);
