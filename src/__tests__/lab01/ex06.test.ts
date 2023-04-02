import { multiplosA, multiplosB, multiplosC, multiplosD, multiplosE } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the multiple exercise", () => {
  describe("test the  the multiplosA function", () => {
    test("equal end and start should throw an error", () => {
      const start: number = 5;
      const end: number = 5;

      expect(() => {
        multiplosA(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end < start should throw an error", () => {
      const start: number = 0;
      const end: number = -1;

      expect(() => {
        multiplosA(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end and negative start should throw an error", () => {
      const start: number = -5;
      const end: number = -1;

      expect(() => {
        multiplosA(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative start should throw an error", () => {
      const start: number = -1;
      const end: number = 5;

      expect(() => {
        multiplosA(start, end);
      }).toThrow("Invalid range input");
    });
    test("range with no multiples of 3", () => {
      const start: number = 1;
      const end: number = 2;
      expect(multiplosA(start, end)).toBe(0);
    });

    test("range(2-13) should return 4", () => {
      const start: number = 2;
      const end: number = 13;
      expect(multiplosA(start, end)).toBe(4);
    });
  });

  describe("test the multiplosB function", () => {
    test("equal end and start should throw an error", () => {
      const start: number = 5;
      const end: number = 5;
      const mul: number = 0;

      expect(() => {
        multiplosB(mul, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end < start should throw an error", () => {
      const start: number = 0;
      const end: number = -1;
      const mul: number = -1;

      expect(() => {
        multiplosB(mul, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end and negative start should throw an error", () => {
      const start: number = -5;
      const end: number = -1;
      const mul: number = 10;

      expect(() => {
        multiplosB(mul, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative start should throw an error", () => {
      const start: number = -1;
      const end: number = 5;
      const mul: number = -1;

      expect(() => {
        multiplosB(mul, start, end);
      }).toThrow("Invalid range input");
    });

    test("multiples of 1 should return the range", () => {
      const start: number = 3;
      const end: number = 100;
      const mul: number = 1;
      expect(multiplosB(mul, start, end)).toBe(98);
    });
  });

  describe("test the  the multiplosC function", () => {
    test("equal end and start should throw an error", () => {
      const start: number = 5;
      const end: number = 5;

      expect(() => {
        multiplosC(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end < start should throw an error", () => {
      const start: number = 0;
      const end: number = -1;

      expect(() => {
        multiplosC(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end and negative start should throw an error", () => {
      const start: number = -5;
      const end: number = -1;

      expect(() => {
        multiplosC(start, end);
      }).toThrow("Invalid range input");
    });

    test("negative start should throw an error", () => {
      const start: number = -1;
      const end: number = 5;

      expect(() => {
        multiplosC(start, end);
      }).toThrow("Invalid range input");
    });

    test("range (10-20) should return: 3 3", () => {
      const start: number = 10;
      const end: number = 20;
      expect(multiplosC(start, end)).toBe("3 3");
    });
  });

  describe("test the multiplosD function", () => {
    test("equal end and start should throw an error", () => {
      const start: number = 5;
      const end: number = 5;
      const mul1: number = -1;
      const mul2: number = -1;

      expect(() => {
        multiplosD(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end < start should throw an error", () => {
      const start: number = 0;
      const end: number = -1;
      const mul1: number = 0;
      const mul2: number = 1;
      expect(() => {
        multiplosD(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end and negative start should throw an error", () => {
      const start: number = -5;
      const end: number = -1;
      const mul1: number = 1;
      const mul2: number = 0;

      expect(() => {
        multiplosD(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative start should throw an error", () => {
      const start: number = -1;
      const end: number = 5;
      const mul1: number = 0;
      const mul2: number = 0;
      expect(() => {
        multiplosD(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("range (10-20) should return: 3 3", () => {
      const start: number = 10;
      const end: number = 20;
      const mul1: number = 1;
      const mul2: number = 2;
      expect(multiplosD(mul1, mul2, start, end)).toBe("11 6");
    });
  });

  describe("test the multiplosD function", () => {
    test("equal end and start should throw an error", () => {
      const start: number = 5;
      const end: number = 5;
      const mul1: number = -1;
      const mul2: number = -1;

      expect(() => {
        multiplosE(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end < start should throw an error", () => {
      const start: number = 0;
      const end: number = -1;
      const mul1: number = 0;
      const mul2: number = 1;
      expect(() => {
        multiplosE(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative end and negative start should throw an error", () => {
      const start: number = -5;
      const end: number = -1;
      const mul1: number = 1;
      const mul2: number = 0;

      expect(() => {
        multiplosE(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("negative start should throw an error", () => {
      const start: number = -1;
      const end: number = 5;
      const mul1: number = 0;
      const mul2: number = 0;
      expect(() => {
        multiplosE(mul1, mul2, start, end);
      }).toThrow("Invalid range input");
    });

    test("range (10-20) should return: 3 3", () => {
      const start: number = 10;
      const end: number = 20;
      const mul1: number = 1;
      const mul2: number = 2;
      expect(multiplosE(mul1, mul2, start, end)).toBe(255);
    });

    test("range (10-20) should return: 3 3", () => {
      const start: number = 10;
      const end: number = 20;
      const mul1: number = 1;
      const mul2: number = 1;
      expect(multiplosE(mul1, mul2, start, end)).toBe(330);
    });
  });
});
