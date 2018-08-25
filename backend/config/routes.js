//-- importação das dependências
const express = require('express');

//-- exportação do módulo
module.exports = function(server) {
  // configurando o local padrão da API
  const router = express.Router();
  server.use('/api', router);

  // rotas da API
  const localService = require('../api/local/localService');
  localService.register(router, '/locals');
}
