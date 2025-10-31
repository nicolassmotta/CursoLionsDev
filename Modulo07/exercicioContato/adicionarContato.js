let contatos = require('./contatos');

function adicionarContato(contatos, novoContato) {
    contatos.push(novoContato);
}

module.exports = adicionarContato;