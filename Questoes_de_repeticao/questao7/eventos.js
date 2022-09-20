// 7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.


let n = 3
let x = 0
let mult = 0

for(x = 0; x <= 10; x++){
    mult = n * x;
    console.log('', x, 'x', n, '=', mult);
}