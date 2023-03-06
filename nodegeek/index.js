const express = require('express');
const server = express()
server.use(express.json())

server.listen(3000);
const alunos = ['lindomar','joao']

// MIDD

function checkAlunos(req, res, next) {
    if (!req.body.name) {
      return res.status(400).json({ error: 'Nome do aluno requerido' });
      // middleware local que irá checar se a propriedade name foi infomada, 
      // caso negativo, irá retornar um erro 400 - BAD REQUEST 
    }
    return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
  } 
    
  function checkAlunoLista(req, res, next) {
    const aluno = alunos[req.params.index];
    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não existe' });
    } // checa se o Geek exisdte no array, caso negativo informa que o index não existe no array
  
    req.aluno = aluno;
  
    return next();
  }

 // Retorna um aluno específico por index
 server.get('alunos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(alunos[index]);
 })
// Retorna todos os alunos
server.get('/alunos', (req, res) => {
    return res.json(alunos)
});
 // Criar um novo aluno [POST]
 server.post('/alunos', checkAlunos,(req, res) => {
    const { name } = req.body;
    alunos.push(name); 
    return res.json(name);
 });

 // Atualizar aluno
 server.put('/alunos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    alunos [index] = name;

    return res.json(alunos);

 });

 //  Deletar Aluno

  server.delete('/alunos/:index', (req, res) => {
    const { index } = req.params;
    alunos.splice(index, 1);
    return res.json({ message: 'Aluno deletado'});

  });
