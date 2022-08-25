// Desafio 10
function techList(array, name) {
  if (array.length === 0 || name === '') return 'Vazio!';
  const sortedTechs = array.sort();
  const result = [];
  for (let techs of sortedTechs) {
    result.push({ tech: techs, name });
  }
  return result;
}

// Desafio 11
// conta a quantidade de vezes que o número se repete
function countNumber(array, numb) {
  let count = 0;
  for (let number of array) {
    if (number === numb) count += 1;
  }
  return count;
}
// verifica a quantidade que cada número aparece no array
function countAllNumbers(array) {
  for (let i = 0; i < 10; i += 1) {
    let contador = 0;
    contador = countNumber(array, i);
    if (contador >= 3) return true;
  }
  return false;
}
// verifica se o número é maior que 9 ou menor que 0
function numberVerify(array) {
  for (let number of array) {
    if (number < 0 || number > 9) return true;
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (numberVerify(array) || countAllNumbers(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = `(${array[0]}${array[1]})`;
  const part1 = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const part2 = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  return `${ddd} ${part1}-${part2}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) return true;
  return false;
}

// Desafio 13
// https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js
// console.log('1 cachaça, 5 cervejas e 1 copo de vinho'.replace(/[^0-9]/g, ''));

// https://www.youtube.com/watch?v=pfkkdzeyx6U&t=212s
// frase.match(/\d+/g);
function hydrate(drinks) {
  // const numberDrinks = drinks.replace(/[^0-9]/g, '').split('');  COM O PRIMEIRO LINK
  const numberDrinks = drinks.match(/\d+/g); // COM O SEGUNDO LINK
  let sumDinks = 0;
  for (let number of numberDrinks) {
    sumDinks += Number(number);
  }
  if (sumDinks !== 1) return `${sumDinks} copos de água`;
  return `${sumDinks} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
