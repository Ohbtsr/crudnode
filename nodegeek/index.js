const express = require('express');
const server = express()
server.use(expnpmress.json())

server.listen(3000);
let dadosDb =  null       // definição de uma var 
const operacoes = require('./operacoes');
// MIDD

function checkAlunos(req, res, next) {
    if (!req.body.name) {
      return res.status(400).json({ error: 'Nome do aluno requerido' });
      // checa se o nome foi inserido corretamente
      // caso não: irá retornar um erro 400 - BAD REQUEST 
    }
    return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
  } 
    
  function checkAlunoLista(req, res, next) {
    const aluno = alunos[req.params.index];
    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não existe' });
    } // checa se o aluno existe na lista, caso negativo a menssagem aluno são existe será informada  
    req.aluno = aluno;
    return next();
  }

 // Retorna um aluno específico por index
 server.get('alunos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(alunos[index]);
 })
// Retorna todos os alunos
server.get('/alunos', async(req, res) => {
    if(dadosDb) {
      dadosDb = await operacoes.selecionarTabela() // Exibe os dados e considera a variável dadosDB para incluir 
      return res.json(dadosDb); 
    }
    else{
      return res.send('Não está conectado ao banco de dados');
    }
});
 // Criar um novo aluno [POST]
 server.post('/alunos', checkAlunos,(req, res) => {
    const { name } = req.body;
    alunos.push(name); 
    return res.json(name);
 });

 server.get('/create',async(req, res) => {
  await operacoes.criarTabela();

 })

 // Atualizar aluno
 server.put('/alunos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    alunos [index] = name;
    return res.json(alunos);
 });

 //  Deletar Aluno
  server.delete('/alunos/:index', checkAlunoLista, (req, res) => {
    const { index } = req.params;
    alunos.splice(index, 1);
    return res.json({ message: 'Aluno deletado'});
  });
