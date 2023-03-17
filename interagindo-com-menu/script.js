/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
function selectOption(){
  let selectedOption = Number(prompt(`
  Olá usuário! Digite o número da opção desejada:
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  return Number(selectedOption)
}

function registerProduct(){
  let product = prompt(`Informe o novo produto: `)
  list.push(product)
}

function showList() {
  if (list.length === 0) {
    alert("Não existem itens cadastrados")
  } else {
    alert(list.join(', '))
  }
}


let option
let list = []


while (option !== 3) {
  option = selectOption()
  switch(option) {
    case 1:
      registerProduct()
      break
    case 2:
      showList()
      break
    case 3:
      alert('Fim do programa!')
      break
    default:
      alert('Informe um valor valido!')
  }
}
