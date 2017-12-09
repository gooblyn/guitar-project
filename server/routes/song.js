const express = require('express');
const path = require('path');
const ugs = require('ultimate-guitar-scraper');
const Song = require('../models/Song');
const User = require('../models/User');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const songRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* GET - Create New Song. */
songRoutes.get('/new', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the needed information for crete a new song");
  User.findOne({_id: req.user._id})
    .populate('guitArray')
    .populate('ampliArray')
    .populate('pedArray')
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({error:e.message}));
});

/* POST - Create New Song. */
songRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Song");
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

/* GET - Listing the songs of the user. */
songRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  // console.log("GET the amplifiers of the logged user");
  // User.findOne({_id: req.user._id})
  // .populate('ampliArray')
  // .then(user => res.status(200).json(user.ampliArray))
  // .catch(e => res.status(500).json({error:e.message}));
});

/* GET - Details of one song */
songRoutes.get('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  // console.log("GET the details of one ampli");
  // Amplifier.findById(req.params.id)
  //   .then(o => res.json(o))
  //   .catch(e => res.json(e));
});

/* PUT - Update of one song */
songRoutes.put('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  // console.log("GET the details of one ampli");
  // Amplifier.findById(req.params.id)
  //   .then(o => res.json(o))
  //   .catch(e => res.json(e));
});

/* Delete one song */
songRoutes.delete('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  // console.log("DELETE one ampli");
  // Amplifier.remove({
  //     _id: req.params.id
  //   })
  //   .then(o => {
  //     User.findByIdAndUpdate(
  //       req.user._id,
  //       {$pull: {"ampliArray": req.params.id}},
  //       {safe: true, new : true}
  //     )
  //     .then(() => res.json({message: 'Amplifier has been removed!'}))
  //   })
  //   .catch(e => res.json(e));
});

module.exports = songRoutes;
