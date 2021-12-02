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
      ultimoPrimeiro += ', ' + arrayPalavras[i];
    }
  }
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 0;
  let pointsTie = 0;
  let totalPoints = 0;
  for (let i = 0; i < wins; i += 1) {
    pointsWin += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    pointsTie += 1;
  }
  totalPoints = pointsWin + pointsTie;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0, distanciaCat2 = 0;
  if (mouse > cat1) {
    distanciaCat1 = mouse - cat1;
  } else { 
    distanciaCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distanciaCat2 = mouse - cat2;
  } else { 
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayFB = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 != 0) {
      arrayFB.push("fizz");
    } else if (arrayNumeros[i] % 5 === 0 && arrayNumeros[i] % 3 != 0) {
      arrayFB.push("buzz");
    } else if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 ===0) {
      arrayFB.push("fizzBuzz");
    } else {
      arrayFB.push("bug!");
    }
  }
  return arrayFB;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
