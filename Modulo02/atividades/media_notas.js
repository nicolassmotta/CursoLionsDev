const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Qual foi a sua nota da prova 01? '));
let num2 = parseFloat(prompt('Qual foi a sua nota da prova 02? '));

processamento(num1, num2);

function processamento(num1, num2) {
    let resultado = (num1 + num2) / 2;
    console.log('A sua média é: ' + resultado);
    return;
}