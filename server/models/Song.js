const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {type:String, required: true},
  artist: {type:String, required:true},
  textTab: {type:String, required:true},
  htmlTab: {type:String, required:true},
  guitar: { type: String },
  amplifier: { type: String },
  pedals: {type: [{
              pedal: { type: String },
              settings: { type: [{
                            setting: { type: String},
                            value: {type: Number}
                        }]}
          }],
          default: []
  }
},{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
