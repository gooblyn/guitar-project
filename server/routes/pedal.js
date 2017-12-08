const express = require('express');
const path = require('path');
const Pedal = require('../models/Pedal');
const User = require('../models/User');
const Types = require('../models/PedalType');
const Settings = require('../models/PedalSetting');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const pedalRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* POST - Create New Pedal. */
pedalRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Pedal");

  Types.findOne({"model" : req.body.pedType})
    .then(type => {
      // CUIDADO!!!! Esto tiene que ser un array
      Settings.findOne({"button" : req.body.setting})
      .then(setting => {
        const pedal = new Pedal ({
          trade: req.body.trade,
          model: req.body.model,
          pedType: type.model,
          setArray: [setting.button]
        });
        pedal.save()
        .then((pedal) => {
          User.findByIdAndUpdate(
            req.user._id,
            {$push: {"pedArray": {_id: pedal._id}}},
            {safe: true, new : true}
          )
          .then(() => {
            res.json({
              message: 'New Pedal created!',
              pedal: pedal
            })
          })
        })
      })
    })
    .catch(err => res.send(err))
});

/* GET - Listing the amplifiers of the user. */
pedalRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the pedals of the logged user");
  User.findOne({_id: req.user._id})
  .populate('pedArray')
  .then(user => res.status(200).json(user.pedArray))
  .catch(e => res.status(500).json({error:e.message}));
});

/* GET - Details of one ampli */
pedalRoutes.get('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("GET the details of one pedal");
  Pedal.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* Delete one ampli */
pedalRoutes.delete('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("DELETE one pedal");
  Pedal.remove({
      _id: req.params.id
    })
    .then(o => {
      console.log("pedal a borrar: "+req.params.id);
      User.findByIdAndUpdate(
        req.user._id,
        {$pull: {"pedArray": {_id: req.params.id}}},
        {safe: true, new : true}
      )
      .then(() => res.json({message: 'Pedal has been removed!'}))
    })
    .catch(e => res.json(e));
});

module.exports = pedalRoutes;
