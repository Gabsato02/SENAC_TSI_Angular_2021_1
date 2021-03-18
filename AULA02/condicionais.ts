import * as readlinesync from 'readline-sync';

// -------------------------------------------------------------------------------------------------------- //

const num1: string = readlinesync.question('Digite o primeiro número: ');
const operator: string = readlinesync.question('Digite o operador aritmético (+, -, /, *): ');
const num2: string  = readlinesync.question('Digite o segundo número: ');
const result = num1 + operator + num2;

console.log(`${num1} ${operator} ${num2} = ${eval(result)}`);