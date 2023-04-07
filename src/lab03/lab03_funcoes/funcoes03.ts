//// Funcoes da ficha de lab03

// exercicio 01

export function forLoop(num: number): number {
  let res: number = 1;
  if (num < 1) {
    throw new RangeError("The input value must be equal or higher than 1");
  }

  for (let x = Math.floor(num); x >= 1; x--) {
    res = res * x;
  }
  return res;
}

// Exercício 2:Câmbio (*)

export function cambioDetection(num: number, cam: string): number {
  let finalCambio: number = 0;

  if (cam != "D" && cam != "L" && cam != "I" && cam != "C" && cam != "F") throw new RangeError("You must use a valid currency");
  if (num < 0) throw new RangeError("money must be >=0");

  switch (cam) {
    case "D":
      finalCambio = cambioDollar(num);
      break;
    case "L":
      finalCambio = cambioLibra(num);
      break;
    case "I":
      finalCambio = cambioIene(num);
      break;
    case "C":
      finalCambio = cambioCs(num);
      break;
    case "F":
      finalCambio = cambioFs(num);
      break;
  }

  return finalCambio;
}

function cambioDollar(numberD: number): number {
  let cambioRes: number = parseFloat((numberD * 1.534).toFixed(2));
  return cambioRes;
}

function cambioLibra(numberL: number): number {
  let cambioRes: number = parseFloat((numberL * 0.774).toFixed(2));
  return cambioRes;
}

function cambioIene(numberI: number): number {
  let cambioRes: number = parseFloat((numberI * 161.48).toFixed(2));
  return cambioRes;
}

function cambioCs(numberCs: number): number {
  let cambioRes: number = parseFloat((numberCs * 9.593).toFixed(2));
  return cambioRes;
}

function cambioFs(numberFs: number): number {
  let cambioRes: number = parseFloat((numberFs * 1.601).toFixed(2));
  return cambioRes;
}

//Exercício 3:Descrição do Produto (*)

export function productDescription(num: number): string {
  let prodDescription: string = "Código Inválido";

  if (num <= 15 && num >= 8) {
    prodDescription = "Limpeza e utensílios domésticos";
  } else if (num == 7) {
    prodDescription = "Higiene pessoal";
  } else if (num >= 5 && num <= 6) {
    prodDescription = "Vestuário";
  } else if (num >= 2 && num <= 4) {
    prodDescription = "Alimento perecível";
  } else if (num == 1) {
    prodDescription = "Alimento não perecível";
  }

  return prodDescription;
}

//Exercício 4:Classificação Qualitativa (*)

export function qualityClass(num: number): string {
  let quality: string;

  if (num < 0 || num > 20) throw new RangeError("Values must comprehended between 0 and 20");

  if (num <= 4) {
    quality = "Mau";
  } else if (num <= 9) {
    quality = "Medíocre";
  } else if (num <= 13) {
    quality = "Suficiente";
  } else if (num <= 17) {
    quality = "Bom";
  } else {
    quality = "Muito Bom";
  }

  return quality;
}

//Exercício 5:Retenção Salarial (*)

export function salarioCal(num: number): number {
  let liquido: number;

  if (num <= 0) throw new RangeError("The salary amount should be above 0");

  if (num < 500) {
    liquido = num - impostoEscalao1(num);
  } else if (num <= 1000) {
    liquido = num - impostoEscalao2(num);
  } else {
    liquido = num - impostoEscalao3(num);
  }

  return parseFloat(liquido.toFixed(2));
}

function impostoEscalao1(num: number): number {
  return num * 0.1;
}

function impostoEscalao2(num: number): number {
  return num * 0.15;
}

function impostoEscalao3(num: number): number {
  return num * 0.2;
}

//Exercício 6:Operações de múltiplos num intervalo (**)

export function multiplosA(start: number, end: number): number {
  if (end <= start || start <= 0) throw new RangeError("Invalid range input");

  let total: number = quantidadeMultiplos(3, start, end);

  return total;
}

function quantidadeMultiplos(mul: number, start: number, end: number): number {
  let count: number = 0;
  for (let i = start; i <= end; i++) {
    if (i % mul == 0) {
      count++;
    }
  }
  return count;
}

export function multiplosB(multiplos: number, start: number, end: number): number {
  if (end <= start || start <= 0 || multiplos <= 0) throw new RangeError("Invalid range input");

  let total: number = quantidadeMultiplos(multiplos, start, end);

  return total;
}

export function multiplosC(start: number, end: number): string {
  if (end <= start || start <= 0) throw new RangeError("Invalid range input");

  let countA: number = quantidadeMultiplos(3, start, end);
  let countB: number = quantidadeMultiplos(5, start, end);

  return `${countA} ${countB}`;
}

