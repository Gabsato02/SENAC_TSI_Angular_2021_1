import * as readlinesync from 'readline-sync';

let numbers: number[] = new Array();
let newNumber: number;
let evenNumbers: number[] = new Array();

do {
    newNumber = Number(readlinesync.question('Digite um número: '));
    numbers.push(newNumber);
} while (newNumber >= 0)

for (let el of numbers) {
    if (el % 2 === 0) evenNumbers.push(el);
}

console.log(`Os números digitados foram: ${numbers}`)
console.log(`Os números pares são ${evenNumbers}`);