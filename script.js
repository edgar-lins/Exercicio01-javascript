/*
  Solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
  * A doma dos dois números;
  * A subtração dos dois números;
  * A multiplicação dos dois números;
  * A divisão dois dois números;
  * O resto da divisão dos dois números;
*/

let n1 = prompt('Digite o primeiro número: ')
let n2 = prompt('Digite o segundo número: ')

n1 = Number(n1)
n2 = Number(n2)

let sum = n1 + n2
let sub = n1 - n2
let multi = n1 * n2
let div = (n1 / n2).toFixed(2)
let rem = n1 % n2

let par = (sum % 2)

alert(`${n1} + ${n2} = ${sum}`)
alert(`${n1} - ${n2} = ${sub}`)
alert(`${n1} x ${n2} = ${multi}`)
alert(`${n1} / ${n2} = ${div}`)
alert(`O resto da divisão de ${n1} e ${n2} é: ${rem}`)


if(par == 0){
  alert(`A soma de ${n1} e ${n2} da um número par`)
}
else {
  alert(`A soma de ${n1} e ${n2} da um número ímpar`)
}

if(n1 == n2) {
  alert(`${n1} e ${n2} são números iguais!`)
}
else {
  alert(`${n1} e ${n2} são números diferentes!`)
}
