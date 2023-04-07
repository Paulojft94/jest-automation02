import { alineaH, mediaMultiplos, produtoMultiplos, quantidadeImpares, quantidadePares, somaDeImpares, somaDeMultiplosLimiteDesordenado, somaDePares } from "../../lab03/lab03_funcoes/funcoes03";

describe("test more operations on ranges", () => {
  describe("alinea a) sum of all numbers in a range", () => {
    test("end<=start should throw an error", () => {
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        somaDePares(start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const start: number = -1;
      const end: number = 4;
      expect(() => {
        somaDePares(start, end);
      }).toThrow("Invalid range input");
    });

    test("0-10 should return 30", () => {
      const start: number = 0;
      const end: number = 10;
      expect(somaDePares(start, end)).toBe(30);
    });
    test("1-11 should return 30", () => {
      const start: number = 1;
      const end: number = 11;
      expect(somaDePares(start, end)).toBe(30);
    });
  });

  describe("alinea b) amount of even numbers in a range", () => {
    test("end<=start should throw an error", () => {
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        quantidadePares(start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const start: number = -1;
      const end: number = 4;
      expect(() => {
        quantidadePares(start, end);
      }).toThrow("Invalid range input");
    });

    test("0-10 should return 6", () => {
      const start: number = 0;
      const end: number = 10;
      expect(quantidadePares(start, end)).toBe(6);
    });
    test("1-11 should return 5", () => {
      const start: number = 1;
      const end: number = 11;
      expect(quantidadePares(start, end)).toBe(5);
    });
  });

  describe("alinea c)amount of even numbers in a range", () => {
    test("end<=start should throw an error", () => {
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        somaDeImpares(start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const start: number = -1;
      const end: number = 4;
      expect(() => {
        somaDeImpares(start, end);
      }).toThrow("Invalid range input");
    });
    test("0-10 should return 25", () => {
      const start: number = 0;
      const end: number = 10;
      expect(somaDeImpares(start, end)).toBe(25);
    });
    test("1-11 should return 36", () => {
      const start: number = 1;
      const end: number = 11;
      expect(somaDeImpares(start, end)).toBe(36);
    });
  });
  describe("alinea d) amount of odd number in a range", () => {
    test("end<=start should throw an error", () => {
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        quantidadeImpares(start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const start: number = -1;
      const end: number = 4;
      expect(() => {
        quantidadeImpares(start, end);
      }).toThrow("Invalid range input");
    });
    test("0-10 should return 5", () => {
      const start: number = 0;
      const end: number = 10;
      expect(quantidadeImpares(start, end)).toBe(5);
    });
    test("1-11 should return 6", () => {
      const start: number = 1;
      const end: number = 11;
      expect(quantidadeImpares(start, end)).toBe(6);
    });
  });

  describe("alinea e) sum of multiples in a range", () => {
    test("m0 l1=0 l2=0 should throw an error", () => {
      const m1: number = 0;
      const lim1: number = 0;
      const lim2: number = 0;

      expect(() => {
        somaDeMultiplosLimiteDesordenado(m1, lim1, lim2);
      }).toThrow("Invalid range input");
    });

    test("m1 l1=-1 l2=0 should throw an error", () => {
      const m1: number = 1;
      const lim1: number = -1;
      const lim2: number = 0;

      expect(() => {
        somaDeMultiplosLimiteDesordenado(m1, lim1, lim2);
      }).toThrow("Invalid range input");
    });
    test("m1 l1=0 l2=-1 should throw an error", () => {
      const m1: number = 1;
      const lim1: number = 0;
      const lim2: number = -1;

      expect(() => {
        somaDeMultiplosLimiteDesordenado(m1, lim1, lim2);
      }).toThrow("Invalid range input");
    });

    test("lim1 menor que lim2 should order", () => {
      const m1: number = 3;
      const lim1: number = 0;
      const lim2: number = 10;

      expect(somaDeMultiplosLimiteDesordenado(m1, lim1, lim2)).toBe(18);
    });

    test("lim1 maior que lim2 should order", () => {
      const m1: number = 3;
      const lim1: number = 10;
      const lim2: number = 0;

      expect(somaDeMultiplosLimiteDesordenado(m1, lim1, lim2)).toBe(18);
    });

    test("lim1 igual lim2 should order", () => {
      const m1: number = 3;
      const lim1: number = 10;
      const lim2: number = 10;

      expect(somaDeMultiplosLimiteDesordenado(m1, lim1, lim2)).toBe(0);
    });
  });

  describe("alinea f) produto dos multiplos", () => {
    test("end<=start should throw an error", () => {
      const mult1: number = 1;
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        produtoMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const mult1: number = 1;
      const start: number = 0;
      const end: number = 4;
      expect(() => {
        produtoMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });
    test("mul1 <= 0 should throw an error", () => {
      const mult1: number = 0;
      const start: number = 1;
      const end: number = 4;
      expect(() => {
        produtoMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });

    test("product of multiples should return 162", () => {
      const m1: number = 3;
      const lim1: number = 1;
      const lim2: number = 10;

      expect(produtoMultiplos(m1, lim1, lim2)).toBe(162);
    });

    test("product of multiples should return 162", () => {
      const m1: number = 3;
      const lim1: number = 1;
      const lim2: number = 12;

      expect(produtoMultiplos(m1, lim1, lim2)).toBe(1944);
    });
  });
  describe("alinea g) mean of multiples of a number in a range", () => {
    test("end<=start should throw an error", () => {
      const mult1: number = 1;
      const start: number = 4;
      const end: number = 4;
      expect(() => {
        mediaMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });

    test("start<0 should throw an error", () => {
      const mult1: number = 1;
      const start: number = 0;
      const end: number = 4;
      expect(() => {
        mediaMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });
    test("mul1 <= 0 should throw an error", () => {
      const mult1: number = 0;
      const start: number = 1;
      const end: number = 4;
      expect(() => {
        mediaMultiplos(mult1, start, end);
      }).toThrow("Invalid range input");
    });
    test("mean of multiples should return 6", () => {
      const m1: number = 3;
      const lim1: number = 1;
      const lim2: number = 10;

      expect(mediaMultiplos(m1, lim1, lim2)).toBe(6);
    });
  });

  describe("alinea h) mean X/Y multiples in a range", () => {
    const m1: number = 3;
    const m2: number = 2;
    const lim1: number = 1;
    const lim2: number = 10;

    expect(alineaH(m1, m2, lim1, lim2)).toBe("6 6");
  });
});
