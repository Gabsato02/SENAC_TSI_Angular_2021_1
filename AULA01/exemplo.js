"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
// DECLARAÇÃO DE VARIÁVEL - necessita o tipo de variável
var message;
message = 'Hello World!';
// Quando se atribui um valor na declaração, o TypeScript entende o tipo da variável
var message2 = 'Olá, mundo!';
// TIPOS ACEITOS
var numero; // número inteiro ou decimal
var booleano; // verdadeiro ou falso
var texto; // texto
var funcoes; // funções que não retornam nenhum valor
var nulo; // não possui valor
var indefinido; // não foi inicializado
var qualquer; // aceita qualquer tipo (não usar)
console.log(message);
// tsc nomedoarquivo.ts no Terminal transpila o arquivo de Typescript em Javascript
//readlinesync serve pra simular uma conversa com um usuário pelo console
var nome = readlinesync.question('Qual seu nome?');
console.log("Ol\u00E1, " + nome + "! Seja bem vindo!");
