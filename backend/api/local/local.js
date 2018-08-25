//-- importação das dependências
const restful = require('node-restful');
const mongoose = restful.mongoose;

//-- criação do esquema para modelagem do banco
const localDefaultSchema = new mongoose.Schema({
  idLocal : { type: Number, min: 0},
  district : { type: String, required: true },
  local : { type: String, required: true },
  address : { type: String, required: true },
  schedule : { type: String, required: true },
  telephone : {
    tel1 : { type: String },
    tel2 : { type: String },
    tel3 : { type: String }
  },
  latitude : { type: Number, required: true },
  longitude : { type: Number, required: true }
});

//-- exportação do módulo
module.exports = restful.model('Local', localDefaultSchema);
