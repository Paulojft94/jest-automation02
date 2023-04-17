import { multiplesOfThree } from "../../lab04/lab04_funcoes/funcoes04";

describe("testar Múltiplos de 3 Num Dado Intervalo", () => {
  test("n2<n1 should throw an error", () => {
    const n1: number = 10;
    const n2: number = 5;
    expect(() => {
      multiplesOfThree(n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("n2<n1 should throw an error", () => {
    const n1: number = -10;
    const n2: number = -1;
    expect(() => {
      multiplesOfThree(n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("n1 e n2 ==0 should return [0]", () => {
    const n1: number = 0;
    const n2: number = 0;

    expect(multiplesOfThree(n1, n2)).toStrictEqual([0]);
  });

  test("n1=10 e n2 =20 should return [12,15, 18]", () => {
    const n1: number = 10;
    const n2: number = 20;

    expect(multiplesOfThree(n1, n2)).toStrictEqual([12, 15, 18]);
  });
});
