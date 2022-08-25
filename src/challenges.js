// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  const split = [];
  let word = '';
  for (let index in sentence) {
    if (sentence[index] === ' ' || index === sentence.length) {
      split.push(word);
      word = '';
    } else word += sentence[index];
  }
  split.push(word);
  return split;
  // return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  let result = array[array.length - 1];
  result += ', ';
  result += array[0];
  return result;
  // return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
// verifica qual o maior número do array
function verifyBiggestNumber(array) {
  let bigger = array[0];
  for (let number of array) {
    if (number > bigger) bigger = number;
  }
  return bigger;
}
// conta quantas vezes esse número aparece no array
function countBiggestNumber(array, numb) {
  let count = 0;
  for (let number of array) {
    if (numb === number) count += 1;
  }
  return count;
}

function highestCount(array) {
  let bigger = verifyBiggestNumber(array);
  return countBiggestNumber(array, bigger);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(mouse - cat1);
  const distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) return 'cat1';
  if (distCat2 < distCat1) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fiveAndThreeModule(numb, array) {
  if (numb % 3 === 0 && numb % 5 === 0) {
    return array.push('fizzBuzz');
  }
}

function threeModule(numb, array) {
  if (numb % 3 === 0 && numb % 5 !== 0) {
    return array.push('fizz');
  }
}

function fiveModule(numb, array) {
  if (numb % 3 !== 0 && numb % 5 === 0) {
    return array.push('buzz');
  }
}

function nodeModule(numb, array) {
  if (numb % 3 !== 0 && numb % 5 !== 0) {
    return array.push('bug!');
  }
}

function fizzBuzz(array) {
  const result = [];
  for (let number of array) {
    fiveAndThreeModule(number, result);
    threeModule(number, result);
    fiveModule(number, result);
    nodeModule(number, result);
  }
  return result;
}

// OUTRA FORMA DE FAZER - sem considerar o lint

// function fizzBuzz(array) {
// const result = [];
// for (let number of array) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     result.push('fizzBuzz');
//   } else if (number % 3 === 0) {
//     result.push('fizz');
//   } else if (number % 5 === 0) {
//     result.push('buzz');
//   } else result.push('bug!');
// }
// return result;
// }

// Desafio 9
function encode(code) {
  const coded = code.replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return coded;
}
function decode(code) {
  const decoded = code.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return decoded;
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
