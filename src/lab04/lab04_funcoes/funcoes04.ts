////Funcções do Lab04

import { isEven } from "../../lab03/lab03_funcoes/funcoes03";

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
  return multiplesInRange(3, num1, num2, 0);
}

//Exercício10: MúltiplosdeNNumDadoIntervalo(*)

export function multiplesOfN(mul: number, num1: number, num2: number): number[] {
  return multiplesInRange(mul, num1, num2, 0);
}

//Exercício11: MúltiplosdeNNúmerosNumDadoIntervalo(*)
export function multiplesOfNInRange(numbers: number[], num1: number, num2: number): number[] {
  let commonMultiples: number[] = [];

  for (let i = num1; i <= num2; i++) {
    let multipleCount = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (i % numbers[j] === 0) {
        multipleCount++;
      }
    }
    if (multipleCount === numbers.length) {
      commonMultiples.push(i);
    }
  }
  return commonMultiples;
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
