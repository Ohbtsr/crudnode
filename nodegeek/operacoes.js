const database = require('./database'); // VAR DATABASE CONTENDO O ARQUIVO DATABASE.JS
const dadosTabela = require('./pessoas'); // OBTENDO DADOS DO FILE PESSOAS.JS


async function criarTabela(){
    await database.sync();
}
async function selecionarTabela(){
    const todasPessoas = await dadosTabela.findAll();    // Definindo a VAR com dados.tabela > solicita os dados no banco de dados
    return todasPessoas;                                        // Retorna a lista de pessoas ( variavel )
}












module.exports = {criarTabela, selecionarTabela}











