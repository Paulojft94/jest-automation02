// testar 0 (fail)
//testar 1 (success)
//testar 20(success)

import { getCombinations } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the calculus to obtain a certain number", () => {
  describe("invalid use cases should throw an error", () => {
    test("0 should return an error", () => {
      const num: number = 0;
      expect(() => {
        getCombinations(num);
      }).toThrow("Input must be type of INT and >0");
    });

    test("21 should return an error", () => {
      const num: number = 21;
      expect(() => {
        getCombinations(num);
      }).toThrow("Input must be type of INT and >0");
    });
  });
  describe("valid use cases should throw de calculus", () => {
    test("1 should return 0+1 and 1+0", () => {
      const num: number = 1;
      expect(getCombinations(num)).toBe("0+1 1+0 ");
    });
    test("20 should the correct calculus", () => {
      const num: number = 20;
      expect(getCombinations(num)).toBe("0+20 1+19 2+18 3+17 4+16 5+15 6+14 7+13 8+12 9+11 10+10 11+9 12+8 13+7 14+6 15+5 16+4 17+3 18+2 19+1 20+0 ");
    });
  });
});
