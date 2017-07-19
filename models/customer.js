const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Customer Schema
const CustomerSchema = mongoose.Schema({
  fname: {
		type: String,
    required: true
	},
  lname: {
		type: String,
    required: true
	},	
	rentalId: [mongoose.Schema.Types.ObjectId],
	info: String
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.getCustomerList = (callback) => {
	Customer.find(callback).sort({lname: 1, fname: 1});
}

module.exports.getCustomerByName = (fname, lname, callback) => {
	const query = {fname: fname, lname: lname};
	
	Customer.findOneAndUpdate(query, query, {upsert: true, new: true}, callback);
}

module.exports.addCustomer = (newCustomer, callback) => {
  newCustomer.save(callback);
}

module.exports.delCustomer = (id, callback) => {
  const query = {_id: id};

  Customer.deleteOne(query, callback);
}

module.exports.updateCustomer = (id, fname, lname, info, callback) => {
  const query = {_id: id};
  const update = {fname: fname, lname: lname, info: info};

  Customer.update(query, {$set: update}, callback);
}

module.exports.addRental = (custId, rentalId, callback) => {
  const query = {_id: custId};
  const update = {rentalId: rentalId};

  Customer.update(query, {$addToSet: update}, callback);
}

module.exports.removeRental = (custId, rentalId, callback) => {
  const query = {_id: custId};
  const update = {rentalId: rentalId};

  Customer.update(query, {$pull: update}, callback);
}
