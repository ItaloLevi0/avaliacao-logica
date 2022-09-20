// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
// números lidos. O número que encerrará a leitura será zero.


let numeros = [23,356,42,54, 70];
let num_par = 0;
let num_impar = 0;
let soma = 0;
let soma_par = 0;


for (let i = 0; i <= numeros.length && numeros[i] > 0; i++) {
    soma += numeros[i];

    if (numeros[i]%2 === 0) {
        num_par++;
        soma_par += numeros[i]
    }else{
        num_impar++;
    }
}

console.log('Média dos numeros pares:', (soma_par/num_par));
console.log('Média de todos os números', (soma/numeros.length));
console.log('Números pares:', (num_par));
console.log('Números ímpares:', (num_impar));
