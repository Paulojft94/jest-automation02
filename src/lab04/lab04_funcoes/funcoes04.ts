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

export function oddFilterArr(num: number[]): number[] {
  let arrOut: number[] = [];

  arrOut = num.filter(isOdd);
  return arrOut;
}

function isOdd(num: number): boolean {
  return Math.abs(num % 2) == 1;
}