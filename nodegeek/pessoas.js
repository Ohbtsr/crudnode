// DEFINIÇÃO DA TABELA

const Sequelize = require('sequelize');          
const database = require('./database');
const Pessoas = database.define('pessoas',{
    // COLUNAS
    id:{
        type: Sequelize.INTEGER,
    },
    nome: Sequelize.STRING,
    idade: Sequelize.STRING,
    cpf: Sequelize.STRING,
});
module.exports = Pessoas;  // exportando as linhas para quando for requisitado