const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Customer Schema
const CustomerSchema = mongoose.Schema({
  name: {
		type: String,
    required: true
	},	
	rentalId: [mongoose.Schema.Types.ObjectId],
	info: String
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.getCustomerList = (callback) => {
	Customer.find(callback).sort({name: 1});
}

module.exports.getCustomerByName = (name, info, callback) => {
	const query = {name: name};
	const update = {name: name};

	Customer.findOneAndUpdate(query, update, {upsert: true, new: true}, callback);
}

module.exports.addCustomer = (newCustomer, callback) => {
  newCustomer.save(callback);
}

module.exports.delCustomer = (id, callback) => {
  const query = {_id: id};

  Customer.deleteOne(query, callback);
}

module.exports.updateCustomer = (id, name, info, callback) => {
  const query = {_id: id};
  const update = {name: name, info: info};

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
