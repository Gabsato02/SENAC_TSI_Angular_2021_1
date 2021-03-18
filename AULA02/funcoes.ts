import * as readlinesync from 'readline-sync';

// No TypeScript você declara o tipo que a função retorna, bem como os tipos dos parâmetros
function isPositive(value: number) : string {
    if (value < 0) {
        return 'negativo';
    } else if (value > 0) {
        return 'positivo';
    }
    return 'zero';
}

const number = readlinesync.question('Digite um número: ');

console.log(`O número ${number} é ${isPositive(number)}.`);