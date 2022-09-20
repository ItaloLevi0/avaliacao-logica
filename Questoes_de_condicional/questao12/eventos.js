// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
// aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E



let numeroAluno = 2
let nota1 =100
let nota2 =60
let nota3 = 100
let me =100
let ma = (nota1 + (nota2*2) + (nota3*3) + me) / 7

console.log('Aluno número', numeroAluno)
console.log(`Notas
`, nota1,`
`, nota2,`
`, nota3,`
`, me)

if (ma >= 90) {
    console.log('Media de aproveitamento:', ma, 'APROVADO com conceito A')
}

if (ma >= 75 && ma < 90) {
    console.log('Media de aproveitamento:', ma, 'APROVADO com conceito B')
}

if (ma >= 60 && ma < 75) {
    console.log('Media de aproveitamento:', ma, 'APROVADO com conceito C')
}

if (ma >= 40 && ma < 60) {
    console.log('Media de aproveitamento:', ma, 'REPROVADO com conceito D')
}

if (ma < 40) {
    console.log('Media de aproveitamento:', ma, 'REPROVADO com conceito E')
}
