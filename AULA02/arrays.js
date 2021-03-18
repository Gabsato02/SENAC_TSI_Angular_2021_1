"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
var numbers = new Array();
var newNumber;
var evenNumbers = new Array();
do {
    newNumber = Number(readlinesync.question('Digite um número: '));
    numbers.push(newNumber);
} while (newNumber >= 0);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var el = numbers_1[_i];
    if (el % 2 === 0)
        evenNumbers.push(el);
}
console.log("Os n\u00FAmeros digitados foram: " + numbers);
console.log("Os n\u00FAmeros pares s\u00E3o " + evenNumbers);
