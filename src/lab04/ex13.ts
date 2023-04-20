import { MyArray } from "./lab04_funcoes/funcoes04";

const myFirstClassInstance = new MyArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

/* console.log(checkLowestValue(numArray));
console.log(checkHighestValue(numArray));
console.log(meanArrayElements(numArray));
console.log(productAllElmenets(numArray));
console.log(remDuplicates(numArray));
console.log(reverseArray(numArray)); */

console.log(myFirstClassInstance.checkLowestValue());
console.log(myFirstClassInstance.checkHighestValue());
console.log(myFirstClassInstance.meanArrayElements());
console.log(myFirstClassInstance.productAllElmenets());
console.log(myFirstClassInstance.remDuplicates());
console.log(myFirstClassInstance.reverseArray());
