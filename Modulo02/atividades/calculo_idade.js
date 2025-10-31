const prompt = require('prompt-sync')();

let nome;
let idade;

nome = prompt('Qual seu nome?');

idade = prompt('Quantos anos você tem?');

processamento(nome, idade);

function processamento(nome, idade) {
    
    console.log('Seu nome é ' + nome + ' e sua idade é ' + idade + '.');
    console.log('Caso você esteja com um ano a mais, provavelmente não fez aniversário esse ano ainda!');
}