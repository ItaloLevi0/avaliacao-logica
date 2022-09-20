// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.



let numeros = [15, 15, 10, 10,26,27,38,56,68,70,71,80,89,99,100,]
let num0_25 = 0;
let num26_50 = 0;
let num51_75 = 0;
let num76_100 = 0

let i = 0   

while (i < numeros.length) {
    
    if (numeros[i] < 0) {
        console.log('Foi inserido um número negativo');
        break;
        
    } else if (numeros[i] >= 0 && numeros[i] <= 25) {
        num0_25++;
        i++
    }else if (numeros[i] >= 26 && numeros[i] <= 50) {
            num26_50++;
            i++
    }else if (numeros[i] >= 51 && numeros[i] <= 75) {
            num51_75++;
            i++
    }else if (numeros[i] >= 76 && numeros[i] <= 100) {
            num76_100++;
            i++
    }
    
}
    


console.log('quantidade de numeros entre 0 e 25:', num0_25);
console.log('quantidade de numeros entre 26 e 50:', num26_50);
console.log('quantidade de numeros entre 51 e 75:', num51_75);
console.log('quantidade de numeros entre 76 e 100:', num76_100);