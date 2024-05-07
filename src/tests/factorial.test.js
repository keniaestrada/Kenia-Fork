// Importar la función factorial
const { factorial, 
} = require('../factorial');

// Pruebas utilizando Jest
describe('Factorial function', () => {
  test('Factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial of 0 is 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial of -3 throws error', () => {
    expect(() => {
      factorial(-3);
    }).toThrow('No se puede calcular el factorial de un número negativo.');
  });

  test('Factorial of 3.5 throws error', () => {
    expect(() => {
      factorial(3.5);
    }).toThrow('El número debe ser un entero.');
  });
});