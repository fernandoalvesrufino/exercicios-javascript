/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

function imcCalc(weight, height) {
  let newHeight = height/100
  imc = weight / (newHeight ** 2)

  return imc.toFixed(1)
}


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
  {
    name: "Fernando",
    age: 26,
    weight: 84,
    height: 185,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(`Paciente ${patient.name} possui o IMC de: ${imcCalc(patient.weight, patient.height)}. \n`)
}

alert(patientsNames.join(''))
