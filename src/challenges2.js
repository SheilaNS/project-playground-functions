// Desafio 10
function techList(arrayTechs, name) {
  let arrayOrdenada = arrayTechs.sort();
  let lista = [];
  if (arrayTechs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayOrdenada.length; i += 1) {
    lista.push({ tech: arrayOrdenada[i], name });
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

function verificaTamanho(array) {
  if (array.length !== 11) {
    return 1;
  }
  return 0;
}

function verificaZeroNove(array) {
  for (let numeros of array) {
    if (numeros < 0 || numeros > 9) {
      return 1;
    }
  }
  return 0;
}

function verificaNumeros(array) {
  if (
    verifica1(array)
    || verifica2(array)
    || verifica3(array)
    || verifica4(array)
    || verifica5(array)
    || verifica6(array)
    || verifica7(array)
    || verifica8(array)
    || verifica9(array)
    || verifica0(array)
  ) {
    return 1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  if (verificaTamanho(arrayNumeros)) {
    return 'Array com tamanho incorreto.';
  }

  if (verificaZeroNove(arrayNumeros)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (verificaNumeros(arrayNumeros)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let numeroString = `(${arrayNumeros[0]}${arrayNumeros[1]}) `;
  numeroString += `${arrayNumeros[2]}${arrayNumeros[3]}${arrayNumeros[4]}`;
  numeroString += `${arrayNumeros[5]}${arrayNumeros[6]}`;
  numeroString += `-${arrayNumeros[7]}${arrayNumeros[8]}${arrayNumeros[9]}${arrayNumeros[10]}`;
  return numeroString;
}

function verificaLado(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoA > Math.abs(ladoB - ladoC)) {
    return 1;
  }
  return 0;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (verificaLado(lineA, lineB, lineC)) {
    return true;
  }
  if (verificaLado(lineB, lineA, lineC)) {
    return true;
  }
  if (verificaLado(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

function contaBebidas(array) {
  let palavra = array.split(' ');
  let contaBebs = [];
  for (let contado of palavra) {
    if (
      parseInt(contado, 10) === 1
      || parseInt(contado, 10) === 2
      || parseInt(contado, 10) === 3
      || parseInt(contado, 10) === 4
      || parseInt(contado, 10) === 5
      || parseInt(contado, 10) === 6
      || parseInt(contado, 10) === 7
      || parseInt(contado, 10) === 8
      || parseInt(contado, 10) === 9
    ) {
      contaBebs.push(parseInt(contado, 10));
    }
  }
  return contaBebs;
}

// Desafio 13
function hydrate(bebidas) {
  let qtdAgua = '';
  let totalBebidas = 0;
  let qtdBebidas = contaBebidas(bebidas);

  for (let total of qtdBebidas) {
    if (total === 1) {
      totalBebidas += total;
    }
    if (total === 2) {
      totalBebidas += total;
    }
    if (total === 3) {
      totalBebidas += total;
    }
    if (total === 4) {
      totalBebidas += total;
    }
    if (total === 5) {
      totalBebidas += total;
    }
    if (total === 6) {
      totalBebidas += total;
    }
    if (total === 7) {
      totalBebidas += total;
    }
    if (total === 8) {
      totalBebidas += total;
    }
    if (total === 9) {
      totalBebidas += total;
    }
  }
  if (totalBebidas === 1) {
    qtdAgua = `${totalBebidas} copo de água`;
  }
  if (totalBebidas > 1) {
    qtdAgua = `${totalBebidas} copos de água`;
  }
  return qtdAgua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
