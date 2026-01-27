const fibonacci = require('./math.js');

let numero=0;

describe('Función Fibonacci', () => {
  test('retorna la serie correcta con 5 elementos', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('retorna [0] cuando n = 1', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test('lanza error si n es inválido', () => {
    expect(() => fibonacci(0)).toThrow();
  });
});
