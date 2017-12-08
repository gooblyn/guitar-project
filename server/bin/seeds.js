const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL)

// Seeds for the pedals settings.
const PedalSetting = require('../models/PedalSetting');

PedalSetting.collection.drop();
const settings = [
  {button: 'Volume/Gain'},
  {button: 'Level'},
  {button: 'Drive'},
  {button: 'Tone'},
  {button: 'Delay'},
  {button: 'Decay'},
  {button: 'Gate'},
  {button: 'Comp'},
  {button: 'Depth'},
  {button: 'Blend'},
  {button: 'Feedback'},
  {button: 'Rate'},
  {button: 'Shape'},
  {button: 'Speed'},
  {button: 'Bass'},
  {button: 'Treble'},
  {button: 'Mode'}
];

PedalSetting.create(settings, (err, docs) => {
  if (err){throw err;}
  console.log("settings created.");
  mongoose.connection.close();
});

// Seeds for the pedal types
const PedalType = require('../models/PedalType');

PedalType.collection.drop();
const types = [
  {model: 'Distorsion'},
  {model: 'Overdrive'},
  {model: 'Fuzz'},
  {model: 'Compressor'},
  {model: 'Delay'},
  {model: 'Chorus'},
  {model: 'Flanger'},
  {model: 'Reverb'},
  {model: 'Phaser'},
  {model: 'Tremolo'},
  {model: 'Wah-wah'},
  {model: 'Booster'}
];

PedalType.create(types, (err, docs) => {
  if (err){throw err;}
  console.log("PedalTypes created.");

  mongoose.connection.close();
});
