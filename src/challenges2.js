// Desafio 10
function techList(arrayTechs, name) {
  let arrayOrdenada = arrayTechs.sort();
  let lista = [];
  if (arrayTechs.length === 0){
    return 'Vazio!';
  } else {
    for (let i = 0; i < arrayOrdenada.length; i += 1) {
      lista.push( {tech: arrayOrdenada[i], name: name} );
    }
  }
  return lista;
}

function verifica1(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 1) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica2(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 2) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica3(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 3) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica4(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 4) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica5(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 5) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica6(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 6) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica7(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 7) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica8(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 8) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica9(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 9) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

function verifica0(array) {
  let contador1 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      contador1 += 1;
    }
  }
  if (contador1 >= 3) {
    return 1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 
  for (let numeros of arrayNumeros) {
    if (numeros < 0 || numeros > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (verifica1(arrayNumeros) || verifica2(arrayNumeros) || verifica3(arrayNumeros) || verifica4(arrayNumeros)
      || verifica5(arrayNumeros) || verifica6(arrayNumeros) || verifica7(arrayNumeros) || verifica8(arrayNumeros)
      || verifica9(arrayNumeros) || verifica0(arrayNumeros)) {
    return 'não é possível gerar um número de telefone com esses valores';
  };
  let numeroString = '(' + arrayNumeros[0] + arrayNumeros[1] + ') ' + arrayNumeros[2] + arrayNumeros[3] + 
            + arrayNumeros[4] + arrayNumeros[5] + arrayNumeros[6] + '-' +  arrayNumeros[7]
             + arrayNumeros[8] + arrayNumeros[9] + arrayNumeros[10];
  return numeroString;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)){
    return true;
  }
  return false;
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
