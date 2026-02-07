const { factorial, fibonacci } = require('./math');

describe('Pruebas de funciones matemáticas', () => {
  // =========================
  // Tests para factorial
  // =========================
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(110);
  });

  test('factorial debe lanzar error con número negativo', () => {
    expect(() => factorial(-1)).toThrow(Error);
  });

  // =========================
  // Tests para fibonacci
  // =========================
  test('fibonacci con 1 elemento debe retornar [0]', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test('fibonacci con 5 elementos debe retornar la serie correcta', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('fibonacci debe lanzar error si n es 0', () => {
    expect(() => fibonacci(0)).toThrow(Error);
  });
});
