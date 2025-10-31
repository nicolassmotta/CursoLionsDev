// Modulo07/index.js
const prompt = require('prompt-sync')();
const contatos = require('./contatos');
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

function mainMenu() {
    console.log("\nMenu de Contatos:");
    console.log("1. Listar Contatos");
    console.log("2. Adicionar Contato");
    console.log("3. Atualizar Contato");
    console.log("4. Remover Contato");
    console.log("5. Sair");
}

let encerrar = false;

while (!encerrar) {
    mainMenu();
    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
            listarContatos(contatos);
            break;
        case '2':
            const novoContato = {
                id: parseInt(prompt("ID: ")),
                nome: prompt("Nome: "),
                telefone: prompt("Telefone: "),
                email: prompt("Email: ")
            };
            adicionarContato(contatos, novoContato);
            console.log('Contato adicionado com sucesso!');
            break;
        case '3':
            const idAtualizar = parseInt(prompt("ID do contato a ser atualizado: "));
            const novosDados = {
                nome: prompt("Novo Nome: "),
                telefone: prompt("Novo Telefone: "),
                email: prompt("Novo Email: ")
            };
            atualizarContato(contatos, idAtualizar, novosDados);
            console.log('Contato atualizado com sucesso!');
            break;
        case '4':
            const idRemover = parseInt(prompt("ID do contato a ser removido: "));
            removerContato(contatos, idRemover);
            console.log('Contato removido com sucesso!');
            break;
        case '5':
            console.log("Saindo...");
            encerrar = true;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
