let contatos = require('./contatos');

function listarContatos(contatos) {
    
    contatos.forEach(contato => {
        console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`);
    });
}

module.exports = listarContatos;