/*

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

function sum(number1, number2) {
  alert(`A soma dos dois números é ${number1 + number2}`)
  return number1 + number2
}

function subtract(number1, number2) {
  alert(`A subtração dos dois números é ${number1 - number2}`)
  
}

function multiplication(number1, number2) {
  alert(`A multiplicação dos dois números é ${number1 * number2}`)
  
}

function division(number1, number2) {
  alert(`A divisão dos dois números é ${number1 / number2}`)
  
}

function restOfDivision(number1, number2) {
  alert(`A resto da divisão dos dois números é ${number1 % number2}`)
  
}

function ifSumEvenOrOdd(sumResult) {
  let verifySumResult = sumResult % 2
  if (verifySumResult === 0) {
    alert(`A soma dos dois números é par.`)
  } else {
    alert(`A soma dos dois números é ímpar.`)
  }
}

function checkIfEqualNumbers(number1, number2) {
  if (number1 === number2) {
    alert(`Os dois números são iguais.`)
  } else {
    alert(`Os dois números são diferentes.`)
  }
}





let firstNumber = Number(prompt('Digite o primeiro número: '))
let secondNumber = Number(prompt('Digite o segundo número: '))

let sumResult = sum(firstNumber, secondNumber)
subtract(firstNumber, secondNumber)
multiplication(firstNumber, secondNumber)
division(firstNumber, secondNumber)
restOfDivision(firstNumber, secondNumber)
ifSumEvenOrOdd(sumResult)
checkIfEqualNumbers(firstNumber, secondNumber)