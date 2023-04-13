import { numAlgarismos } from "../../lab03/lab03_funcoes/funcoes03";

describe("Contador de dígitos de um número", () => {
  test("0 should return 1", () => {
    expect(() => {
      numAlgarismos(0);
    }).toThrow("Input must be type of INT and >0");
  });

  test("1 should return 1", () => {
    expect(numAlgarismos(1)).toBe(1);
  });

  test("10 should return 2", () => {
    expect(numAlgarismos(10)).toBe(2);
  });

  test("123 should return 3", () => {
    expect(numAlgarismos(123)).toBe(3);
  });
});
