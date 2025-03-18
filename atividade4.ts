console.clear ()

/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require (`prompt-sync`)()

let numeroA: number = parseInt(teclado(`Digite o primeiro número: `));
let numeroB: number = parseInt(teclado(`Digite o segundo número: `));
let numeroC: number = parseInt(teclado(`Digite o terceiro número: `));
let maiorN: number = 0;
let meioN: number = 0;
let menorN: number = 0;





if (numeroA > numeroB && numeroA > numeroB){
    maiorN = numeroA;
    if (numeroB > numeroC){
        meioN = numeroB;
        menorN = numeroC;
    }
    else if (numeroC > numeroB){
        meioN = numeroC;
        menorN = numeroB;
    }
}
if (numeroB > numeroA && numeroB > numeroC){
    maiorN = numeroB;
    if (numeroA > numeroC){
        meioN = numeroA;
        menorN = numeroC;
    }
    else if (numeroC > numeroA){
        meioN = numeroC;
        menorN = numeroA;
    }
};
if (numeroC > numeroB && numeroC > numeroA){
    maiorN = numeroC;
    if (numeroB > numeroA){
        meioN = numeroB;
        menorN = numeroA;
    }
    else if (numeroA > numeroB){
        meioN = numeroA;
        menorN = numeroB;
    }
}
console.log(`os números do maior pro menor são: ${maiorN}, ${meioN}, ${menorN}`);