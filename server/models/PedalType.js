const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedalTypeSchema = new Schema({
  model: {type:String, required:true},
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const PedalType = mongoose.model('PedalType', pedalTypeSchema);
module.exports = PedalType;
