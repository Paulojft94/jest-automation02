import { alineaH, mediaMultiplos, produtoMultiplos, quantidadeImpares, quantidadePares, somaDeImpares, somaDeMultiplosLimiteDesordenado, somaDePares } from "./lab03_funcoes/funcoes03";

const limit1: number = 1;
const limit2: number = 10;

const limit3: number = 10;
const limit4: number = 1;

const multi: number = 2;
const multi2: number = 5;

console.log("alinea A) :" + somaDePares(limit1, limit2));

console.log("alinea B) :" + quantidadePares(limit1, limit2));

console.log("alinea C) :" + somaDeImpares(limit1, limit2));

console.log("alinea D) :" + quantidadeImpares(limit1, limit2));

console.log("alinea E) :" + somaDeMultiplosLimiteDesordenado(multi, limit3, limit4));

console.log(`alinea F) :${produtoMultiplos(multi, limit1, limit2)}`);

console.log(`alinea G) :${mediaMultiplos(multi, limit1, limit2)}`);

console.log(`alinea H) :${alineaH(multi, multi2, limit1, limit2)}`);
