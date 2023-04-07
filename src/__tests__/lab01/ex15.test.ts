import { numberCheckSum } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the checksummed number", () => {
  describe("test the throw error cases", () => {
    test("negative CC number should throw an error", () => {
      const cc: number = 0;
      const id: number = 3;
      expect(() => {
        numberCheckSum(cc, id);
      }).toThrow("Input must be type of INT and >0");
    });
    test("negative id number should throw an error", () => {
      const cc: number = 14258288;
      const id: number = -1;
      expect(() => {
        numberCheckSum(cc, id);
      }).toThrow("Input must be type of INT and >0");
    });

    test(">9 id number should throw an error", () => {
      const cc: number = 14258288;
      const id: number = 10;
      expect(() => {
        numberCheckSum(cc, id);
      }).toThrow("Input must be type of INT and >0");
    });
    test("CC number with <9 digits should throw an error", () => {
      const cc: number = 1425828;
      const id: number = 3;
      expect(() => {
        numberCheckSum(cc, id);
      }).toThrow("Input must be type of INT and >0");
    });
    test("CC number with >9 digits should throw an error", () => {
      const cc: number = 142582888;
      const id: number = 3;
      expect(() => {
        numberCheckSum(cc, id);
      }).toThrow("Input must be type of INT and >0");
    });
  });
  describe("test valid use cases", () => {
    test("cc:14258288 id:3 should return valid cc number", () => {
      const cc: number = 14258288;
      const id: number = 3;
      expect(numberCheckSum(cc, id)).toBe(true);
    });

    test("cc:0 id:9 should return invalid cc number", () => {
      const cc: number = 14258288;
      const id: number = 9;
      expect(numberCheckSum(cc, id)).toBe(false);
    });
    test("cc:0 id:9 should return invalid cc number", () => {
      const cc: number = 14258288;
      const id: number = 0;
      expect(numberCheckSum(cc, id)).toBe(false);
    });
    test("cc:14258288 id:2 should return invalid cc number", () => {
      const cc: number = 14258288;
      const id: number = 2;
      expect(numberCheckSum(cc, id)).toBe(false);
    });
  });
});
