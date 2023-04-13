import { evenFilterArr } from "../../lab04/lab04_funcoes/funcoes04";

describe("Retornar Pares", () => {
  describe("testes do tipo par", () => {
    test("[0,2,4,6] should return [0,2,4,6]", () => {
      expect(evenFilterArr([0, 2, 4, 6])).toStrictEqual([0, 2, 4, 6]);
    });

    test("[1,3,5,7] should return []", () => {
      expect(evenFilterArr([1, 3, 5, 7])).toStrictEqual([]);
    });

    test("[1,-2,-1,6] should return [-2, 6]", () => {
      expect(evenFilterArr([1, -2, -1, 6])).toStrictEqual([-2, 6]);
    });

    test("[0, 0, 0, 1, 2] should return [0, 0, 0, 2]", () => {
      expect(evenFilterArr([0, 0, 0, 1, 2])).toStrictEqual([0, 0, 0, 2]);
    });

    test("[] should return []", () => {
      expect(evenFilterArr([])).toStrictEqual([]);
    });
  });
});
