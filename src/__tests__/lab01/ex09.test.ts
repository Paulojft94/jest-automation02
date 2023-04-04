import { amountAmstroungs, amountOfCapicuas, findFirstAmstroung, findFirstCapicua, findLastCapicua, isAmstrong, isCapicua } from "../../lab03/lab03_funcoes/funcoes03";

describe("validate capicuas and amstrong numbers", () => {
  describe("alinea a) capicua number", () => {
    test("all equal number should return true", () => {
      const input: number = 1111;
      expect(isCapicua(input)).toBe(true);
    });
    test("non capicua should return false", () => {
      const input: number = 1121;
      expect(isCapicua(input)).toBe(false);
    });
    test("capicua should return true", () => {
      const input: number = 123321;
      expect(isCapicua(input)).toBe(true);
    });
    test("negative capicua should return true", () => {
      const input: number = -123321;
      expect(isCapicua(input)).toBe(true);
    });
    test("negative capicua should return true", () => {
      const input: number = 1;
      expect(isCapicua(input)).toBe(true);
    });
  });

  describe("alinea b) amstrong number", () => {
    test("0 should throw an error", () => {
      const input: number = 0;
      expect(() => {
        isAmstrong(input);
      }).toThrow("Input must be type of INT and >0");
    });

    test("1 should return true", () => {
      const input: number = 1;
      expect(isAmstrong(input)).toBe(true);
    });

    test("153 should return true", () => {
      const input: number = 153;

      expect(isAmstrong(input)).toBe(true);
    });
    test("127 should return false", () => {
      const input: number = 127;

      expect(isAmstrong(input)).toBe(false);
    });
  });

  describe("alinea C) first capicua", () => {
    test("num1<0 should throw an error", () => {
      const in1: number = -1;
      const in2: number = 1;
      expect(() => {
        findFirstCapicua(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("num2<0 should throw an error", () => {
      const in1: number = 1;
      const in2: number = -1;
      expect(() => {
        findFirstCapicua(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("no capicua should return -1", () => {
      const in1: number = 102;
      const in2: number = 109;
      expect(findFirstCapicua(in1, in2)).toBe(-1);
    });

    test("100-105 should return 101 as first capicua", () => {
      const in1: number = 100;
      const in2: number = 105;
      expect(findFirstCapicua(in1, in2)).toBe(101);
    });
  });

  describe("alinea D) highest capicua", () => {
    test("100-200 should return 191 as highest capicua", () => {
      const in1: number = 100;
      const in2: number = 200;
      expect(findLastCapicua(in1, in2)).toBe(191);
    });

    test("num1<0 should throw an error", () => {
      const in1: number = -1;
      const in2: number = 1;
      expect(() => {
        findLastCapicua(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("num2<0 should throw an error", () => {
      const in1: number = 1;
      const in2: number = -1;
      expect(() => {
        findLastCapicua(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("no capicua should return -1", () => {
      const in1: number = 102;
      const in2: number = 109;
      expect(findLastCapicua(in1, in2)).toBe(-1);
    });
  });

  describe("alinea e) number of capicuas", () => {
    test("num1<0 should throw an error", () => {
      const in1: number = -1;
      const in2: number = 1;
      expect(() => {
        amountOfCapicuas(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("num2<0 should throw an error", () => {
      const in1: number = 1;
      const in2: number = -1;
      expect(() => {
        amountOfCapicuas(in1, in2);
      }).toThrow("inputs must be >=0");
    });
    test("78-87 should return 0", () => {
      const in1: number = 78;
      const in2: number = 87;
      expect(amountOfCapicuas(in1, in2)).toBe(0);
    });
    test("0-100 should return 19", () => {
      const in1: number = 0;
      const in2: number = 100;
      expect(amountOfCapicuas(in1, in2)).toBe(19);
    });
  });
  describe("alinea f) return the first amstrong number", () => {
    test("num1<0 should throw an error", () => {
      const in1: number = -1;
      const in2: number = 1;
      expect(() => {
        findFirstAmstroung(in1, in2);
      }).toThrow("inputs must be >=0");
    });

    test("num2<0 should throw an error", () => {
      const in1: number = 1;
      const in2: number = -1;
      expect(() => {
        findFirstAmstroung(in1, in2);
      }).toThrow("inputs must be >=0");
    });
    test("120-160 should return 153", () => {
      const in1: number = 120;
      const in2: number = 160;
      expect(findFirstAmstroung(in1, in2)).toBe(153);
    });

    test("120-129 should return -1", () => {
      const in1: number = 120;
      const in2: number = 129;
      expect(findFirstAmstroung(in1, in2)).toBe(-1);
    });
  });

  describe("alinea g) return a quantidade de amstrongs", () => {
    //0amstrongs
    //ams
    test("120-160 should return 153", () => {
      const in1: number = 120;
      const in2: number = 160;
      expect(amountAmstroungs(in1, in2)).toBe(1);
    });
    test("120-129 should return 0", () => {
      const in1: number = 120;
      const in2: number = 129;
      expect(amountAmstroungs(in1, in2)).toBe(0);
    });
  });
});
