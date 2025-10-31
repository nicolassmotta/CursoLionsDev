let contatos = require('./contatos');

function removerContato(contatos, id) {

    const index = contatos.findIndex(contato => contato.id === id);
    
    if (index !== -1) {
        contatos.splice(index, 1);
    }
}

module.exports = removerContato;