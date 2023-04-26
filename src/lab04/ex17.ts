import { matrixHighestValue, matrixIdent, matrixLowestValue, matrixMainDiagonal, matrixMeanElements, matrixProduct, matrixSecondDiagonal, primeNumberFromMatrix, remDuplicatesFromMatrix } from "./lab04_funcoes/funcoes04";

const matrix: number[][] = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

/*
console.log("alinea a)", matrixLowestValue(matrix));
console.log("alinea b)", matrixHighestValue(matrix));
console.log("alinea c)", matrixMeanElements(matrix));
console.log("alinea d)", matrixProduct(matrix));
console.log("alinea e)", remDuplicatesFromMatrix(matrix));
console.log("alinea f)", primeNumberFromMatrix(matrix));
console.log("alinea g)", matrixMainDiagonal(matrix));
console.log("alinea h)", matrixSecondDiagonal(matrix));
*/

console.log("alinea I)", matrixIdent(matrix));
