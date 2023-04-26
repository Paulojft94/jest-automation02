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

  public primeNumbersOfArray(): number[] {
    let validPrime: number[] = [];
    let prime: number[] = [];
    for (let n = 0; n < this.array.length; n++) {
      if (this.array[n] > 1) {
        validPrime.push(this.array[n]);
      }
    }

    for (let i = 0; i < validPrime.length; i++) {
      if (this.isPrime(validPrime[i])) {
        prime.push(validPrime[i]);
      }
    }
    return prime;
  }

  public isPrime(num: number): boolean {
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Multiples of 2 and 3 are not prime
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
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

//Exercício 15: Matriz Quadrada (**)
export function isMatrixSquared(num: number[][]): boolean {
  let isSquared: boolean = false;
  if (checkMatrix(num) != -1) isSquared = true;
  return isSquared;
}

//Exercício 16: Matriz Rectangular (**)
export function isMatrixRect(num: number[][]): boolean {
  let isRect: boolean = false;
  if (checkMatrix(num) == -1) isRect = true;
  return isRect;
}

//Exercício 17: OperaçõessobreMatrizes(**)
//a) o elemento de menor valor;
export function matrixLowestValue(num: number[][]): number {
  return Math.min.apply(Math, makeMatrixArray(num));
}

export function makeMatrixArray(num: number[][]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
      newArr.push(num[i][j]);
    }
  }
  return newArr;
}

//B) o elemento de maior valor;
export function matrixHighestValue(num: number[][]): number {
  return Math.max.apply(Math, makeMatrixArray(num));
}

//C) o valor médio dos elementos;
export function matrixMeanElements(num: number[][]): number {
  const mySecondClassInstance = new MyArray(makeMatrixArray(num));
  return parseFloat(mySecondClassInstance.meanArrayElements().toFixed(1));
}

//D) o produto dos seus elementos; (***)
export function matrixProduct(num: number[][]): number {
  const mySecondClassInstance = new MyArray(makeMatrixArray(num));
  return mySecondClassInstance.productAllElmenets();
}

//E) o conjunto de elementos não repetidos; (***)
export function remDuplicatesFromMatrix(num: number[][]): number[] {
  const mySecondClassInstance = new MyArray(makeMatrixArray(num));
  return mySecondClassInstance.remDuplicates();
}

//F)os elementos primos desse array.
export function primeNumberFromMatrix(num: number[][]): number[] {
  const primeArray = new MyArray(makeMatrixArray(num));
  return primeArray.primeNumbersOfArray();
}

//G) a diagonal principal da matriz (apenas caso seja quadrada ou retangular);

export function matrixMainDiagonal(num: number[][]): number[] {
  let output: number[] = [];

  if (isMatrixSquared(num) == true || isMatrixRect(num) == true) {
    for (let i = 0; i < num.length; i++) {
      output.push(num[i][i]);
    }
  } else {
    output.push(-1);
  }

  return output;
}

//H) a diagonal secundária da matriz (apenas caso seja quadrada ou retangular);
export function matrixSecondDiagonal(num: number[][]): number[] {
  let output: number[] = [];

  if (isMatrixSquared(num) != false || isMatrixRect(num) != false) {
    for (let i = num.length - 1; i >= 0; i--) {
      output.push(num[num.length - 1 - i][i]);
    }
  } else {
    output.push(-1);
  }
  return output;
}

//I) se a mesma corresponde a uma matriz identidade;
export function matrixIdent(num: number[][]): boolean {
  let diagonal: number[] = matrixMainDiagonal(num);
  let isIdent: boolean;
  let notDiagonal: number[] = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
      if (i != j) {
        notDiagonal.push(num[i][j]);
      }
    }
  }

  if (sumOfArray(diagonal) / num.length == 1 && sumOfArray(notDiagonal) == 0) {
    isIdent = true;
  } else {
    isIdent = false;
  }
  return isIdent;
}
