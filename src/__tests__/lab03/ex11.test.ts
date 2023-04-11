import { returnIndexProduct } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the position of the acumulated product", () => {
  test("target 0 should throw an error", () => {
    const input: number[] = [1, 2, 3, 4];
    const tar: number = 0;

    expect(() => {
      returnIndexProduct(input, tar);
    }).toThrow("Input must be type of INT and >0");
  });

  test("index 0 should throw an error", () => {
    const input: number[] = [1, 2, 0, 4];
    const tar: number = 100;

    expect(() => {
      returnIndexProduct(input, tar);
    }).toThrow("Input must be type of INT and >0");
  });

  test("targe>prod should return -1", () => {
    const input: number[] = [1, 1, 1, 1];
    const tar: number = 2;
    expect(returnIndexProduct(input, tar)).toBe(-1);
  });

  test("random list performs the calculus well", () => {
    const input: number[] = [1, 2, 3, 4, 5];
    const tar: number = 95;
    expect(returnIndexProduct(input, tar)).toBe(4);
  });
  test("product ends equal to targe", () => {
    const input: number[] = [1, 2, 3, 4, 5];
    const tar: number = 120;
    expect(returnIndexProduct(input, tar)).toBe(-1);
  });
});
