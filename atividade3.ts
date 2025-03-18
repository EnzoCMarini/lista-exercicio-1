console.clear ()

/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite uma letra do alfabeto romano: `);

if (letra == `a`|| letra == `e` || letra == `i` || letra == `o` || letra == `u`){
    console.log(`A letra ${letra} é uma vogal`);
}
else{
    console.log(`A letra ${letra} é uma consoante`);
};