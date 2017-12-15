const express = require('express');
const path = require('path');
const Amplifier = require('../models/Amplifier');
const User = require('../models/User');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const amplifierRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* POST - Create New Amplifier. */
amplifierRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Ampli");
  let photo;
  if (req.body.trade == "Marshall")
    photo = "https://icon-icons.com/icons2/559/PNG/512/Amplifier_1_icon-icons.com_53700.png";
  if (req.body.trade == "Yamaha")
    photo = "https://png.icons8.com/windows/540/guitar-amp.png"
  if (req.body.trade == "Ibanez")
    photo = "https://d30y9cdsu7xlg0.cloudfront.net/png/50747-200.png"
  const {
    trade,
    model,
    year,
    power
  } = req.body;
  const ampli = new Amplifier({
    trade,
    model,
    year,
    power,
    photo
  });
  ampli.save()
    .then((ampli) => {
      User.findByIdAndUpdate(
          req.user._id, {
            $push: {
              "ampliArray": {
                _id: ampli._id
              }
            }
          }, {
            safe: true,
            new: true
          }
        )
        .then(() => {
          res.json({
            message: 'New Amplifier created!',
            ampli: ampli
          })
        })
    })
    .catch(err => res.send(err))
});

/* GET - Listing the amplifiers of the user. */
amplifierRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the amplifiers of the logged user");
  User.findOne({
      _id: req.user._id
    })
    .populate('ampliArray')
    .then(user => res.status(200).json(user.ampliArray))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

/* GET - Details of one ampli */
amplifierRoutes.get('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("GET the details of one ampli");
  Amplifier.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* Delete one ampli */
amplifierRoutes.delete('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("DELETE one ampli");
  Amplifier.remove({
      _id: req.params.id
    })
    .then(o => {
      User.findByIdAndUpdate(
          req.user._id, {
            $pull: {
              "ampliArray": req.params.id
            }
          }, {
            safe: true,
            new: true
          }
        )
        .then(() => res.json({
          message: 'Amplifier has been removed!'
        }))
    })
    .catch(e => res.json(e));
});

module.exports = amplifierRoutes;
