// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;


let altura = [100, 150, 156, 148, 190, 170, 178, 169, 188, 169, 156, 190, 185, 186, 167];
let maiorAltura = 0
let menorAltura = 99999999


for (i = 0; i <= altura.length; i++) {
    if (altura[i] > maiorAltura ) {
        maiorAltura = altura[i];
    }
    if (altura[i] < menorAltura) {
        menorAltura = altura[i];
    }
}

console.log('Esta é a maior altura', maiorAltura);
console.log('Esta é a menor altura', menorAltura);