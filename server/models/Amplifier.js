const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amplifierSchema = new Schema({
  trade: {type:String, required: true},
  model: {type:String, required:true},
  year: {type:Number},
  power: {type:String},
  photo: {type:String, default: 'https://icon-icons.com/icons2/559/PNG/512/Amplifier_1_icon-icons.com_53700.png'},
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const Amplifier = mongoose.model('Amplifier', amplifierSchema);
module.exports = Amplifier;
