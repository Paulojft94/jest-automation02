//testar número 0 e 1;
//testar um número perfeito
//testar um número abundante
//tstar um número reduzido

import { numberClass } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the number classification", () => {
  test("0 should throw an error", () => {
    const input: number = 0;
    expect(() => {
      numberClass(input);
    }).toThrow("Input must be type of INT and >0");
  });

  test("6 should return 0", () => {
    const input: number = 6;
    expect(numberClass(input)).toBe(0);
  });

  test("12 should return 1", () => {
    const input: number = 12;
    expect(numberClass(input)).toBe(1);
  });
  test("9 should return -1", () => {
    const input: number = 9;
    expect(numberClass(input)).toBe(-1);
  });
});
