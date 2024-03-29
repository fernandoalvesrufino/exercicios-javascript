/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

const randomNumber = Math.round(Math.random() * 10)
alert(randomNumber)
let myNumber = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10: "))
let checkNumber = myNumber === randomNumber
let tryNumber = 1

while(!checkNumber) {
  myNumber = Number(prompt("Erro, tente novamente: "))
  tryNumber ++
  if (myNumber === randomNumber) {
    break
  }
}

alert(`Parabéns! Você advinhou o número em ${tryNumber} tentativas!`)
