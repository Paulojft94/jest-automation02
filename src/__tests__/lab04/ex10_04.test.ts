import { multiplesOfN } from "../../lab04/lab04_funcoes/funcoes04";

describe("validate Exercício10: MúltiplosdeNNumDadoIntervalo(*)", () => {
  test("n2<n1 should throw an error", () => {
    const n1: number = 10;
    const n2: number = 5;
    const mul: number = 6;
    expect(() => {
      multiplesOfN(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("n2<0 should throw an error", () => {
    const n1: number = -10;
    const n2: number = -1;
    const mul: number = 6;
    expect(() => {
      multiplesOfN(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("mul==0 should throw an error", () => {
    const n1: number = 10;
    const n2: number = 20;
    const mul: number = 0;
    expect(() => {
      multiplesOfN(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("n2&n1==0 should [0]", () => {
    const n1: number = 0;
    const n2: number = 0;
    const mul: number = 1;
    expect(multiplesOfN(mul, n1, n2)).toStrictEqual([0]);
  });

  test("mul=1 should all numbers of the range", () => {
    const n1: number = 10;
    const n2: number = 20;
    const mul: number = 1;
    expect(multiplesOfN(mul, n1, n2)).toStrictEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
