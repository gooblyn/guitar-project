const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: {type:String, required: true},
  components: [{type:Schema.Types.ObjectId, ref:'User'}],
  songs: [{type:Schema.Types.ObjectId, ref:'Song'}],
},
{
  timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
