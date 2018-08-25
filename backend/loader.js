//-- importa o módulo server
const server = require('./config/server');
//-- inicializa o banco de dados
require('./config/database');
//-- inicializa as rotas, passando o servidor como parâmetro
require('./config/routes')(server);