//-- importação das dependências
const _ = require('lodash');
const Local = require('./local');

//-- configuração dos verbos http usando node-restful
Local.methods(['get', 'post', 'put', 'delete']);

//-- permitindo a validação ao atualizar e retornando o objeto novo
Local.updateOptions({new: true, runValidators: true});

Local.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;
  if(bundle.errors) {
    var errors = parseErrors(bundle.errors);
    res.status(500).json({errors});
  } else {
    next();
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

//-- método para retornar total de documentos cadastrados
Local.route('count', function(req, res, next) {
  Local.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.json({value});
    }
  })
})

//-- exportação do módulo
module.exports = Local;
