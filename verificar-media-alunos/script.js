/*

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

function averageCalculation (name, note1, note2) {
  let average = ((note1 + note2) / 2).toFixed(1)
  checkAverage(name, average)
}

function checkAverage (name, average) {
  let message
  if (average >= 7) {
    message = `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
  } else {
    message = `Não foi dessa vez, ${name}! Tente novamente!`
  }

  alert(`
  A média do(a) aluno(a) ${name} é: ${average}
  ${message}
  `)
}


let students = [
  {
    name: 'Lebron James',
    firstTestScore: 8,
    secondTestScore: 10,
  },
  {
    name: 'Stephen Curry',
    firstTestScore: 10,
    secondTestScore: 6,
  },
  {
    name: 'Luka Doncic',
    firstTestScore: 3,
    secondTestScore: 9,
  },
  {
    name: 'Ja Morant',
    firstTestScore: 5,
    secondTestScore: 8,
  },
]

for (let student of students) {
  averageCalculation(student.name, student.firstTestScore, student.secondTestScore)
}