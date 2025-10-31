let baralho = require('./baralho');

function listarBaralho(baralho) {
    
    baralho.forEach((baralho, index) => {
        console.log(`IdBaralho: ${baralho.id}:`);
        console.log(`Título: ${baralho.titulo}`);
        console.log('-----------------------');
    });
}

module.exports = listarBaralho;