export function multiplosD(m1: number, m2: number, start: number, end: number): string {
  if (end <= start || start <= 0 || m1 <= 0 || m2 <= 0) throw new RangeError("Invalid range input");

  let countA: number = quantidadeMultiplos(m1, start, end);
  let countB: number = quantidadeMultiplos(m2, start, end);

  return `${countA} ${countB}`;
}

export function multiplosE(m1: number, m2: number, start: number, end: number): number {
  if (end <= start || start <= 0 || m1 <= 0 || m2 <= 0) throw new RangeError("Invalid range input");

  let total: number = somaMultiplos(m1, start, end) + somaMultiplos(m2, start, end);

  return total;
}

export function somaMultiplos(mu1: number, start: number, end: number): number {
  let countA: number = 0;

  for (let i = start; i <= end; i++) {
    if (i % mu1 == 0) {
      countA += i;
    }
  }
  return countA;
}

//Exercício 7:Mais operações sobre intervalos (**)
/// alinea A
export function somaDePares(start: number, end: number): number {
  const par: number = 2;
  if (end <= start || start < 0) throw new RangeError("Invalid range input");

  let soma: number = somaMultiplos(par, start, end);

  return soma;
}

/// alinea B
export function quantidadePares(start: number, end: number): number {
  if (end <= start || start < 0) throw new RangeError("Invalid range input");

  let quantidade: number = quantidadeMultiplos(2, start, end);

  return quantidade;
}

/// alinea C
export function somaDeImpares(start: number, end: number): number {
  if (end <= start || start < 0) throw new RangeError("Invalid range input");

  let countA: number = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 == 1) {
      countA += i;
    }
  }

  return countA;
}

/// alinea D
export function quantidadeImpares(start: number, end: number): number {
  let countA: number = 0;
  if (end <= start || start < 0) throw new RangeError("Invalid range input");

  for (let i = start; i <= end; i++) {
    if (i % 2 == 1) {
      countA += 1;
    }
  }

  return countA;
}

/// alinea E
export function somaDeMultiplosLimiteDesordenado(m1: number, lim1: number, lim2: number): number {
  if (lim2 < 0 || lim1 < 0 || m1 <= 0) throw new RangeError("Invalid range input");

  if (lim1 > lim2) {
    let neutro: number = lim2;
    lim2 = lim1;
    lim1 = neutro;
  }

  let countA: number = somaMultiplos(m1, lim1, lim2);

  return countA;
}

/// alinea F
export function produtoMultiplos(mul1: number, start: number, end: number): number {
  if (end <= start || start <= 0 || mul1 <= 0) throw new RangeError("Invalid range input");

  let countA: number = 0;
  let countB: number = 1;

  for (let i = start; i <= end; i++) {
    if (i % mul1 == 0) {
      countA = countB * i;
      countB = countA;
    }
  }

  return countA;
}

/// alinea G
export function mediaMultiplos(mul1: number, start: number, end: number): number {
  let countA: number = 0;
  let total: number = 0;
  let amountOfMultiple: number = 0;

  if (end <= start || start <= 0 || mul1 <= 0) throw new RangeError("Invalid range input");

  for (let i = start; i <= end; i++) {
    if (i % mul1 == 0) {
      total += i;
      amountOfMultiple++;
    }
  }

  return (countA = total / amountOfMultiple);
}

/// alinea H
export function alineaH(mul1: number, mul2: number, start: number, end: number): string {
  let multiplo1: number = mediaMultiplos(mul1, start, end);
  let multiplo2: number = mediaMultiplos(mul2, start, end);

  return `${multiplo1} ${multiplo2}`;
}

//Exercício 8:Algarismos de um número (**)
//8.A
export function numAlgarismos(num: number): number {
  thrower(num);
  return Math.trunc(num).toString().length;
}

//8.B
export function amountOfEvenDigits(num: number): number {
  let count: number = 0;

  thrower(num);

  while (num != 0) {
    let digit = num % 10; // extract last digit. This could avoidable because performing %2 to the input will result in the analysis of the last digit
    if (isEven(digit)) {
      count++;
    }
    num = Math.floor(num / 10);
  }

  return count;
}

export function isEven(num: number): boolean {
  return num % 2 == 0;
}

//8.C
export function amountOfOddDigits(num: number): number {
  let count: number = 0;

  thrower(num);

  while (num != 0) {
    let digit = num % 10; // extract last digit. This could avoidable because performing %2 to the input will result in the analysis of the last digit
    if (isEven(digit) == false) {
      count++;
    }
    num = Math.floor(num / 10);
  }

  return count;
}

//8.D
export function sumOfAlgarisms(num: number): number {
  let ultimoDigito: number = 0;

  thrower(num);

  while (num != 0) {
    ultimoDigito += num % 10;
    num = Math.floor(num / 10);
  }

  return ultimoDigito;
}

