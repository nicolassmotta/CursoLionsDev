/* * TRÊS PALAVRAS-CHAVE PARA DECLARAR VARIÁVEIS EM JAVASCRIPT:
 * 1. const: Declara variáveis de escopo de bloco (block scope), 
 * que DEVEM ser inicializadas e CUJO VALOR NÃO PODE ser reatribuído.
 * É a forma preferida para valores que não devem mudar.
 * 2. let: Declara variáveis de escopo de bloco (block scope), 
 * cujo valor PODE ser reatribuído.
 * É a forma preferida para variáveis que precisam mudar de valor.
 * 3. var: Declara variáveis de escopo de função (function scope) ou 
 * global. É amplamente considerada "legada" e EVITADA em código moderno
 * devido a problemas de escopo (hoisting e escopo global).
 */

// -------------------------------------------------------------------
// 1. Variáveis já existentes (MANTIDAS para contextualização)
// -------------------------------------------------------------------

let numero = 5 + 5; // let armazena um Number (10)
let mensagem = "O número é: "; // let armazena uma String
let vetor = [1, 2, 3]; // let armazena um Array (tipo Object)

// Reatribuição do valor 'mensagem' (possível com 'let')
mensagem = mensagem + numero; // "O número é: 10"

console.log("--- Variáveis Iniciais ---");
console.log(mensagem);
console.log("--------------------------");

// -------------------------------------------------------------------
// 2. Utilizando 'const' (Constantes - Valor não pode mudar)
// -------------------------------------------------------------------

// a) Primitivos com const
const PI = 3.14159; // Number (usado para um valor fixo)
const NOME_DO_APP = "MeuApp"; // String

// Erro se tentar reatribuir: PI = 3.0; // Isso causaria um TypeError!

// b) Objetos e Arrays com const (A REFERÊNCIA é constante, o CONTEÚDO PODE mudar)
const CONFIGURACOES = { tema: "claro", notificacoes: true }; // Object
const DIAS_UTEIS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]; // Array

// O CONTEÚDO PODE MUDAR (A referência na memória não muda)
CONFIGURACOES.tema = "escuro"; // Isso é permitido!
DIAS_UTEIS.push("Sábado"); // Isso é permitido!

console.log("\n--- Variáveis const ---");
console.log("PI:", PI);
console.log("Configurações atualizadas:", CONFIGURACOES);
console.log("Dias atualizados:", DIAS_UTEIS);
console.log("-----------------------");

// -------------------------------------------------------------------
// 3. Utilizando 'let' (Variáveis mutáveis de escopo de bloco)
// -------------------------------------------------------------------

// a) Outros Tipos Primitivos com let
let estaLogado = true; // Boolean
let preco = 19.99; // Number (Ponto flutuante)
let simbolo = Symbol("id unico"); // Symbol (para identificadores únicos)
let identificador = null; // Null (Ausência intencional de qualquer valor objeto ou primitivo)
let indefinido; // Undefined (Valor padrão de uma variável declarada, mas não inicializada)

// b) Reatribuição do valor (possível com 'let')
estaLogado = false; // Muda de true para false

console.log("\n--- Variáveis let (Tipos Primitivos) ---");
console.log("Está logado (após mudança):", estaLogado);
console.log("Tipo Symbol:", simbolo);
console.log("Tipo Null:", identificador);
console.log("Tipo Undefined (sem inicialização):", indefinido);
console.log("----------------------------------------");


// -------------------------------------------------------------------
// 4. Utilizando 'var' (Escopo de função - EVITAR)
// -------------------------------------------------------------------

var contadorGlobal = 0; // var armazena um Number

// Exemplo de como var pode causar confusão de escopo (apenas para demonstração)
function exemploVar() {
    var x = 10;
    if (true) {
        var x = 20; // Re-declara e reatribui a mesma variável x no ESCOPO DA FUNÇÃO
        console.log("Dentro do if (var x):", x); // 20
    }
    console.log("Fora do if (var x):", x); // 20 (Diferente de 'let' e 'const'!)
}
exemploVar();

console.log("\n--- Variáveis var (Legado - Evitar) ---");
console.log("Contador Global (var):", contadorGlobal);
console.log("-----------------------------------------");

// -------------------------------------------------------------------
// 5. Outros Tipos de Variáveis (Objects, Functions)
// -------------------------------------------------------------------

// a) Objeto simples (Object)
const USUARIO = {
    nome: "Alice",
    idade: 30,
    endereco: {
        rua: "Principal",
        cidade: "Metropolis"
    }
};

// b) Função (Function - que também é um tipo de Object)
const somar = (a, b) => a + b; // Função de seta (Arrow Function)
function multiplicar(a, b) { // Função de declaração
    return a * b;
}

// c) Data (Date - tipo Object)
let dataAtual = new Date();

// d) Expressão Regular (RegExp - tipo Object)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("\n--- Variáveis Tipo Objeto/Função ---");
console.log("Nome do Usuário:", USUARIO.nome);
console.log("Resultado da soma:", somar(5, 3));
console.log("Resultado da multiplicação:", multiplicar(5, 3));
console.log("Data Atual:", dataAtual);
console.log("É um email válido ('teste@ex.com')?:", EMAIL_REGEX.test("teste@ex.com"));
console.log("------------------------------------");

// -------------------------------------------------------------------
// 6. Variáveis Especiais/Avançadas
// -------------------------------------------------------------------

// a) BigInt (Para números inteiros muito grandes)
const ID_GIGANTE = 9007199254740991n + 1n; // O 'n' no final indica um BigInt

// b) Objeto Set (Coleção de valores únicos)
const setUnico = new Set([1, 1, 2, 3]);

// c) Objeto Map (Coleção de pares chave-valor mais flexível que um Objeto simples)
const mapInfo = new Map();
mapInfo.set('chave', 'valor');

console.log("\n--- Variáveis Especiais ---");
console.log("ID Gigante (BigInt):", ID_GIGANTE);
console.log("Set (apenas valores únicos):", setUnico);
console.log("Map (recuperando valor):", mapInfo.get('chave'));
console.log("---------------------------");

// Exemplo final de variação de escopo
if (true) {
    let escopoBloco = "Eu só existo aqui dentro";
    // console.log(variavelNova); // Esta linha causaria um ReferenceError se estivesse aqui
}
// console.log(escopoBloco); // Isso causaria um ReferenceError!