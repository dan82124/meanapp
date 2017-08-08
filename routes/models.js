const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Model = require('../models/model');

module.exports = router;

//Add Model
router.post('/add', (req, res, next) => {
  let newModel = new Model({
    name: req.body.name,
    price: req.body.price
  });

  Model.addModel(newModel, (err, model) => {
    if(err) {
      res.json({success: false, msg: 'Failed to add model: ' + err});
    } else {
      res.json({success: true, msg: model});
    }
  });
});

//Delete Model
router.post('/del', (req, res, next) => {
  const name = req.body.name;

  Model.delModel(name, (err, result) => {
    if(err || result.deletedCount == 0) {
      res.json({success: false, msg: 'Failed to delete model: ' + name});
    } else {
      res.json({success: true, msg: 'Deleted model: ' + name});
    }
  });
});

//Update Model
router.post('/update', (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  Model.updateModel(name, price, (err, result) => {
    if(err || result.nModified == 0) {
      res.json({success: false, msg: 'Failed to update model: ' + name});
    } else {
      res.json({success: true, msg: 'Model: ' + name + ' updated'});
    }
  });
});

//List Models
router.get('/list', (req, res, next) => {
  Model.getModelList((err, result) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get model list'});
    } else {
      res.json({success: true, msg: result});
    }
  });
});