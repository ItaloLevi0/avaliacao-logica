// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo,
// imprimindo o resultado.

let numero = -3;
let resultado;

if (numero > 0) {
    resultado = numero * 2;
    console.log('O número é positivo, o dobro dele é', resultado);

} 
if (numero === 0) {
    console.log('Zero é um número neutro');
}

if (numero < 0) {
   
    resultado = numero * 3;
    console.log('O número é negativo, o triplo dele é', resultado);
}

