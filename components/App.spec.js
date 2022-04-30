import {mixCards, countingTime, blockCards} from './App.js';

describe("Mezcla aleatoria de tarjetas", () => {
  test("Debería ser una función", () => {
    expect(typeof mixCards).toBe("function")
  });

})

describe("Contador de tiempo", () => {
  test("Debería ser una función", () => {
    expect(typeof countingTime).toBe("function")
  });

})

describe("Todas las cartas arriba", () => {
  test("Debería ser una función", () => {
    expect(typeof blockCards).toBe("function")
  });

})