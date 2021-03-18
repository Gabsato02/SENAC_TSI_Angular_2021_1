"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
var num1;
var num2;
do {
    if (!num1)
        num1 = Number(readlinesync.question('Digite o primeiro número: '));
    if (!num2)
        num2 = Number(readlinesync.question('Digite o segundo número: '));
} while (!num1 || !num2);
if (num1 && num2)
    console.log("A soma dos n\u00FAmeros " + num1 + " e " + num1 + " \u00E9: " + (num1 + num2));
