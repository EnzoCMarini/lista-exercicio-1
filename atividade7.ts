console.clear ()

/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, 
 e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, 
 calcule e escreva o valor total da compra.
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require (`prompt-sync`)();
let valor: number = 0;

console.log(`+ =========================== +`);
console.log(`+ ===== Sistema da maçã ===== +`);
console.log(`+   quantidade de maçã menor  +`);
console.log(`+   que 12 o valor é R$ 0,30  +`);
console.log(`+   quantidade de maçã maior  +`);
console.log(`+        ou igual a 12        +`);
console.log(`+      o valor é R$ 0,25      +`);
console.log(`+ =========================== +`);
console.log(`+ =========================== +`);

let macas = parseInt(teclado(`Digite a quantidade de maçãs compradas:  `));


if (macas < 12){
    valor = macas * 0.30;
}
else if (macas >= 12){
    valor = macas * 0.25;
}
else{
    console.log(`Algo deu errado!`);
}

console.log(`A quantidade de ${macas} o preço pago é R$${valor}`);