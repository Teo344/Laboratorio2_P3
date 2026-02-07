
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('El valor debe ser un número entero mayor o igual a 0');
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }

  return result;
}


function fibonacci(n) {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('El valor debe ser un número entero mayor que 0');
  }

  const serie = [];

  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      serie.push(0);
    } else if (i === 1) {
      serie.push(1);
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }

  return serie;
}

module.exports = {
  factorial,
  fibonacci,
};
