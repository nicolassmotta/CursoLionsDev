let flashcard = require('./flashcard');

function deletarFlashcards(flashcards, idFlashcard) {
    
    const index = flashcards.findIndex(flashcard => flashcard.id === idFlashcard);
    if (index !== -1) {
        flashcards.splice(index, 1);
        console.log(`Flashcard com ID ${idFlashcard} deletado com sucesso.`);
    } else {
        console.log(`Flashcard com ID ${idFlashcard} não encontrado.`);
    }
}

module.exports = deletarFlashcards;