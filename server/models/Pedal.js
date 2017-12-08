const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedalSchema = new Schema({
  trade: { type: String, required: [true, 'The trade is required'] },
  model: { type: String, required: [true, 'The model is required'] },
  pedType: { type: String },
  setArray: {type: [String] },
  photo: { type: String, default: 'https://n6-img-fp.akamaized.net/iconos-gratis/pedal-para-guitarra_318-143360.jpg?size=338&ext=jpg' }
},
{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const Pedal = mongoose.model('Pedal', pedalSchema);
module.exports = Pedal;
