//número 0 e 1 para cada Currency
//negativo
//float para cada currency
//Cambio existente
//cambio inexistente
// cambio com string vazia

import { cambioDetection } from "../../lab03/lab03_funcoes/funcoes03";

describe("Test positive cases", () => {
  describe("test dollar cambio", () => {
    test("1 dollar should return 1.53 euros", () => {
      const value: number = 1;
      const cambio: string = "D";
      expect(cambioDetection(value, cambio)).toBe(1.53);
    });
  });
});
