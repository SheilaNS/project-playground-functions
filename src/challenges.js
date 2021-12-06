// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let palavra = frase.split(' ');
  return palavra;
}

// Desafio 4
function concatName(arrayPalavras) {
  let ultimoPrimeiro = '';
  for (let i = arrayPalavras.length; i >= 0; i -= 1) {
    if (i === arrayPalavras.length - 1) {
      ultimoPrimeiro += arrayPalavras[i];
    }
    if (i === 0) {
      ultimoPrimeiro += `, ${arrayPalavras[i]}`;
    }
  }
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 0;
  let pointsTie = 0;
  for (let i = 0; i < wins; i += 1) {
    pointsWin += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    pointsTie += 1;
  }
  return pointsWin + pointsTie;
}

function achaMaior(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maior = achaMaior(numeros);
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}

function distanciaGato(rato, gato) {
  if (rato > gato) {
    return rato - gato;
  }
  return gato - rato;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = distanciaGato(mouse, cat1);
  let distanciaCat2 = distanciaGato(mouse, cat2);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayFB = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      arrayFB.push('fizzBuzz');
    } else if (arrayNumeros[i] % 5 === 0) {
      arrayFB.push('buzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      arrayFB.push('fizz');
    } else {
      arrayFB.push('bug!');
    }
  }
  return arrayFB;
}

// Desafio 9
function encode(codifica) {
  let codificado = codifica.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return codificado;
}
function decode(descodifica) {
  let descodificado = descodifica.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return descodificado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
