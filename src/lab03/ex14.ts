import { deservedFoodGrou, foodAmount, foodAmountGroup } from "./lab03_funcoes/funcoes03";

const pesoCao: number = 119;
const racao: number = 501;

console.log(foodAmount(pesoCao, racao));

let pesosGroup: number[] = [4, 1, 100, 10];

let racaoGroup: number[] = [1, 1, 1, 1];

console.log(foodAmountGroup(pesosGroup, racaoGroup));
