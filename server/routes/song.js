const express = require('express');
const path = require('path');
const ugs = require('ultimate-guitar-scraper');
const Song = require('../models/Song');
const User = require('../models/User');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const songRoutes = express.Router();
const mongoose = require('mongoose');
// const upload = require('../config/multer');

/* GET - Listing the songs of the user. */
songRoutes.get('/collection', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the songs of the logged user");
  User.findOne({_id: req.user._id})
    .populate('songArray')
    .then(user => res.status(200).json(user.songArray))
    .catch(e => res.status(500).json({error:e.message}));
});

/* GET - Details of one song */
songRoutes.get('/collection/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("GET the details of one song");
  Song.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* POST - Search the tab for the song. */
songRoutes.post('/search', ensureLoggedIn('/'), (req, res) => {
  console.log("POST Search the song for the tab");
  const {name, artist} = req.body;
  let url ="";
  let rates=0, rating = 0;
  ugs.search({bandName: artist,
              songName: name,
              page: 1,
              type: ['tabs', 'chords']}, (error, tabs) => {
    if (error) {
      console.log(error)
    }
    else {
      tabs.forEach( e => {
        if (e.numberRates > rates && e.rating > rating){
          rates = e.numberRates;
          rating = e.rating;
          url = e.url;
        }
      });
      ugs.get(`${url}`, (error, tab) => {
        if (error) {console.log(error)}
        else {
          console.log(typeof(tab.content.html));
          const song = new Song({
            name,
            artist,
            htmlTab: tab.content.html.replace(/\n/g,"<br>"),
            textTab: tab.content.text
          });
          song.save()
          .then((song) => {
            User.findByIdAndUpdate(
              req.user._id,
              {$push: {"songArray": {_id: song._id}}},
              {safe: true, new : true}
            )
            .then(() => {
              res.json({
                message: 'New Song created!',
                song: song
              })
            })
          })
          .catch(err => res.send(err))
        }
      });
    }
  })
});

/* POST - Create New Song. */
songRoutes.post('/new', ensureLoggedIn('/'), (req, res) => {
  console.log("POST New Song");
  const {name, artist} = req.body;
  const song = new Song({
    name,
    artist,
    textTab: " ",
    htmlTab: " "
  });
  song.save()
    .then((song) => {
      User.findByIdAndUpdate(
        req.user._id,
        {$push: {"songArray": {_id: song._id}}},
        {safe: true, new : true}
      )
      .then(() => {
        res.json({
          message: 'New Song created!',
          song: song
        })
      })
    })
    .catch(err => res.send(err));
});

/* PUT - Update the tab of one song */
songRoutes.put('/editTab/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("PUT The edited tab");
  const {textTab} = req.body;
  const updates = {textTab};
  Song.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* GET - Edit the whole information of the song. */
songRoutes.get('/edit/:id', ensureLoggedIn('/'), (req, res, next) => {
  console.log("GET the needed information for edit a song");
  Song.findById(req.params.id)
    .populate('guitar')
    .populate('amplifier')
    .then(song => {
      User.findOne({_id: req.user._id})
        .populate('guitArray')
        .populate('ampliArray')
        .populate('pedArray')
        .then(user => res.status(200).json({user,song}))
        .catch(e => res.status(500).json({error:e.message}));
    })
    .catch(e => res.json(e));
});

/* PUT - Edit the whole information of the song. */
songRoutes.put('/edit/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("PUT The edited song");
  const {name, guitar, amplifier} = req.body;
  // Pte meter pedales... a ver cómo!!!!
  const updates = {name, guitar, amplifier};
  Song.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* Delete one song */
songRoutes.delete('/:id', ensureLoggedIn('/'), (req, res) => {
  console.log("DELETE one song");
  Song.remove({
      _id: req.params.id
    })
    .then(o => {
      User.findByIdAndUpdate(
        req.user._id,
        {$pull: {"songArray": req.params.id}},
        {safe: true, new : true}
      )
      .then(() => res.json({message: 'Song has been removed!'}))
    })
    .catch(e => res.json(e));
});

module.exports = songRoutes;
