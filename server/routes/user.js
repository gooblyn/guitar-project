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
    .populate('songArray')
    .then(user => {
      user.songArray.sort(function(a,b){
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      res.status(200).json(user.songArray.splice(0, 1));
    })
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

module.exports = profileRoutes;
