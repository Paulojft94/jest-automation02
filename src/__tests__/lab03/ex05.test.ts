/// testar 0, 499, 500
//testar 999, 1000, 1001

import { salarioCal } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the income tax calculator", () => {
  test("0 should throw an error", () => {
    const input: number = 0;

    expect(() => {
      salarioCal(input);
    }).toThrow("The salary amount should be above 0");
  });

  test("1 should return 0.9", () => {
    const input: number = 1;
    expect(salarioCal(input)).toBe(0.9);
  });

  test("499.9 should return 449.91", () => {
    const input: number = 499.9;
    expect(salarioCal(input)).toBe(449.91);
  });

  test("500 should return 425", () => {
    const input: number = 500;
    expect(salarioCal(input)).toBe(425);
  });

  test("999 should return 849.15", () => {
    const input: number = 999;
    expect(salarioCal(input)).toBe(849.15);
  });

  test("1000 should return 850", () => {
    const input: number = 1000;
    expect(salarioCal(input)).toBe(850);
  });

  test("1001 should return 849.15", () => {
    const input: number = 1001;
    expect(salarioCal(input)).toBe(800.8);
  });
});
