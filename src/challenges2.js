// Desafio 10
function techList(arrayTechs, name) {
  let arrayOrdenada = arrayTechs.sort();
  let lista = [];
  if (arrayTechs.length === 0){
    return 'Vazio!'
  } else {
    for (let i = 0; i < arrayOrdenada.length; i += 1) {
      lista.push({tech: arrayOrdenada[i], name: name});
    }
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
