import { matrixHighestValue, matrixLowestValue, matrixMeanElements, matrixProduct, remDuplicatesFromMatrix } from "./lab04_funcoes/funcoes04";

const matrix: number[][] = [
  [-1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, -3, 400, 5],
  [2, 2, 3, 4, 5],
];

console.log("alinea a)", matrixLowestValue(matrix));
console.log("alinea b)", matrixHighestValue(matrix));
console.log("alinea c)", matrixMeanElements(matrix));
console.log("alinea d)", matrixProduct(matrix));
console.log("alinea e)", remDuplicatesFromMatrix(matrix));
