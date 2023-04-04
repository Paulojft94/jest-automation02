import { deservedFoodGrou, foodAmount, foodAmountGroup } from "./lab03_funcoes/funcoes03";

const pesoCao: number = 119;
const racao: number = 501;

console.log(foodAmount(pesoCao, racao));

let pesosGroup: number[] = [46, 46, 46];

let racaoGroup: number[] = [499, 500, 501];

console.log(foodAmountGroup(pesosGroup, racaoGroup));
