// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let palavra = frase.split(" ");
  return palavra;
}

// Desafio 4
function concatName(arrayPalavras) {
  let ultimoPrimeiro = "";
  for (let i = arrayPalavras.length; i >= 0; i--) {
    if (i === arrayPalavras.length - 1) {
      ultimoPrimeiro += arrayPalavras[i];
    }
    if (i === 0) {
      ultimoPrimeiro += ", " + arrayPalavras[i];
    }
  }
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
