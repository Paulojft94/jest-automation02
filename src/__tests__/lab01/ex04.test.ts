import { qualityClass } from "../../lab03/lab03_funcoes/funcoes03";

describe("test qualitative classification", () => {
  test("-1 should throw an error", () => {
    const input: number = -1;
    expect(() => {
      qualityClass(input);
    }).toThrow("Values must comprehended between 0 and 20");
  });
  test("21 should throw an error", () => {
    const input: number = 21;
    expect(() => {
      qualityClass(input);
    }).toThrow("Values must comprehended between 0 and 20");
  });

  test("0 should return Mau", () => {
    const input: number = 0;
    expect(qualityClass(input)).toBe("Mau");
  });
  test("1 should return Mau", () => {
    const input: number = 1;
    expect(qualityClass(input)).toBe("Mau");
  });
  test("3 should return Mau", () => {
    const input: number = 3;
    expect(qualityClass(input)).toBe("Mau");
  });
  test("4 should return Mau", () => {
    const input: number = 4;
    expect(qualityClass(input)).toBe("Mau");
  });

  test("5 should return Medíocre", () => {
    const input: number = 5;
    expect(qualityClass(input)).toBe("Medíocre");
  });

  test("6 should return Medíocre", () => {
    const input: number = 6;
    expect(qualityClass(input)).toBe("Medíocre");
  });

  test("8 should return Medíocre", () => {
    const input: number = 8;
    expect(qualityClass(input)).toBe("Medíocre");
  });

  test("9 should return Medíocre", () => {
    const input: number = 9;
    expect(qualityClass(input)).toBe("Medíocre");
  });

  test("10 should return Suficiente", () => {
    const input: number = 10;
    expect(qualityClass(input)).toBe("Suficiente");
  });

  test("11 should return Suficiente", () => {
    const input: number = 11;
    expect(qualityClass(input)).toBe("Suficiente");
  });

  test("13 should return Suficiente", () => {
    const input: number = 13;
    expect(qualityClass(input)).toBe("Suficiente");
  });

  test("14 should return Bom", () => {
    const input: number = 14;
    expect(qualityClass(input)).toBe("Bom");
  });

  test("17 should return Bom", () => {
    const input: number = 17;
    expect(qualityClass(input)).toBe("Bom");
  });

  test("18 should return Muito Bom", () => {
    const input: number = 18;
    expect(qualityClass(input)).toBe("Muito Bom");
  });

  test("20 should return Muito Bom", () => {
    const input: number = 20;
    expect(qualityClass(input)).toBe("Muito Bom");
  });
});
