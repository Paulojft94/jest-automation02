import { multiplesOfN, multiplesOfNInRange } from "../../lab04/lab04_funcoes/funcoes04";

describe(" MúltiplosdeNNúmerosNumDadoIntervalo(*)", () => {
  test("n2<n1 should throw an error", () => {
    const n1: number = 10;
    const n2: number = 5;
    const mul: number[] = [3, 4];
    expect(() => {
      multiplesOfNInRange(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("n2<0 should throw an error", () => {
    const n1: number = -10;
    const n2: number = -1;
    const mul: number[] = [3, 4];
    expect(() => {
      multiplesOfNInRange(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("empty array should throw an error", () => {
    const n1: number = 10;
    const n2: number = 100;
    const mul: number[] = [];
    expect(() => {
      multiplesOfNInRange(mul, n1, n2);
    }).toThrowError("Input must be type of INT and >0");
  });

  test("none of elements have multiples in range", () => {
    const n1: number = 10;
    const n2: number = 100;
    const mul: number[] = [233, 234];
    expect(multiplesOfNInRange(mul, n1, n2)).toStrictEqual([]);
  });

  test("one element have multiples in range", () => {
    const n1: number = 10;
    const n2: number = 20;
    const mul: number[] = [3, 234];
    expect(multiplesOfNInRange(mul, n1, n2)).toStrictEqual([]);
  });

  test("all elements have multiples in range", () => {
    const n1: number = 10;
    const n2: number = 20;
    const mul: number[] = [3, 5];
    expect(multiplesOfNInRange(mul, n1, n2)).toStrictEqual([15]);
  });
});

//apenas um elemento do array tem numeros multiplos
//todos elementos do array tem numeros multiplos
