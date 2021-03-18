"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
// -------------------------------------------------------------------------------------------------------- //
var num1 = readlinesync.question('Digite o primeiro número: ');
var operator = readlinesync.question('Digite o operador aritmético (+, -, /, *): ');
var num2 = readlinesync.question('Digite o segundo número: ');
var result = num1 + operator + num2;
console.log(num1 + " " + operator + " " + num2 + " = " + eval(result));
