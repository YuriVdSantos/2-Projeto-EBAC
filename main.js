function addContact() {
  // Obtém os valores dos campos nome e número de contato
  var name = document.getElementById('name').value
  var phone = document.getElementById('phone').value

  // Verifica se o campo nome está vazio
  if (name == '') {
    alert('Por favor, insira o seu nome completo')
    return false
  }

  // Verifica se o campo número de contato está vazio ou não é um número válido
  if (phone == '' || isNaN(phone)) {
    alert('Por favor, insira um número de contato válido')
    return false
  }

  // Cria uma nova linha na tabela com as informações do contato
  var table = document
    .getElementById('contacts-table')
    .getElementsByTagName('tbody')[0]
  var newRow = table.insertRow()
  var nameCell = newRow.insertCell(0)
  var phoneCell = newRow.insertCell(1)
  nameCell.innerHTML = name
  phoneCell.innerHTML = phone

  // Limpa o formulário
  clearForm()

  return false
}

function clearForm() {
  document.getElementById('contact-form').reset()
}
