const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Rental Schema
const RentalSchema = mongoose.Schema({

	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
  date: Date,
  bikeId: [Number],
  total: Number,
  discount: Boolean
});

const Rental = module.exports = mongoose.model('Rental', RentalSchema);

module.exports.addRental = (newRental, callback) => {
  newRental.save(callback);
}

module.exports.delRental = (id, callback) => {
  const query = {_id: id};
  
  Rental.deleteOne(query, callback);
}

module.exports.addBike = (id, bike, callback) => {
  const query = {_id: id};
  const update = {bikeId: {$each: bike}};

  Rental.update(query, {$addToSet: update}, callback);
}

module.exports.removeBike = (id, bike, callback) => {
  const query = {_id: id};
  const update = {bikeId: {$in: bike}};

  Rental.update(query, {$pull: update}, {multi: true},  callback);
}

module.exports.editDate = (id, date, callback) => {
  const query = {_id: id};
  const update = {date: date};

  Rental.update(query, {$set: update}, callback);
}

module.exports.getRentalList = (callback) => {
  Rental.find(callback).sort({date: -1});
}

module.exports.getRentalByCustId = (custId, callback) => {
  const query = {customerId: custId}

  Rental.find(query, callback).sort({date: -1});
}