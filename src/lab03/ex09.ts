import { amountAmstroungs, amountOfCapicuas, findFirstAmstroung, findFirstCapicua, findLastCapicua, isAmstrong, isCapicua } from "./lab03_funcoes/funcoes03";

const number: number = 1;
const range1: number = 100;
const range2: number = 2000;

console.log("O número é capicua? " + isCapicua(number));
console.log("O número é amstrong? " + isAmstrong(number));
console.log("A primeira capicua: " + findFirstCapicua(range1, range2));
console.log("A última capicua: " + findLastCapicua(range1, range2));
console.log("A Quantidade de capicuas: " + amountOfCapicuas(range1, range2));
console.log("O Primeiro Amstrong: " + findFirstAmstroung(range1, range2));
console.log("A Quantidade de Amstrongs: " + amountAmstroungs(range1, range2));