//8.E
export function sumOfEvenAlgarisms(num: number): number {
  let somaPares: number = 0;

  thrower(num);

  while (num != 0) {
    if (isEven(num)) {
      somaPares += num % 10;
    }
    num = Math.floor(num / 10);
  }

  return somaPares;
}

//8.F
export function sumOfOddAlgarisms(num: number): number {
  let somaImpares: number = 0;

  thrower(num);

  while (num != 0) {
    if (isEven(num) == false) {
      somaImpares += num % 10;
    }
    num = Math.floor(num / 10);
  }
  return somaImpares;
}

//8.G
export function meanOflgarisms(num: number): number {
  let lastDigit: number = 0;
  const totalAlg: number = numAlgarismos(num);
  let total: number;

  thrower(num);

  while (num != 0) {
    lastDigit += num % 10;
    num = Math.floor(num / 10);
  }

  total = lastDigit / totalAlg;

  return parseFloat(total.toFixed(2));
}

//8.H
export function meanOfEvenDigits(num: number): number {
  let meanEven: number = 0;
  thrower(num);

  if (sumOfEvenAlgarisms(num) == 0) {
    //to protect when there are no even algarisms in a number
  } else {
    meanEven = sumOfEvenAlgarisms(num) / amountOfEvenDigits(num);
  }
  return meanEven;
}

//8.I
export function meanOddDigits(num: number): number {
  let meanOdd: number = 0;
  thrower(num);

  if (sumOfOddAlgarisms(num) == 0) {
    //to protect when there are no even algarisms in a number
  } else {
    meanOdd = sumOfOddAlgarisms(num) / amountOfOddDigits(num);
  }

  return parseFloat(meanOdd.toFixed(2));
}

//8.J
export function invertNumber(num: number): string {
  let invert: string = "";

  thrower(num);

  while (num != 0) {
    invert += (num % 10) + ""; //ir adicionando o último digito a uma string
    num = Math.floor(num / 10); //dividir por 10 para ficar com o penultimo nunero
  }

  return invert;
}

export function thrower(num: number) {
  if (num != Math.floor(num) || num <= 0) {
    throw new Error("Input must be type of INT and >0");
  }
}

//Exercício 9:Capicuas e Armstrong (**)

//a) Verifique se um número inteiro é capicua.
export function isCapicua(num: number): boolean {
  let eCapicua: string = Math.abs(num).toString(); // cnverter o número para string
  return eCapicua == eCapicua.split("").reverse().join(""); //split, invertendo a ordem dos caracteres usando o método reverse e, em seguida, unindo novamente a string usando o método join
}

//b) Verifique se um dado número é um número de Armstrong,i.e., se for igual à soma dos cubos dos seus algarismos.
export function isAmstrong(num: number): boolean {
  let lastDig: number = 0;
  let input: number = num;

  thrower(num);

  while (num != 0) {
    lastDig += (num % 10) ** 3;
    num = Math.floor(num / 10);
  }
  return lastDig == input;
}

//c) Retorne a primeira capicua num dado intervalo.
export function findFirstCapicua(num1: number, num2: number): number {
  thrower2(num1, num2);

  for (let i = num1; i <= num2; i++) {
    if (isCapicua(i)) {
      return i;
    }
  }
  return -1; //if no capicua is found
}

//d) Retorne a maior capicua num dado intervalo.
export function findLastCapicua(num1: number, num2: number): number {
  let lastCapicua: number = -1;

  thrower2(num1, num2);

  for (let i = num1; i <= num2; i++) {
    if (isCapicua(i)) {
      lastCapicua = i;
    }
  }
  return lastCapicua;
}

// e) Retorne o número de capicuas num dado intervalo.
export function amountOfCapicuas(num1: number, num2: number): number {
  let amount: number = 0;

  thrower2(num1, num2);

  for (let i = num1; i <= num2; i++) {
    if (isCapicua(i)) {
      amount++;
    }
  }
  return amount;
}

// f)Retorne o primeiro número de Armstrong num dado intervalo.
export function findFirstAmstroung(num1: number, num2: number): number {
  thrower2(num1, num2);

  for (let i = num1; i <= num2; i++) {
    if (isAmstrong(i)) {
      return i;
    }
  }
  return -1; //if no amstroung is found
}

//G) Retorne a quantidade de números de Armstrong num dado intervalo.
export function amountAmstroungs(num1: number, num2: number): number {
  let amount: number = 0;

  for (let i = num1; i <= num2; i++) {
    if (isAmstrong(i)) {
      amount++;
    }
  }
  return amount;
}

function thrower2(num1: number, num2: number) {
  if (num1 < 0 || num2 < 0) throw new RangeError("inputs must be >=0");
}

