//-- importação das dependências
const mongoose = require('mongoose');

//-- inserindo a Promise na dependência do mongoose
mongoose.Promise = global.Promise;

//-- exportando a conexão com o módulo
module.exports = mongoose.connect('mongodb://localhost/DBReciclaOleo');

//-- mensagens de erro personalizadas
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
