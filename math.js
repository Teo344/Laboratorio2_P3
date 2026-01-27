
function fibonacci(n) {
  if (typeof n !== 'number' || n <= 0) {
    throw new Error('El parámetro debe ser un número mayor que 0');
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

module.exports = fibonacci;
