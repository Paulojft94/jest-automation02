//número 0 e 1 para cada Currency
//negativo
//float para cada currency
//Cambio existente
//cambio inexistente
// cambio com string vazia

import { cambioDetection } from "../../lab03/lab03_funcoes/funcoes03";

describe("Test câmbio functions", () => {
  describe("test dollar cambio", () => {
    test("1 dollar should return 1.53 euros", () => {
      const value: number = 1;
      const cambio: string = "D";
      expect(cambioDetection(value, cambio)).toBe(1.53);
    });

    test("0 dollar should return 0 euros", () => {
      const value: number = 0;
      const cambio: string = "D";
      expect(cambioDetection(value, cambio)).toBe(0);
    });

    test("-1 dollar should throw an error", () => {
      const value: number = -1;
      const cambio: string = "D";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("money must be >=0");
    });

    test("empty cambio should throw an error", () => {
      const value: number = -1;
      const cambio: string = "";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
    test("wrong cambio should throw an error", () => {
      const value: number = 10;
      const cambio: string = "d";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });

    test("wrong cambio should throw an error", () => {
      const value: number = 10;
      const cambio: string = "E";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
  });

  describe("test libra cambio", () => {
    test("1euro should return 0,77euros", () => {
      const value: number = 1;
      const cambio: string = "L";
      expect(cambioDetection(value, cambio)).toBe(0.77);
    });

    test("0euro should return 0 libra", () => {
      const value: number = 0;
      const cambio: string = "L";
      expect(cambioDetection(value, cambio)).toBe(0);
    });

    test("-1euro should throw an error", () => {
      const value: number = -1;
      const cambio: string = "L";

      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("money must be >=0");
    });

    test("-1euro and ! should throw an error", () => {
      const value: number = -1;
      const cambio: string = "!";

      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });

    test("1 euro and invalid currency should throw an error", () => {
      const value: number = 1;
      const cambio: string = "l";

      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
  });
  describe("test IENE cambio", () => {
    test("1euro should return 161.48", () => {
      const value: number = 1;
      const cambio: string = "I";
      expect(cambioDetection(value, cambio)).toBe(161.48);
    });
    test("0euro should return 0", () => {
      const value: number = 0;
      const cambio: string = "I";
      expect(cambioDetection(value, cambio)).toBe(0);
    });
    test("-1euro should throw an error", () => {
      const value: number = -1;
      const cambio: string = "I";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("money must be >=0");
    });
    test("invalid cambio should throw an error", () => {
      const value: number = 1;
      const cambio: string = "O";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
  });
  describe("test swedish crown cambio", () => {
    test("1euro should return 9.59", () => {
      const value: number = 1;
      const cambio: string = "C";
      expect(cambioDetection(value, cambio)).toBe(9.59);
    });
    test("0euro should return 0", () => {
      const value: number = 0;
      const cambio: string = "C";
      expect(cambioDetection(value, cambio)).toBe(0);
    });
    test("-1euro should throw an error", () => {
      const value: number = -1;
      const cambio: string = "C";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("money must be >=0");
    });
    test("invalid cambio should throw an error", () => {
      const value: number = 1;
      const cambio: string = "c";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
  });

  describe("test swiss franc cambio", () => {
    test("1euro should return 1.60", () => {
      const value: number = 1;
      const cambio: string = "F";
      expect(cambioDetection(value, cambio)).toBe(1.6);
    });
    test("0euro should return 0", () => {
      const value: number = 0;
      const cambio: string = "F";
      expect(cambioDetection(value, cambio)).toBe(0);
    });
    test("-1euro should throw an error", () => {
      const value: number = -1;
      const cambio: string = "F";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("money must be >=0");
    });
    test("invalid cambio should throw an error", () => {
      const value: number = 1;
      const cambio: string = "f";
      expect(() => {
        cambioDetection(value, cambio);
      }).toThrow("You must use a valid currency");
    });
  });
});
