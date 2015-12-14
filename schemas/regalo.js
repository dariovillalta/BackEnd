var mongoose = require('mongoose');

var RegaloSchema = new mongoose.Schema({
  name : String,
  descripcion : String,
  peso : Number,
  destinatario : String,
  status : String
});

module.exports = mongoose.model('Regalo', RegaloSchema);
