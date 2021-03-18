import * as readlinesync from 'readline-sync';

// DECLARAÇÃO DE VARIÁVEL - necessita o tipo de variável
let message: string;
message = 'Hello World!';

// Quando se atribui um valor na declaração, o TypeScript entende o tipo da variável
const message2 = 'Olá, mundo!';

// TIPOS ACEITOS
let numero: number; // número inteiro ou decimal
let booleano: boolean; // verdadeiro ou falso
let texto: string; // texto
let funcoes: void; // funções que não retornam nenhum valor
let nulo: null; // não possui valor
let indefinido: undefined; // não foi inicializado
let qualquer: any; // aceita qualquer tipo (não usar)

console.log(message);

// tsc nomedoarquivo.ts no Terminal transpila o arquivo de Typescript em Javascript

//readlinesync serve pra simular uma conversa com um usuário pelo console
const nome: string = readlinesync.question('Qual seu nome? ');
console.log(`Olá, ${nome}! Seja bem vindo!`);