const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Bike = require('../models/bike');
const Model = require('../models/model');

module.exports = router;

//Add Bike
router.post('/add', (req, res, next) => {
	let newBike = new Bike({
		_id: req.body._id,
		model: req.body.model,
		status: req.body.status,
		price: req.body.price
	});

	Bike.addBike(newBike, (err, bike) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add bike: ' + err});
		} else {
			res.json({success: true, msg: 'Bike added: ' + bike.id});
		}
	});
});

//Delete Bike
router.post('/del', (req, res, next) => {
	const id = req.body._id;

	Bike.delBike(id, (err, result) => {
		if(err || result.deletedCount == 0) {
			res.json({success: false, msg: 'Failed to delete bike ' + id});
		} else {
      res.json({success: true, msg: 'Deleted bike ' + id});
    }
	});
});

//Update Bike Info
router.post('/edit', (req, res, next) => {
	const id = req.body._id;
	const status = req.body.status;
	const model = req.body.model;
	const price = req.body.price;

	Bike.updateBike(id, status, model, price, (err, result) => {
		console.log(result);
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bike: ' + id});
		} else {
			res.json({success: true, msg: 'Bike ' + id + ' updated to ' + status + ', ' + model + ', ' + price});
		}
	});
});

//Update Bike Price By Model
router.post('/update', (req, res, next) => {
	const model = req.body.name;
	const price = req.body.price;

	//Update prices in bike list
	Bike.updatePriceByModel(model, price, (err, result) => {
		if(err) {
			res.json({success: false, msg: 'Failed to update ' + model + ' bikes'});
		} else {
			//Update price in model list
			Model.updateModel(model, price, (err, log) => {
		    if(err || log.nModified == 0) {
		      res.json({success: false, msg: 'Failed to update model: ' + model});
		    } else {
		      res.json({success: true, msg: 'Model: ' + model + ' updated to ' + price});
		    }
		  });
		}
	});
});


//Count Bikes
router.get('/count', (req, res, next) => {
	Bike.getBikeCount((err, total) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get count'});
		} else {
      Bike.getBikeByStatus("Available", (err, bikes) => {
      	if(err) {
					res.json({success: false, msg: 'Failed to get bikes'});
				} else {
		      res.json({success: true, msg: {totalBikes: total, inBikes: bikes.length}});
		    }
      });
    }
  });
});

//List Bikes
router.get('/list', (req, res, next) => {
	Bike.getBikeList((err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get inventory'});
		} else {
      res.json({success: true, msg: result});
    }
  });
});

//Get Bike By Id
router.post('/id', (req, res, next) => {
	const id = req.body._id;

	Bike.getBikeById(id, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get inventory'});
		} else {
      res.json({success: true, msg: result});
    }
	});
});

//Get Bike By Model
router.post('/model', (req, res, next) => {
	const model = req.body.model;

	Bike.getBikeByModel(model, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get inventory'});
		} else {
      res.json({success: true, msg: result});
    }
	});
});

//Get Bike By Status
router.post('/status', (req, res, next) => {
	const status = req.body.status;

	Bike.getBikeByStatus(status, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get inventory'});
		} else {
      res.json({success: true, msg: result});
    }
	});
});

//Get Bike By Price
router.post('/price', (req, res, next) => {
	const price = req.body.price;

	Bike.getBikeByPrice(price, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get inventory'});
		} else {
      res.json({success: true, msg: result});
    }
	});
});