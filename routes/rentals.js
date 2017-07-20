const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Rental = require('../models/rental');
const Bike = require('../models/bike');
const Customer = require('../models/customer');

module.exports = router;

//Start Rental
router.post('/start', (req, res, next) => {
	let newRental = new Rental({
		customerId: req.body.customerId,
		customerName: req.body.customerName,
    date: new Date,
    duration: 0
	});

	Rental.addRental(newRental, (err, rental) => {
		if(err) {
			res.json({success: false, msg: 'Failed to create rental: ' + err});
		} else {
			Customer.addRental(rental.customerId, rental._id, (err, result) => {
				if(err || result.nModified == 0) {
					res.json({success: false, msg: 'Failed to add rental: ' + rental._id});
				} else {
		      res.json({success: true, msg: 'Added rental: ' + rental._id});
		    }
			});
		}
	});
});

//Delete Rental
router.post('/del', (req, res, next) => {
	const rentalId = req.body.rentalId;
	const custId = req.body.customerId;
	const bikes = req.body.bikeId;
  const status = "in";

  if (bikes.length === 0) {
		Rental.delRental(rentalId, (err, rental) => {
			if(err || rental.deletedCount == 0) {
				res.json({success: false, msg: 'Failed to delete rental: ' + rentalId});
			} else {
				Customer.removeRental(custId, rentalId, (err, result) => {
			    if(err || result.nModified == 0) {
						res.json({success: false, msg: 'Failed to remove rental from: ' + custId});
					} else {
			      res.json({success: true, msg: result});
			    }
			  });
	    }
		});  	
  } else {
	  Bike.updateBikes(bikes, status, (err, result) => {
			if(err || result.nModified == 0) {
				res.json({success: false, msg: 'Failed to update bikes: ' + bikes});
			} else {
				Rental.delRental(rentalId, (err, rental) => {
					if(err || rental.deletedCount == 0) {
						res.json({success: false, msg: 'Failed to delete rental: ' + rentalId});
					} else {
						Customer.removeRental(custId, rentalId, (err, result) => {
					    if(err || result.nModified == 0) {
								res.json({success: false, msg: 'Failed to remove rental from: ' + custId});
							} else {
					      res.json({success: true, msg: result});
					    }
					  });
			    }
				});
			}
		});  	
  }
});

//Edit Rental Date
router.post('/date', (req, res, next) => {
	const id = req.body.rentalId;
  const date = req.body.date;

	Rental.editDate(id, date, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to edit date: ' + date + ' to rental: ' + id});
		} else {
      res.json({success: true, msg: 'Changed date to: ' + date + ' for rental: ' + id});
    }
	});
});

//Add Bikes To Rental
router.post('/add', (req, res, next) => {
	const id = req.body.rentalId;
  const bikes = req.body.bikes;
  const bikeIds = [];

  for (let bike = 0; bike < bikes.length; bike++) {
  	bikeIds.push(bikes[bike]._id);
  }

  Bike.updateBikes(bikeIds, id, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bikes: ' + bikeIds});
		} else {
			Rental.addBike(id, bikes, (err, result) => {
				if(err) {
					res.json({success: false, msg: 'Failed to add bikes: ' + bikeIds});
				} else {
		      res.json({success: true, msg: 'Added bikes: ' + bikeIds + ' to rental: ' + id});
		    }
			});
		}
	});
});

//Remove Bikes From Rental
router.post('/remove', (req, res, next) => {
	const id = req.body.rentalId;
  const status = "in";
  const bikes = req.body.bikes;
  const bikeIds = [];

  for (let bike = 0; bike < bikes.length; bike++) {
  	bikeIds.push(bikes[bike]._id);
  }

  Bike.updateBikes(bikeIds, status, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bikes: ' + bikeIds});
		} else {
			Rental.removeBike(id, bikes, (err, result) => {
				if(err || result.nModified == 0) {
					res.json({success: false, msg: 'Failed to remove bike: ' + bikeIds});
				} else {
		      res.json({success: true, msg: 'Removed bikes: ' + bikeIds + ' from rental: ' + id});
		    }
			});
		}
	});
});

//List Rentals
router.get('/list', (req, res, next) => {
	Rental.getRentalList((err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get rental list'});
		} else {
      res.json({success: true, msg: result});
    }
  });
});
