import { multiplosA, multiplosB, multiplosC, multiplosD, multiplosE } from "./lab03_funcoes/funcoes03";

const start: number = 10;
const end: number = 19;

const multi1: number = 3;
const multi2: number = 5;

console.log("Exercício A: " + multiplosA(start, end));

console.log("Exercício B: " + multiplosB(multi1, start, end));

console.log("Exercício C: " + multiplosC(start, end));

console.log("Exercício D: " + multiplosD(multi1, multi2, start, end));

console.log("Exercício E: " + multiplosE(multi1, multi2, start, end));
