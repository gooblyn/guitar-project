const express = require('express');
const path = require('path');
const Pedal = require('../models/Pedal');
const User = require('../models/User');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const profileRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* GET - Listing the pedals of the user. */
profileRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the pedals of the logged user");
  User.findOne({_id: req.user._id})
  .populate('pedArray')
  .then(user => res.status(200).json(user.pedArray))
  .catch(e => res.status(500).json({error:e.message}));
});

// .find({ conversation: conversationId })
//       .sort('-updatedAt')
//       .limit(10)
//       .exec(function(err, messages) {
//
//       });
//https://stackoverflow.com/questions/37533865/mongoose-query-select-10-most-recent-document-without-changing-order
module.exports = profileRoutes;
