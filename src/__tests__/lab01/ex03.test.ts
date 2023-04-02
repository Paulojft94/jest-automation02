//testar  1, 1.1,
//testar 2, 2.1, 3.9, 4
// testar 5, 6, 7, 8
//testar 14, 15,

import { productDescription } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the description of product", () => {
  test("0 should throw Alimento não perecível", () => {
    const input: number = 0;
    expect(productDescription(input)).toBe("Alimento não perecível");
  });

  test("16 should throw Alimento não perecível", () => {
    const input: number = 16;
    expect(productDescription(input)).toBe("Alimento não perecível");
  });

  test("15 should return Limpeza e utensílios domésticos", () => {
    const input: number = 15;
    expect(productDescription(input)).toBe("Limpeza e utensílios domésticos");
  });

  test("14 should return Limpeza e utensílios domésticos", () => {
    const input: number = 14;
    expect(productDescription(input)).toBe("Limpeza e utensílios domésticos");
  });

  test("9 should return Limpeza e utensílios domésticos", () => {
    const input: number = 9;
    expect(productDescription(input)).toBe("Limpeza e utensílios domésticos");
  });

  test("8 should return Limpeza e utensílios domésticos", () => {
    const input: number = 8;
    expect(productDescription(input)).toBe("Limpeza e utensílios domésticos");
  });

  test("7 should return Higiene pessoal", () => {
    const input: number = 7;
    expect(productDescription(input)).toBe("Higiene pessoal");
  });

  test("6 should return Vestuário", () => {
    const input: number = 6;
    expect(productDescription(input)).toBe("Vestuário");
  });

  test("5 should return Vestuário", () => {
    const input: number = 5;
    expect(productDescription(input)).toBe("Vestuário");
  });

  test("4 should return Alimento perecível", () => {
    const input: number = 4;
    expect(productDescription(input)).toBe("Alimento perecível");
  });

  test("3 should return Alimento perecível", () => {
    const input: number = 3;
    expect(productDescription(input)).toBe("Alimento perecível");
  });

  test("2 should return Alimento perecível", () => {
    const input: number = 2;
    expect(productDescription(input)).toBe("Alimento perecível");
  });

  test("1 should return Alimento não perecível", () => {
    const input: number = 1;
    expect(productDescription(input)).toBe("Alimento não perecível");
  });

  test("1.1 should return Alimento não perecível", () => {
    const input: number = 1.1;
    expect(productDescription(input)).toBe("Alimento não perecível");
  });
});
