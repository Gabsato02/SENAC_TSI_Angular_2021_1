import * as readlinesync from 'readline-sync';

let num1 : number;
let num2 : number;

do {
    if (!num1) num1 = Number(readlinesync.question('Digite o primeiro número: '));
    if (!num2) num2 = Number(readlinesync.question('Digite o segundo número: '));
} while (!num1 || !num2)

if (num1 && num2) console.log(`A soma dos números ${num1} e ${num2} é: ${num1 + num2}`);