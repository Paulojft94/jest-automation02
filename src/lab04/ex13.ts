import { MyArray } from "./lab04_funcoes/funcoes04";

const myFirstClassInstance = new MyArray([-1, 11, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, -3, 400, 5, 2, 2, 3, 4, 5]);

console.log(myFirstClassInstance.checkLowestValue());
console.log(myFirstClassInstance.checkHighestValue());
console.log(myFirstClassInstance.meanArrayElements());
console.log(myFirstClassInstance.productAllElmenets());
console.log(myFirstClassInstance.remDuplicates());
console.log(myFirstClassInstance.reverseArray());
myFirstClassInstance.reverseArray();
console.log(myFirstClassInstance.primeNumbersOfArray());
