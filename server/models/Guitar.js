const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
  trade: {type:String, required: true},
  model: {type:String, required:true},
  year: {type:Number},
  photo: {type:String, default: 'https://image.freepik.com/iconos-gratis/guitarra-clasica_318-9989.jpg'},
});

const Guitar = mongoose.model('Guitar', guitarSchema);
module.exports = Guitar;
