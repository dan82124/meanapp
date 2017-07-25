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
		name: req.body.name,
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
  const name = req.body.name;
	const info = req.body.info;

	Customer.updateCustomer(id, name, info, (err, result) => {
		if(err || result.nModified == 0) {
			res.json({success: false, msg: 'Failed to update customer: ' + id});
		} else {
			res.json({success: true, msg: 'Customer ' + id + ' updated'});
		}
	});
});

//Find Or Insert Customer By Name
router.post('/find', (req, res, next) => {
  const name = req.body.name;
  const info = req.body.info;

	Customer.getCustomerByName(name, info, (err, result) => {
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

