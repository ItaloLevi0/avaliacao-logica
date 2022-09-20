// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
// somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

let a = 3
let b = 3
let c;

if (a===b){
    c = a + b;
    console.log('Os números são iguais e o resultado é', c)
}
if (a!==b){
    c = a * b;
    console.log('Os números são diferentes e o resultado é', c)
}

