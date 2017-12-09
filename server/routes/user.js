const express = require('express');
const path = require('path');
const User = require('../models/User');
const Guitar = require('../models/Guitar');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const profileRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* GET - Listing the pedals of the user. */
profileRoutes.get('/profile', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the user profile");
  User.findOne({_id: req.user._id})
    // .populate('guitArray')
    .then(user => {
      Guitar.find({})
        .then(guitars => {
          guitars = guitars.filter(e => {
            if(user.guitArray.indexOf(e._id) != -1) {
              return e;
            }
          }).sort('-updatedAt').reverse();
          res.status(200).json(guitars);
        })
    })
    .catch(e => res.status(500).json({error:e.message}));
});

module.exports = profileRoutes;
