const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedalSettingSchema = new Schema({
  button: {type:String, required:true},
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const PedalSetting = mongoose.model('PedalSetting', pedalSettingSchema);
module.exports = PedalSetting;
