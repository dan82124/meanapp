const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Customer = require('../models/customer');

module.exports = router;

//Add Customer
router.post('/add', (req, res, next) => {
	let newCustomer = new Customer({
		fname: req.body.fname,
		lname: req.body.lname,
		info: req.body.info
	});

	Customer.addCustomer(newCustomer, (err, customer) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add customer: ' + err});
		} else {
			res.json({success: true, msg: customer});
		}
	});
});

//Delete Customer
router.post('/del', (req, res, next) => {
	const id = req.body.id;

	Customer.delCustomer(id, (err, result) => {
		if(err || result.deletedCount == 0) {
			res.json({success: false, msg: 'Failed to delete customer ' + id});
		} else {
      res.json({success: true, msg: 'Deleted customer ' + id});
    }
	});
});

//Update Customer Info
router.post('/update', (req, res, next) => {
	const id = req.body.id;
  const fname = req.body.fname;
  const lname = req.body.lname;
	const info = req.body.info;

	Customer.updateCustomer(id, fname, lname, info, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update customer: ' + id});
		} else {
			res.json({success: true, msg: 'Customer ' + id + ' updated'});
		}
	});
});

//Find Customer By Name
router.post('/find', (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;

	Customer.getCustomerByName(fname, lname, (err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get customer: ' + name});
		} else {
      res.json({success: true, msg: result});
    }
  });
});

//List Customers
router.get('/list', (req, res, next) => {
	Customer.getCustomerList((err, result) => {
    if(err) {
			res.json({success: false, msg: 'Failed to get customer list'});
		} else {
      res.json({success: true, msg: result});
    }
  });
});

// //Remove Rental
// router.post('/remove', (req, res, next) => {
// 	const custId = req.body.custId;
// 	const rentId = req.body.rentId;

// 	Customer.removeRental(custId, rentId, (err, result) => {
//     if(err || result.nModified == 0) {
// 			res.json({success: false, msg: 'Failed to get remove rental: ' + rentId});
// 		} else {
//       res.json({success: true, msg: result});
//     }
//   });
// });
