// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
// imprimir o resultado desta operação.


let numero = 3;
let resultado;

if (numero%2 === 0) {
    resultado = numero + 5;
    console.log('O número é par e o resultado é', resultado)
} else {
    resultado = numero + 8;
    console.log('O número é ímpar e o resultado é', resultado)
}