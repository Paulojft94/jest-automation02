// testar 0, 1, 12, 123, 1111, 2020, 1313

import { numToArray } from "../../lab04/lab04_funcoes/funcoes04";

describe("Número para Array", () => {
  test("0 should return an error", () => {
    expect(() => {
      numToArray(0);
    }).toThrow("input number must be higher than 0");
  });

  test("1 should return [1]", () => {
    expect(numToArray(1)).toStrictEqual([1]);
  });

  test("12 should return [1, 2]", () => {
    expect(numToArray(12)).toStrictEqual([1, 2]);
  });

  test("123 should return [1, 2, 3]", () => {
    expect(numToArray(123)).toStrictEqual([1, 2, 3]);
  });

  test("1111 should return [1, 1, 1, 1]", () => {
    expect(numToArray(1111)).toStrictEqual([1, 1, 1, 1]);
  });

  test("2020 should return [2, 0, 2, 0]", () => {
    expect(numToArray(2020)).toStrictEqual([2, 0, 2, 0]);
  });
});
