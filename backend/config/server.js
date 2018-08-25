//-- atribuição do número da porta do servidor
const port = 3003;

//-- importação das dependências
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

//-- habilitar maior interpretação do formato dos dados na submissão de formulário 
server.use(bodyParser.urlencoded({ extended: true }));
//--  realizar a interpretação no corpo da requisição transformando o JSON em um objeto
server.use(bodyParser.json());
//-- habilita o acesso de outra aplicação nesse back-end
server.use(allowCors);
//-- 
server.use(queryParser());

//-- servidor escutando a porta atribuída na const port
server.listen(port, function() {
  console.log(`Servidor back-end está rodando na porta ${port}.`)
});

//-- exportação do módulo
module.exports = server;
