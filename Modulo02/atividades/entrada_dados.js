const prompt = require('prompt-sync')();
let nome = '';

nome = prompt('Qual seu nome?');

processamento(nome);

function processamento(nome) {
    console.log('Olá, ' + nome + '! Seja bem-vindo(a)!');
}