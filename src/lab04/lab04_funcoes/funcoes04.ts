////Funcções do Lab04

import { isEven, thrower } from "../../lab03/lab03_funcoes/funcoes03";

//Exercício 1: Contador de dígitos de um número (*)
//funcao apanhada do lab03

//Exercício 2: Contador de dígitos de um número (*)

export function numToArray(number: number): number[] {
  let arrayFromNumber: number[] = [];

  if (number <= 0) throw new RangeError("input number must be higher than 0");

  while (number != 0) {
    arrayFromNumber.push(extractLastDigit(number));
    number = Math.floor(number / 10);
  }

  return arrayFromNumber.reverse();
}

function extractLastDigit(number: number): number {
  let last: number = number % 10;
  return last;
}

//Exercício 3: Cálculo da soma de elementos de um Array

export function sumOfArray(num: number[]): number {
  let arrSum: number = 0;
  for (let i = 0; i < num.length; i++) {
    arrSum += num[i];
  }
  return arrSum;
}

//Exercício 4: Retornar Pares do Array
/**
 *
 * @param num array of numbers
 * @returns an array of the even numbers
 */
export function evenFilterArr(num: number[]): number[] {
  let arrOut: number[] = [];

  arrOut = num.filter(isEven);

  return arrOut;
}

//Exercício 5: Retornar Impares do Array
/**
 *
 * @param num array of numbers
 * @returns an array of the even numbers
 */
export function oddFilterArr(num: number[]): number[] {
  let arrOut: number[] = [];

  arrOut = num.filter(isOdd);
  return arrOut;
}

function isOdd(num: number): boolean {
  return Math.abs(num % 2) == 1;
}

//Exercício 6 e 7 já estão feitos no LAB03

//Exercício 8: Primeiros N Elementos do Array

export function nFilter(number: number[], n: number): number[] {
  let nFiltered: number[] = [];

  if (n <= 0 || n > number.length) throw new RangeError("invalid Nth variable value");

  for (let i = 0; i < n; i++) {
    nFiltered.push(Math.trunc(number[i]));
  }

  return nFiltered;
}

//Exercício 9: Múltiplos de 3 Num Dado Intervalo (*)
export function multiplesOfThree(num1: number, num2: number): number[] {
  if (num2 < num1 || num2 < 0) thrower(-1);
  return multiplesInRange(3, num1, num2, 0);
}

//Exercício10: MúltiplosdeNNumDadoIntervalo(*)

export function multiplesOfN(mul: number, num1: number, num2: number): number[] {
  if (num2 < num1 || num2 < 0 || mul <= 0) thrower(-1);
  return multiplesInRange(mul, num1, num2, 0);
}

function multiplesInRange(mul: number, start: number, end: number, evenOdd: number): number[] {
  let multiples: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % mul == evenOdd) {
      multiples.push(i);
    }
  }
  return multiples;
}

//Exercício11: MúltiplosdeNNúmerosNumDadoIntervalo(*)
export function multiplesOfNInRange(numbers: number[], num1: number, num2: number): number[] {
  let commonMultiples: number[] = [];

  if (num2 < num1 || num2 < 0 || numbers.length == 0) thrower(-1);

  for (let i = num1; i <= num2; i++) {
    let multipleCount = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (i % numbers[j] == 0) {
        multipleCount++;
      }
    }
    if (multipleCount == numbers.length) {
      commonMultiples.push(i);
    }
  }
  return commonMultiples;
}

//Exercício12: Está feito nos exercícios do lab03

////Exercício13: OperaçõesemArray(*)
//declaration
export class MyArray {
  //fields
  private array: number[];

  //construtor
  constructor(num: number[]) {
    this.array = num;
  }

  //functions alinea a)
  public checkLowestValue(): number {
    return Math.min.apply(Math, this.array);
  }
  //functions alinea b)
  public checkHighestValue(): number {
    return Math.max.apply(Math, this.array);
  }
  //functions alinea c)
  public meanArrayElements(): number {
    let output: number = 0;
    for (let i = 0; i < this.array.length; i++) {
      output += this.array[i];
    }
    return output / this.array.length;
  }
  //alinea d) o produto dos seus elementos;
  public productAllElmenets(): number {
    let output: number = 1;

    for (let i = 0; i < this.array.length; i++) {
      output *= this.array[i];
    }
    return output;
  }
  //alinea e) o conjunto de elementos não repetidos; (**)
  public remDuplicates(): number[] {
    return [...new Set(this.array)];
  }
  //alinea f)o array cujos elementos estão pela ordem inversa
  public reverseArray(): number[] {
    return this.array.reverse();
  }
}

//Exercício14: NúmerodeColunasemMatriz(**)
export function checkMatrix(num: number[][]): number {
  let numColumns: number = num[0].length;

  if (num.length != numColumns) numColumns = -1;

  for (let i = 1; i < numColumns; i++) {
    if (num[i].length !== numColumns) return -1;
  }
  return numColumns;
}
