import { oddFilterArr } from "../../lab04/lab04_funcoes/funcoes04";

describe("Retornar Pares", () => {
  describe("testes do tipo par", () => {
    test("[0,2,4,6] should return []", () => {
      expect(oddFilterArr([0, 2, 4, 6])).toStrictEqual([]);
    });

    test("[1,3,5,7] should return [1, 3, 5, 7]", () => {
      expect(oddFilterArr([1, 3, 5, 7])).toStrictEqual([1, 3, 5, 7]);
    });

    test("[1,-2,-1,6] should return [1, -1]", () => {
      expect(oddFilterArr([1, -2, -1, 6])).toStrictEqual([1]);
    });

    test("[0, 0, 0, 1, 2] should return [1]", () => {
      expect(oddFilterArr([0, 0, 0, 1, 2])).toStrictEqual([1]);
    });

    test("[] should return []", () => {
      expect(oddFilterArr([])).toStrictEqual([]);
    });
  });
});

//com o type impar
//todos números pares, nenhum numero par
//com números negativos
//com 0
//vazio
