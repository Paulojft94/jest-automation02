//// Funcoes da ficha de lab03

// exercicio 01

export function forLoop(num: number): number {
  let res: number = 1;
  if (num < 1) {
    throw new RangeError("The input value must be equal or higher than 1");
  }

  for (let x = num; x >= 1; x--) {
    res = res * x;
  }
  return res;
}

// Exercício 2:Câmbio (*)

export function cambioDetection(num: number, cam: string): number {
  let finalCambio: number = 0;

  if (cam != "D" && cam != "L" && cam != "I" && cam != "C" && cam != "F") throw new RangeError("You must use a valid currency");

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
  let prodDescription: string;

  if (num < 1 || num > 15) throw new RangeError("Values must comprehended between 1 and 15");

  if (num <= 15 && num >= 8) {
    prodDescription = "Limpeza e utensílios domésticos";
  } else if (num == 7) {
    prodDescription = "Higiene pessoal";
  } else if (num >= 5 && num <= 6) {
    prodDescription = "Vestuário";
  } else if (num >= 2 && num <= 4) {
    prodDescription = "Alimento perecível";
  } else {
    prodDescription = "Alimento não perecível";
  }

  return prodDescription;
}

//Exercício 4:Classificação Qualitativa (*)

export function qualityClass(num: number): string {
  let quality: string;

  if (num < 0 || num > 20) throw new RangeError("Values must comprehended between 0 and 20");

  if (num >= 0 && num <= 4) {
    quality = "Mau";
  } else if (num >= 5 && num <= 9) {
    quality = "Medíocre";
  } else if (num >= 10 && num <= 13) {
    quality = "Suficiente";
  } else if (num >= 14 && num <= 17) {
    quality = "Bom";
  } else {
    quality = "Muito Bom";
  }

  return quality;
}

//Exercício 5:Retenção Salarial (*)

export function salarioCal(num: number): number {
  let liquido: number;

  if (num > 0 && num < 500) {
    liquido = num - impostoEscalao1(num);
  } else if (num >= 500 && num <= 1000) {
    liquido = num - impostoEscalao2(num);
  } else if (num > 1000) {
    liquido = num - impostoEscalao3(num);
  } else {
    throw new RangeError("The salary amount should be above 0");
  }

  return liquido;
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
  if (end <= start || end < 0 || start < 0) throw new RangeError("Invalid range input");

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
  if (end <= start || end < 0 || start < 0 || multiplos <= 0) throw new RangeError("Invalid range input");

  let total: number = quantidadeMultiplos(multiplos, start, end);

  return total;
}

export function multiplosC(start: number, end: number): string {
  if (end <= start || end < 0 || start < 0) throw new RangeError("Invalid range input");

  let countA: number = quantidadeMultiplos(3, start, end);
  let countB: number = quantidadeMultiplos(5, start, end);

  return `${countA} ${countB}`;
}

export function multiplosD(m1: number, m2: number, start: number, end: number): string {
  if (end <= start || end < 0 || start < 0 || m1 <= 0 || m2 <= 0) throw new RangeError("Invalid range input");

  let countA: number = quantidadeMultiplos(m1, start, end);
  let countB: number = quantidadeMultiplos(m2, start, end);

  return `${countA} ${countB}`;
}

export function multiplosE(m1: number, m2: number, start: number, end: number): number {
  if (end <= start || end < 0 || start < 0 || m1 <= 0 || m2 <= 0) throw new RangeError("Invalid range input");

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
  if (end <= start || end < 0 || start < 0) throw new RangeError("Invalid range input");

  let soma: number = somaMultiplos(par, start, end);

  return soma;
}

/// alinea B
export function quantidadePares(start: number, end: number): number {
  if (end <= start || end < 0 || start < 0) throw new RangeError("Invalid range input");

  let quantidade: number = quantidadeMultiplos(2, start, end);

  return quantidade;
}

/// alinea C
export function somaDeImpares(start: number, end: number): number {
  if (end <= start || end < 0 || start < 0) throw new RangeError("Invalid range input");

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
  if (end <= start || end < 0 || start < 0 || mul1 <= 0) throw new RangeError("Invalid range input");

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

  if (end <= start || end < 0 || start < 0 || mul1 <= 0) throw new RangeError("Invalid range input");

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
  return Math.abs(num).toString().length;
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
  let meanEven: number;
  thrower(num);

  meanEven = sumOfEvenAlgarisms(num) / amountOfEvenDigits(num);

  return meanEven;
}
//8.I
export function meanOddDigits(num: number): number {
  let meanOdd;

  thrower(num);
  meanOdd = sumOfOddAlgarisms(num) / amountOfOddDigits(num);

  return parseFloat(meanOdd.toFixed(2));
}

//8.J
export function invertNumber(num: number): number {
  let invert: string = "";

  thrower(num);

  while (num != 0) {
    invert += (num % 10) + ""; //ir adicionando o último digito a uma string
    num = Math.floor(num / 10); //dividir por 10 para ficar com o penultimo nunero
  }

  return parseFloat(invert);
}

export function thrower(num: number) {
  if (num != Math.floor(num) || num <= 0) {
    throw new Error("Input must be type of INT and >0");
  }
}
