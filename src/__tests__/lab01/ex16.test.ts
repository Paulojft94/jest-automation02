import { orderEvenList, organizeNumbers } from "../../lab03/lab03_funcoes/funcoes03";

//lista só de pares
//lista de impares
//lista para obter output igual ao input
//lista aleatória
//"Input must be type of INT and >0"

describe("Odd and Even segregation", () => {
  describe("test the invalid use cases", () => {
    test("even list with negative number should throw an error", () => {
      const list: number[] = [2, 4, 6, -1, 8];
      expect(() => {
        orderEvenList(list);
      }).toThrow("Input must be type of INT and >0");
    });

    test("empty list should throw an error", () => {
      const list: number[] = [];
      expect(() => {
        organizeNumbers(list);
      }).toThrow("Input must be type of INT and >0");
    });

    test("odd list with negative number should throw an error", () => {
      const list: number[] = [1, 3, 5, -1, 9];
      expect(() => {
        organizeNumbers(list);
      }).toThrow("Input must be type of INT and >0");
    });

    test("even list with 10 should throw an error", () => {
      const list: number[] = [2, 4, 6, 10, 8];
      expect(() => {
        orderEvenList(list);
      }).toThrow("Input must be type of INT and >0");
    });

    test("odd list with >9 should throw an error", () => {
      const list: number[] = [1, 3, 5, 5, 9, 12];
      expect(() => {
        organizeNumbers(list);
      }).toThrow("Input must be type of INT and >0");
    });

    test("empty list should throw an error", () => {
      const list: number[] = [1, 3, 5, 5, 9, 12];
      expect(() => {
        organizeNumbers(list);
      }).toThrow("Input must be type of INT and >0");
    });
  });
  describe("test the valid use cases", () => {
    test("only even list should return even numbers", () => {
      const list: number[] = [2, 4, 6, 8];
      expect(organizeNumbers(list)).toBe(" 2,4,6,8");
    });
    test("only odd list should return odd numbers", () => {
      const list: number[] = [1, 3, 5, 7, 9];
      expect(organizeNumbers(list)).toBe("1,3,5,7,9 ");
    });

    test("output list is equal to the input list", () => {
      const list: number[] = [1, 3, 5, 7, 9, 2, 4, 6, 8];
      expect(organizeNumbers(list)).toBe("1,3,5,7,9 2,4,6,8");
    });

    test("random list should be segregated as eexpected", () => {
      const list: number[] = [1, 4, 7, 6, 7, 8, 3, 5];
      expect(organizeNumbers(list)).toBe("1,7,7,3,5 4,6,8");
    });
  });
});