//Exercício 10: Cálculo Vencimento (**)
export function salarioMensal(base: number, extraH: number): number {
  thrower(base);
  if (extraH < 0) thrower(extraH);
  return base + base * 0.02 * extraH;
}

//Exercício 11: Posição do Producto Acumulado (**)
export function returnIndexProduct(list: number[], target: number): number {
  let product: number = 1;

  thrower(target);

  for (let i = 0; i < list.length; i++) {
    thrower(list[i]);
    product *= Math.abs(list[i]); //multiplicar os índices do array e convertendo negativos para positivos
    if (product > target) {
      return i;
    }
  }
  return -1; //when product is never higher than target
}

//Exercício 12: Classificação de Números (**)
export function numberClass(num: number): number {
  let somaDiv: number = 0;
  thrower(num);

  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      somaDiv += i;
    }
  }
  return setClass(somaDiv, num);
}

function setClass(sumDiv: number, input: number): number {
  let numClass: number = -1; //evita ter mais um if else no código

  if (sumDiv == input) {
    numClass = 0;
  } else if (sumDiv > input) {
    numClass = 1;
  }

  return numClass;
}

//Exercício 13: Calcular Formas de Obter o Número (***)
export function getCombinations(num: number): string {
  let init: number = 0;
  let listOps: string = "";
  let i: number = 0;
  if (num < 1 || num > 20) thrower(0);

  while (init <= num) {
    for (i = 0; i <= num; i++) {
      if (init + i == num) {
        listOps += `${init}+${i} `;
      }
    }
    i = 0;
    init++;
  }

  return listOps;
}

//Exercício 14: Canicultura (***)

//a)
export function foodAmount(peso: number, racao: number): number {
  let foodBalance: number = 0;
  let desiredFoodAmount: number = deservedFood(peso);
  thrower(racao);

  if (desiredFoodAmount > racao) {
    foodBalance = -1;
  } else if (desiredFoodAmount < racao) {
    foodBalance = 1;
  }

  return foodBalance;
}

function deservedFood(peso: number): number {
  let foodAmount: number = 500;

  thrower(peso);
  if (peso <= 10) {
    foodAmount = 100;
  } else if (peso > 10 && peso <= 25) {
    foodAmount = 250;
  } else if (peso > 25 && peso <= 45) {
    foodAmount = 300;
  }
  return foodAmount;
}

//B)
export function foodAmountGroup(pesos: number[], racoes: number[]): number[] {
  let isEnough: number[] = [];
  let indexFood: number[] = deservedFoodGrou(pesos);

  if (pesos.length != racoes.length) {
    thrower(-1);
  }

  for (let i = 0; i < pesos.length; i++) {
    thrower(racoes[i]);
    if (indexFood[i] > racoes[i]) {
      isEnough.push(-1);
    } else if (indexFood[i] < racoes[i]) {
      isEnough.push(1);
    } else {
      isEnough.push(0);
    }
  }

  return isEnough;
}

export function deservedFoodGrou(pesos: number[]): number[] {
  let foodArray: number[] = [];

  for (let i = 0; i < pesos.length; i++) {
    thrower(pesos[i]);
    foodArray.push(deservedFood(pesos[i]));
  }
  return foodArray;
}

//Exercício 15: Checksum de Número (***)
export function numberCheckSum(cc: number, id: number): boolean {
  let getLastNumber: number = 0;
  let idArray: number[] = [];

  if (cc < 0 || id < 0 || id > 9) thrower(-1);

  idArray.push(id);

  while (cc != 0) {
    getLastNumber = cc % 10;
    cc = Math.floor(cc / 10);
    idArray.push(getLastNumber);
  }

  return isValid(somaPonderada(idArray));
}

export function somaPonderada(numArr: number[]): number {
  let sumPonderada: number = 0;

  if (numArr.length != 9) thrower(-1);

  for (let i = 0; i < numArr.length; i++) {
    sumPonderada += numArr[i] * (i + 1);
  }
  return sumPonderada;
}

export function isValid(summed: number): boolean {
  return summed % 11 == 0;
}

//Exercício 16: Separação de Pares e Ímpares (***)

export function organizeNumbers(num: number[]): string {
  if (num.length == 0) thrower(num.length);
  return `${orderOddList(num)} ${orderEvenList(num)}`;
}

export function orderEvenList(num: number[]): number[] {
  let evenList: number[] = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0 || num[i] > 9) thrower(-1);

    if (isEven(num[i])) {
      evenList.push(num[i]);
    }
  }

  return evenList;
}

export function orderOddList(num: number[]): number[] {
  let oddList: number[] = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0 || num[i] > 9) thrower(-1);
    if (isEven(num[i]) == false) {
      oddList.push(num[i]);
    }
  }
  return oddList;
}
