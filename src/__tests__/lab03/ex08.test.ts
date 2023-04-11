//numero positivo com 1, 2, 3 digitos
// num 0 (fail)
//num real
//

import { amountOfEvenDigits, amountOfOddDigits, invertNumber, meanOddDigits, meanOfEvenDigits, meanOflgarisms, numAlgarismos, sumOfAlgarisms, sumOfEvenAlgarisms, sumOfOddAlgarisms } from "../../lab03/lab03_funcoes/funcoes03";

describe("Validate algarisms of given number", () => {
  describe("alinea a) num algarisms of a given number", () => {
    test("1 should return 1", () => {
      expect(numAlgarismos(1)).toBe(1);
    });
    test("10 should return 2", () => {
      expect(numAlgarismos(10)).toBe(2);
    });
    test("100 should return 3", () => {
      expect(numAlgarismos(100)).toBe(3);
    });
    test("1000 should return 4", () => {
      expect(numAlgarismos(1000)).toBe(4);
    });
    test("1.1 should throw an error", () => {
      expect(() => {
        numAlgarismos(1.1);
      }).toThrow("Input must be type of INT and >0");
    });
    test("0 should throw an error", () => {
      expect(() => {
        numAlgarismos(0);
      }).toThrow("Input must be type of INT and >0");
    });
  });
  describe("alinea b) num of even numbers in a number", () => {
    test("1.1 should throw an error", () => {
      expect(() => {
        amountOfEvenDigits(1.1);
      }).toThrow("Input must be type of INT and >0");
    });

    test("0 should throw an error", () => {
      expect(() => {
        amountOfEvenDigits(0);
      }).toThrow("Input must be type of INT and >0");
    });

    test("2 should return 1", () => {
      expect(amountOfEvenDigits(2)).toBe(1);
    });

    test("12 should return 1", () => {
      expect(amountOfEvenDigits(12)).toBe(1);
    });
    test("21 should return 1", () => {
      expect(amountOfEvenDigits(21)).toBe(1);
    });
    test("22 should return 2", () => {
      expect(amountOfEvenDigits(22)).toBe(2);
    });

    test("111 should return 0", () => {
      expect(amountOfEvenDigits(111)).toBe(0);
    });
    test("212 should return 2", () => {
      expect(amountOfEvenDigits(212)).toBe(2);
    });
    test("121 should return 1", () => {
      expect(amountOfEvenDigits(121)).toBe(1);
    });
  });
  describe("alinea c) number of odd algarisms in a given number", () => {
    test("12 should return 1", () => {
      expect(amountOfOddDigits(12)).toBe(1);
    });
    test("21 should return 1", () => {
      expect(amountOfOddDigits(21)).toBe(1);
    });
    test("22 should return 0", () => {
      expect(amountOfOddDigits(22)).toBe(0);
    });

    test("111 should return 3", () => {
      expect(amountOfOddDigits(111)).toBe(3);
    });
    test("212 should return 1", () => {
      expect(amountOfOddDigits(212)).toBe(1);
    });
    test("121 should return 2", () => {
      expect(amountOfOddDigits(121)).toBe(2);
    });
  });

  describe("alinea d) sum of algarisms in a given number", () => {
    test("0 should throw an error", () => {
      expect(() => {
        sumOfAlgarisms(0);
      }).toThrow("Input must be type of INT and >0");
    });
    test("1 should return 1", () => {
      expect(sumOfAlgarisms(1)).toBe(1);
    });
    test("100 should return 1", () => {
      expect(sumOfAlgarisms(100)).toBe(1);
    });
    test("123 should return 6", () => {
      expect(sumOfAlgarisms(123)).toBe(6);
    });
    test("1010 should return 2", () => {
      expect(sumOfAlgarisms(1010)).toBe(2);
    });
  });

  describe("alinea e) sum of even algarisms in a number", () => {
    // 2, 10, 11, 22, 1010, 1212, 2222, 4040
    test("0 should throw an error", () => {
      expect(() => {
        sumOfEvenAlgarisms(0);
      }).toThrow("Input must be type of INT and >0");
    });
    test("2 should return 2", () => {
      expect(sumOfEvenAlgarisms(2)).toBe(2);
    });
    test("10 should return 0", () => {
      expect(sumOfEvenAlgarisms(10)).toBe(0);
    });
    test("11 should return 0", () => {
      expect(sumOfEvenAlgarisms(11)).toBe(0);
    });
    test("22 should return 4", () => {
      expect(sumOfEvenAlgarisms(22)).toBe(4);
    });
    test("1010 should return 0", () => {
      expect(sumOfEvenAlgarisms(1010)).toBe(0);
    });
    test("1212 should return 4", () => {
      expect(sumOfEvenAlgarisms(1212)).toBe(4);
    });
    test("2222 should return 8", () => {
      expect(sumOfEvenAlgarisms(2222)).toBe(8);
    });
    test("4040 should return 8", () => {
      expect(sumOfEvenAlgarisms(4040)).toBe(8);
    });
  });

  describe("alinea f) sum of odd algarisms in a number", () => {
    test("0 should throw an error", () => {
      expect(() => {
        sumOfOddAlgarisms(0);
      }).toThrow("Input must be type of INT and >0");
    });

    test("1 should return 1", () => {
      expect(sumOfOddAlgarisms(1)).toBe(1);
    });
    test("10 should return 0", () => {
      expect(sumOfOddAlgarisms(10)).toBe(1);
    });
    test("11 should return 2", () => {
      expect(sumOfOddAlgarisms(11)).toBe(2);
    });
    test("22 should return 0", () => {
      expect(sumOfOddAlgarisms(22)).toBe(0);
    });
    test("1010 should return 2", () => {
      expect(sumOfOddAlgarisms(1010)).toBe(2);
    });
    test("1212 should return 2", () => {
      expect(sumOfOddAlgarisms(1212)).toBe(2);
    });
    test("3333 should return 12", () => {
      expect(sumOfOddAlgarisms(3333)).toBe(12);
    });
    test("5050 should return 10", () => {
      expect(sumOfOddAlgarisms(5050)).toBe(10);
    });
  });

  describe("alinea f) mean of algarisms", () => {
    test("0 should throw an error", () => {
      expect(() => {
        meanOflgarisms(0);
      }).toThrow("Input must be type of INT and >0");
    });
    test("1 should return 1", () => {
      expect(meanOflgarisms(1)).toBe(1);
    });
    test("100 should return 0.33", () => {
      expect(meanOflgarisms(100)).toBe(0.33);
    });
    test("123 should return 2", () => {
      expect(meanOflgarisms(123)).toBe(2);
    });
    test("1010 should return 0.5", () => {
      expect(meanOflgarisms(1010)).toBe(0.5);
    });
  });
  describe("alinea h) mean of even alagarisms in a number", () => {
    test("0 should throw an error", () => {
      expect(() => {
        meanOfEvenDigits(0);
      }).toThrow("Input must be type of INT and >0");
    });
    test("2 should return 2", () => {
      expect(meanOfEvenDigits(2)).toBe(2);
    });
    test("10 should return 0", () => {
      expect(meanOfEvenDigits(10)).toBe(0);
    });
    test("11 should return 0", () => {
      expect(meanOfEvenDigits(11)).toBe(0);
    });
    test("22 should return 2", () => {
      expect(meanOfEvenDigits(22)).toBe(2);
    });
    test("1010 should return 0", () => {
      expect(meanOfEvenDigits(1010)).toBe(0);
    });
    test("1212 should return 2", () => {
      expect(meanOfEvenDigits(1212)).toBe(2);
    });
    test("2222 should return 2", () => {
      expect(meanOfEvenDigits(2222)).toBe(2);
    });
    test("4040 should return 2", () => {
      expect(meanOfEvenDigits(4040)).toBe(2);
    });
  });

  describe("alinea i) mean of odd algarisms in a number", () => {
    test("0 should throw an error", () => {
      expect(() => {
        meanOddDigits(0);
      }).toThrow("Input must be type of INT and >0");
    });

    test("1 should return 1", () => {
      expect(meanOddDigits(1)).toBe(1);
    });
    test("10 should return 1", () => {
      expect(meanOddDigits(10)).toBe(1);
    });
    test("11 should return 1", () => {
      expect(meanOddDigits(11)).toBe(1);
    });
    test("22 should return 0", () => {
      expect(meanOddDigits(22)).toBe(0);
    });
    test("1010 should return 1", () => {
      expect(meanOddDigits(1010)).toBe(1);
    });
    test("1212 should return 1", () => {
      expect(meanOddDigits(1212)).toBe(1);
    });
    test("3333 should return 3", () => {
      expect(meanOddDigits(3333)).toBe(3);
    });
    test("5050 should return 5", () => {
      expect(meanOddDigits(5050)).toBe(5);
    });
  });
  describe("alinea j) invert a given number", () => {
    test("10 should return 01", () => {
      expect(invertNumber(10)).toBe("01");
    });
    test("123 should return 321", () => {
      expect(invertNumber(123)).toBe("321");
    });
    test("1010 should return 0101", () => {
      expect(invertNumber(1010)).toBe("0101");
    });
    test("1212 should return 2121", () => {
      expect(invertNumber(1212)).toBe("2121");
    });
    test("1221 should return 1221", () => {
      expect(invertNumber(1221)).toBe("1221");
    });
  });
});
