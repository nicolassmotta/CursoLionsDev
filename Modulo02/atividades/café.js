const prompt = require('prompt-sync')();
let resposta;

resposta = prompt('Você gosta de café?\n[S]- Sim\n[N] - Não\nResposta: ');

processamento(resposta);

function processamento(resposta) {
    
    const gostaDeCafe = (resposta.toUpperCase() === 'S' || resposta.toUpperCase() === 'SIM');
    if (gostaDeCafe) {
        console.log('Que ótimo! O café é uma excelente maneira de começar o dia ou ter um bom momento de pausa. Aproveite!');
    } else {
        console.log('Tudo bem! Existem muitas outras bebidas deliciosas por aí. Talvez você prefira um chá ou chocolate quente.');
    }
}
