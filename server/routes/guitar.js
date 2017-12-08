const express = require('express');
const path = require('path');
const Guitar = require('../models/Guitar');
const User = require('../models/User');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const guitarRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* POST - Create New Guitar. */
guitarRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Guitar");
  const {trade, model, year} = req.body;
  const guitar = new Guitar({
    trade,
    model,
    year
  });
  guitar.save()
  .then((guitar) => {
    User.findByIdAndUpdate(
      req.user._id,
      {$push: {"guitArray": {_id: guitar._id}}},
      {safe: true, new : true}
    )
    .then(() => {
      res.json({
        message: 'New Guitar created!',
        guitar: guitar
      })
    })
  })
  .catch(err => res.send(err))
});

/* GET - Listing the guitars of the user. */
guitarRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the guitars of the logged user");
  User.findOne({_id: req.user._id})
  .populate('guitArray')
  .then(user => res.status(200).json(user.guitArray))
  .catch(e => res.status(500).json({error:e.message}));
});

/* GET - Details of one guitar */
guitarRoutes.get('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("GET the details of one guitar");
  Guitar.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* Delete one guitar */
guitarRoutes.delete('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("DELETE one guitar");
  Guitar.remove({
      _id: req.params.id
    })
    .then(o => {
      console.log("guitarra a borrar: "+req.user);
      User.findByIdAndUpdate(
        req.user._id,
        {$pull: {"guitArray": req.params.id}},
        {safe: true, new : true}
      )
      .then(() => res.json({message: 'Guitar has been removed!'}))
    })
    .catch(e => res.json(e));
});

module.exports = guitarRoutes;
