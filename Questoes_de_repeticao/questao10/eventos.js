// 10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120


let a = 5;
let resultado = 1;


for(n = a; n >=1; n--){
    console.log(n);
    console.log('x')
    resultado *= n;
}

console.log('=', resultado)