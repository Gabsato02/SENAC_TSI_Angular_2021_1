"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
// No TypeScript você declara o tipo que a função retorna, bem como os tipos dos parâmetros
function isPositive(value) {
    if (value < 0) {
        return 'negativo';
    }
    else if (value > 0) {
        return 'positivo';
    }
    return 'zero';
}
var number = readlinesync.question('Digite um número: ');
console.log("O n\u00FAmero " + number + " \u00E9 " + isPositive(number) + ".");
