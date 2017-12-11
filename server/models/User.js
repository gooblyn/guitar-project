const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: [true, 'The username is required'] },
  password: { type: String, required: [true, 'The password is required'] },
  email: { type: String, required: [true, 'The email is required'] },
  name: { type: String, required: [true, 'The name is required'] },
  photo: { type: String, default: 'https://image.freepik.com/iconos-gratis/guitarrista_318-29248.jpg' },
  songArray: {type: [{type:Schema.Types.ObjectId, ref:'Song'}]},
  guitArray: {type: [{ type: Schema.Types.ObjectId, ref:'Guitar' }]},
  ampliArray: {type: [{ type: Schema.Types.ObjectId, ref:'Amplifier' }]},
  pedArray: {type: [{ type: Schema.Types.ObjectId, ref:'Pedal' }]}
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
