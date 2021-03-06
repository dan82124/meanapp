const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const customerController = require('../controllers/customerController');
const bikeController = require('../controllers/bikeController');
const rentalController = require('../controllers/rentalController');

module.exports = router;

// Start Rental
router.post('/start', (req, res, next) => {

	rentalController.addRental(req, (err, rental) => {
		if(err) {
			res.json({success: false, msg: 'Failed to create rental: ' + err});
		} else {
			customerController.addRental(rental.customerId, rental._id, (err, result) => {
				if(err || result.nModified == 0) {
					res.json({success: false, msg: 'Failed to add rental: ' + rental._id});
				} else {
		      res.json({success: true, msg: 'Added rental: ' + rental._id});
		    }
			});
		}
	});
});

// Return Rental
router.post('/ret', (req, res, next) => {
	const rentalId = req.body.rental._id;
	const discountUsed = req.body.rental.discountUsed;
	const cust = req.body.cust;
	const endDate = req.body.endDate;
	const duration = req.body.rental.duration;
	const rentalStatus = req.body.rental.status;
	const tax = req.body.rental.tax + req.body.taxTotal;
	const total = req.body.rental.total + req.body.total;
	const bikes = req.body.bikes;
  const bikeStatus = "Available";

  bikeController.updateBikes(bikes, bikeStatus, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bikes: ' + bikes});
		} else {
			rentalController.removeBike(rentalId, bikes, (err, result) => {
				if(err || result.nModified == 0) {
					res.json({success: false, msg: 'Failed to remove bike: ' + bikes});
				} else {
		      rentalController.retRental(rentalId, endDate, duration, rentalStatus, tax, total, discountUsed, (err, rental) => {
						if(err || rental.deletedCount == 0) {
							res.json({success: false, msg: 'Failed to return rental: ' + rentalId});
						} else {
							if (rentalStatus == false) {
								customerController.increaseDiscount(cust._id, (err, result) => {
									if (err || result.nModified == 0) {
										console.log('Increase discount failed for ' + cust._id);
									} else {
										console.log('Increase discount success for ' + cust._id);
									}
								});
								res.json({success: true, msg: 'Returned all bikes for rental: ' + rentalId});
							} else {
								res.json({success: true, msg: 'Returned bikes: ' + bikes.length + ' for rental: ' + rentalId});
							}
							console.log(discountUsed);
							//if discount used, decrement discount to customer
							if (discountUsed == true) {
								customerController.decreaseDiscount(cust._id, (err, result) => {
									if (err || result.nModified == 0) {
										console.log('Decrease discount failed for ' + cust._id);
									} else {
										console.log('Decrease discount success for ' + cust._id);
									}
								});
							}

				    }
					});
		    }
			});
		}
	});
});

// Delete Rental
router.post('/del', (req, res, next) => {
	const rentalId = req.body.rentalId;
	const custId = req.body.customerId;
	const bikes = req.body.bikeId;
  const bikeStatus = "Available";

  if (bikes.length === 0) {
		rentalController.delRental(rentalId, (err, rental) => {
			if(err || rental.deletedCount == 0) {
				res.json({success: false, msg: 'Failed to delete rental: ' + rentalId});
			} else {
				customerController.removeRental(custId, rentalId, (err, result) => {
			    if(err || result.nModified == 0) {
						res.json({success: false, msg: 'Failed to remove rental from: ' + custId});
					} else {
			      res.json({success: true, msg: result});
			    }
			  });
	    }
		});
  } else {
	  bikeController.updateBikes(bikes, bikeStatus, (err, result) => {
			if(err || result.nModified == 0) {
				res.json({success: false, msg: 'Failed to update bikes: ' + bikes});
			} else {
				rentalController.delRental(rentalId, (err, rental) => {
					if(err || rental.deletedCount == 0) {
						res.json({success: false, msg: 'Failed to delete rental: ' + rentalId});
					} else {
						customerController.removeRental(custId, rentalId, (err, result) => {
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

// Edit Rental Date
router.post('/edit', (req, res, next) => {
	const id = req.body.rentalId;
  const date = req.body.date;

	rentalController.editDate(id, date, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to edit date: ' + date + ' to rental: ' + id});
		} else {
      res.json({success: true, msg: 'Changed date to: ' + date + ' for rental: ' + id});
    }
	});
});

// Add Bikes To Rental
router.put('/add', async (req, res, next) => {
	const id = req.body.rentalId;
	const bikeCount = req.body.bikeCount;

	const bikes = await bikeController.getBikesByModelCount(bikeCount);

	console.log(bikes);

  bikeController.updateBikes(bikes, id, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bikes: ' + bikeIds});
		} else {
			rentalController.addBike(id, bikes, (err, result) => {
				if(err) {
					res.json({success: false, msg: 'Failed to add bikes: ' + bikeIds});
				} else {
		      res.json({success: true, msg: 'Added bikes to rental: ' + id});
		    }
			});
		}
	});
});

// Remove Bikes From Rental
router.put('/remove', (req, res, next) => {
	const id = req.body.rentalId;
  const bikeStatus = "Available";
  const bikes = req.body.bikes;
  const bikeIds = [];

  for (let bike = 0; bike < bikes.length; bike++) {
  	bikeIds.push(bikes[bike]._id);
  }

  bikeController.updateBikes(bikeIds, bikeStatus, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update bikes: ' + bikeIds});
		} else {
			rentalController.removeBike(id, bikes, (err, result) => {
				if(err || result.nModified == 0) {
					res.json({success: false, msg: 'Failed to remove bike: ' + bikeIds});
				} else {
		      res.json({success: true, msg: 'Removed bikes: ' + bikeIds + ' from rental: ' + id});
		    }
			});
		}
	});
});

// List Rentals
router.get('/list', (req, res, next) => {
	rentalController.getRentalList((err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get rental list'});
		} else {
      res.json({success: true, msg: result});
    }
  });
});

// Get Active Rentals
router.get('/active', (req, res, next) => {
	rentalController.getRentalByStatus(true, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get active rental list'});
		} else {
      res.json({success: true, msg: result});
    }
  });
});

// Get Rentals By Date
router.post('/date', (req, res, next) => {
	const date = req.body.date;
  // Adjust for 7 hour timezone difference
  const startDate = new Date(new Date(date).getTime() + 25200000);
  // Add 24 hours
  const endDate = new Date(startDate.getTime() + 86400000);

  console.log(startDate);
  console.log(endDate);
	rentalController.getRentalByDate(startDate, endDate, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get rentals of: ' + date});
		} else {
      res.json({success: true, msg: result});
    }
  });
});
