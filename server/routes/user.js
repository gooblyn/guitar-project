const express = require('express');
const path = require('path');
const User = require('../models/User');
const Song = require('../models/Song');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const profileRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* GET - Listing the 10 last modified songs of the user. */
profileRoutes.get('/profile', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the user profile");
  User.findOne({
      _id: req.user._id
    })
    .then(user => {
      Song.find({})
        .then(songs => {
          songs = songs.filter(e => {
            if (user.songArray.indexOf(e._id) != -1) {
              return e;
            }
          }).sort('-updatedAt').reverse();
          res.status(200).json(songs);
        })
    })
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = profileRoutes;
