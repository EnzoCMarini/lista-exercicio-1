console.clear ()

/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA,
utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Enzo Cassão Marini 
*/
let teclado = require (`prompt-sync`)();

const pi: number = 3.14159;
let altura: number = parseInt(teclado(`Digite a altura da lata: `));
let raio: number = parseInt(teclado(`Digite o raio da lata: `));
let volume: number = pi * (raio * raio) * altura;

console.log(`O volume da lata é: ${volume}`);