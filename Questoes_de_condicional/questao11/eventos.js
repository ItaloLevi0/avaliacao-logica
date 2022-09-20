// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%


let preco = 90;
let pagamento = 4;
let desconto;
let valorPagar;
let juros;

if(pagamento === 1) {
    desconto = preco * 0.1
    valorPagar = preco - desconto
    console.log('Total a pagar:', valorPagar,'R$')
}

if(pagamento === 2) {
    desconto = preco * 0.15
    valorPagar = preco - desconto
    console.log('Total a pagar:', valorPagar,'R$')
}

if(pagamento === 3) {
    valorPagar = preco / 2
    console.log('Total a pagar: duas vezes de', valorPagar,'R$')
}

if(pagamento === 4) {
    juros = preco * 0.1
    valorPagar = (preco/2) + juros
    console.log('Total a pagar: duas vezes de', valorPagar,'R$')
}