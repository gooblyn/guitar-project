const express = require('express');
const path = require('path');
const Amplifier = require('../models/Amplifier');
const User = require('../models/User');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const amplifierRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* POST - Create New Amplifier. */
amplifierRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Ampli");
  const {trade, model, year, power} = req.body;
  const ampli = new Amplifier({
    trade,
    model,
    year,
    power
  });
  ampli.save()
  .then((ampli) => {
    User.findByIdAndUpdate(
      req.user._id,
      {$push: {"ampliArray": {_id: ampli._id}}},
      {safe: true, new : true}
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
  User.findOne({_id: req.user._id})
  .populate('ampliArray')
  .then(user => res.status(200).json(user.ampliArray))
  .catch(e => res.status(500).json({error:e.message}));
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
        req.user._id,
        {$pull: {"ampliArray": req.params.id}},
        {safe: true, new : true}
      )
      .then(() => res.json({message: 'Amplifier has been removed!'}))
    })
    .catch(e => res.json(e));
});

module.exports = amplifierRoutes;
