//testar horas extra negativas

import { salarioMensal } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the remuneration", () => {
  test("base salary <=0 should throw an error", () => {
    const base: number = 0;
    const extra: number = 3;
    expect(() => {
      salarioMensal(base, extra);
    }).toThrow("Input must be type of INT and >0");
  });

  test("<0 extra hours should throw an error", () => {
    const base: number = 500;
    const extra: number = -1;
    expect(() => {
      salarioMensal(base, extra);
    }).toThrow("Input must be type of INT and >0");
  });

  test("base salary with 0 extra hours should return the base salary", () => {
    const base: number = 500;
    const extra: number = 0;
    expect(salarioMensal(base, extra)).toBe(500);
  });

  test("base salary with 10 extra hours should return 600", () => {
    const base: number = 500;
    const extra: number = 10;
    expect(salarioMensal(base, extra)).toBe(600);
  });
});
