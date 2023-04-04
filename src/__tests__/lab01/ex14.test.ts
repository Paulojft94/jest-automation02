//testar peso e racao zero,
// peso 10kg: come <100 =100 e >100
// peso 11kg: come <250 =250 e >250
// peso 25Kg: "" "" "" "" ""
//26Kg: <300 =300 >300
//45Kg: "" ""    ""   ""
//46Kg: <500 =500 >500

import { foodAmount, foodAmountGroup } from "../../lab03/lab03_funcoes/funcoes03";

describe("test the canicultura", () => {
  describe("test the alinea a)", () => {
    describe("invalid weight/food scenarios", () => {
      test("0 dog weight should throw an error", () => {
        const dogInput: number = 0;
        const racInput: number = 100;
        expect(() => {
          foodAmount(dogInput, racInput);
        }).toThrow("Input must be type of INT and >0");
      });

      test("0 racao should throw an error", () => {
        const dogInput: number = 10;
        const racINput: number = 0;

        expect(() => {
          foodAmount(dogInput, racINput);
        }).toThrow("Input must be type of INT and >0");
      });
    });

    describe("dogs up to 10Kg", () => {
      test("p:10 r:99 should return -1", () => {
        const dogInput: number = 10;
        const racINput: number = 99;
        expect(foodAmount(dogInput, racINput)).toBe(-1);
      });

      test("p:1 r:100 should return 0", () => {
        const dogInput: number = 1;
        const racINput: number = 100;
        expect(foodAmount(dogInput, racINput)).toBe(0);
      });
      test("p:10 r:101 should return 1", () => {
        const dogInput: number = 10;
        const racINput: number = 101;

        expect(foodAmount(dogInput, racINput)).toBe(1);
      });
    });

    describe("dogs from 11 to 25", () => {
      test("p:11 r:249 should return -1", () => {
        const dogInput: number = 11;
        const racINput: number = 249;
        expect(foodAmount(dogInput, racINput)).toBe(-1);
      });
      test("p:25 r:250 should return 0", () => {
        const dogInput: number = 25;
        const racINput: number = 250;

        expect(foodAmount(dogInput, racINput)).toBe(0);
      });

      test("p:25 r:251 should return 1", () => {
        const dogInput: number = 25;
        const racINput: number = 251;

        expect(foodAmount(dogInput, racINput)).toBe(1);
      });
    });
    describe("dogs from 26 to 45", () => {
      test("p:26 r:299 should return -1", () => {
        const dogInput: number = 26;
        const racINput: number = 299;
        expect(foodAmount(dogInput, racINput)).toBe(-1);
      });
      test("p:45 r300 should return 0", () => {
        const dogInput: number = 45;
        const racINput: number = 300;

        expect(foodAmount(dogInput, racINput)).toBe(0);
      });
      test("p:45 r:301 should return 1", () => {
        const dogInput: number = 45;
        const racINput: number = 301;

        expect(foodAmount(dogInput, racINput)).toBe(1);
      });
    });
    describe("dogs above 45KG", () => {
      test("p:46 r:499 should return -1", () => {
        const dogInput: number = 46;
        const racINput: number = 499;

        expect(foodAmount(dogInput, racINput)).toBe(-1);
      });
      test("p:46 r:500 should return 0", () => {
        const dogInput: number = 46;
        const racINput: number = 500;

        expect(foodAmount(dogInput, racINput)).toBe(0);
      });

      test("p:46 r:501 should return 1", () => {
        const dogInput: number = 46;
        const racINput: number = 501;

        expect(foodAmount(dogInput, racINput)).toBe(1);
      });
    });
  });

  describe("test the alinea b)", () => {
    describe("test the fail scenarios", () => {
      test("more dogs than racoes should throw an error ", () => {
        const numDogs: number[] = [10, 20, 30, 30];
        const numRacoes: number[] = [100, 200, 200];

        expect(() => {
          foodAmountGroup(numDogs, numRacoes);
        }).toThrow("Input must be type of INT and >0");
      });
      test("more racoes than dogs should throw an error", () => {
        const numDogs: number[] = [10, 20, 30, 30];
        const numRacoes: number[] = [100, 200, 200, 300, 300];

        expect(() => {
          foodAmountGroup(numDogs, numRacoes);
        }).toThrow("Input must be type of INT and >0");
      });
      test("negative dog wiehgt should throw an error", () => {
        const numDogs: number[] = [10, 20, 30, 0];
        const numRacoes: number[] = [100, 200, 200, 300];

        expect(() => {
          foodAmountGroup(numDogs, numRacoes);
        }).toThrow("Input must be type of INT and >0");
      });

      test("negative racao should throw an error", () => {
        const numDogs: number[] = [10, 20, 30, 30];
        const numRacoes: number[] = [100, 200, 200, 0];

        expect(() => {
          foodAmountGroup(numDogs, numRacoes);
        }).toThrow("Input must be type of INT and >0");
      });
    });

    describe("test arbitrary dog weight and racao", () => {
      test("[1, 10, 10] && [99, 100, 101] should return [-1, 0, 1]", () => {
        const numDogs: number[] = [1, 10, 10];
        const numRacoes: number[] = [99, 100, 101];

        expect(foodAmountGroup(numDogs, numRacoes)).toStrictEqual([-1, 0, 1]);
      });

      test("[11, 25, 25] && [251, 250, 249] should return [1, 0, -1]", () => {
        const numDogs: number[] = [11, 25, 25];
        const numRacoes: number[] = [251, 250, 249];

        expect(foodAmountGroup(numDogs, numRacoes)).toStrictEqual([1, 0, -1]);
      });
      test("[45, 26, 26] && [300, 299, 301] should return [0, -1, 1]", () => {
        const numDogs: number[] = [45, 26, 26];
        const numRacoes: number[] = [300, 299, 301];

        expect(foodAmountGroup(numDogs, numRacoes)).toStrictEqual([0, -1, 1]);
      });
      test("[46, 46, 46] && [499, 500, 501] should return [-1, 0, 1]", () => {
        const numDogs: number[] = [46, 46, 46];
        const numRacoes: number[] = [499, 500, 501];

        expect(foodAmountGroup(numDogs, numRacoes)).toStrictEqual([-1, 0, 1]);
      });
    });
  });
});
