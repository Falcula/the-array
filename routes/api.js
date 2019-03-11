const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Entry = require('../models/entry');

const uri = "mongodb+srv://admin:arraymaster@the-array-4fxad.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, {
  useNewUrlParser: true
});

router.get('', (req, res) => {
  Entry.find({}).then((data) => {
    res.status(200).json(data);
  }).catch((error) => {
    res.status(403).json(error.message);
  });
});

router.post('', (req, res) => {
  console.log(req.body);
  const entry = new Entry(req.body);
  entry.save().then((data) => {
    res.status(200).json('data is stored forever');
  }).catch(error => {
    res.status(400).json(error.message);
  });
});

router.delete('*/:id', (req,res)=> {
  Entry.findByIdAndRemove({_id : req.params.id}).then((data)=>{
    if(data == null) {
      res.status(400).json('invalid request');
    }
    res.status(200).json('data is removed');
  }).catch((error)=>{
    res.status(403).json(error.message);
  });
});

module.exports = router