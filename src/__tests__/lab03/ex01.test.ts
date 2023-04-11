import { forLoop } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the factorial number o x", () => {
  describe("test the positive cases", () => {
    test("2 should output a factorial of 2", () => {
      const input: number = 2;
      expect(forLoop(input)).toBe(2);
    });

    test("1 should output a factorial of 1", () => {
      const input: number = 1;
      expect(forLoop(input)).toBe(1);
    });
    test("10.2 should ouptu a factorial of 3628800", () => {
      const input: number = 10.2;
      expect(forLoop(input)).toBe(3628800);
    });
  });

  describe("test the negative cases", () => {
    test("0 should throw an Error", () => {
      const input: number = 0;
      expect(() => {
        forLoop(input);
      }).toThrow("The input value must be equal or higher than 1");
    });

    test("-1 should throw an Error", () => {
      const input: number = -1;
      expect(() => {
        forLoop(input);
      }).toThrow("The input value must be equal or higher than 1");
    });
    test("-10.1 should throw an Error", () => {
      const input: number = -10.1;
      expect(() => {
        forLoop(input);
      }).toThrow("The input value must be equal or higher than 1");
    });
  });
});
