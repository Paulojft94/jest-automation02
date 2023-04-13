// n < 0, n =0; n=1; invalid Nth variable value
// n =length, n > length;
// valor intermédio

import { nFilter } from "../../lab04/lab04_funcoes/funcoes04";

describe("Primeiros N Elementos do Array", () => {
  const num: number[] = [1, 2, 3, 4, 5, 6];

  test("n<0 should throw an error", () => {
    const nth: number = -1;
    expect(() => {
      nFilter(num, nth);
    }).toThrow("invalid Nth variable value");
  });

  test("n=0 should throw an error", () => {
    const nth: number = 0;
    expect(() => {
      nFilter(num, nth);
    }).toThrow("invalid Nth variable value");
  });

  test("n>length should throw an error", () => {
    const nth: number = num.length + 1;
    expect(() => {
      nFilter(num, nth);
    }).toThrow("invalid Nth variable value");
  });

  test("n=length should return equal to the input", () => {
    const nth: number = num.length;
    expect(nFilter(num, nth)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("n=1 should return 1", () => {
    const nth: number = 1;
    expect(nFilter(num, nth)).toStrictEqual([1]);
  });

  test("n=3 should return 3", () => {
    const nth: number = 3;
    expect(nFilter(num, nth)).toStrictEqual([1, 2, 3]);
  });
});
