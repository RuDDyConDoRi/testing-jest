import { suma, resta } from '../operaciones';

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

describe('Probando Operaciones', () => {
  
  test('resta de elementos ', () => {
      expect(resta(100, 60)).toEqual(40);
  });

});