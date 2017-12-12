const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: {type:String, required: true},
  artist: {type:String, required:true},
  textTab: {type:String, required:true},
  htmlTab: {type:String, required:true},
  guitar: { type: Schema.Types.ObjectId, ref:'Guitar' },
  amplifier: { type: Schema.Types.ObjectId, ref:'Amplifier' },
  pedals: {type: [{
              pedal: { type: Schema.Types.ObjectId, ref:'Pedal' },
              settings: { type: [{
                            setting: { type: Schema.Types.ObjectId, ref:'PedalSetting' },
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
