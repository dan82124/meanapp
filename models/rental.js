const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Rental Schema
const RentalSchema = mongoose.Schema({

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  bikeId: [Number],
  date: Date,
  endDate: Date,
  duration: Number,
  status: Boolean,
  tax: Number,
  total: Number
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

module.exports.retRental = (id, endDate, duration, status, tax, total, callback) => {
  const query = {_id: id};
  const update = {endDate: endDate, duration: duration, status: status, tax: tax, total: total};

  Rental.update(query, {$set: update}, callback);
}

module.exports.getRentalList = (callback) => {
  Rental.find(callback).sort({status: -1, date: -1});
}

module.exports.getRentalByCustId = (custId, callback) => {
  const query = {customerId: custId}

  Rental.find(query, callback).sort({date: -1});
}

module.exports.getRentalByStatus = (status, callback) => {
  const query = {status: status}

  Rental.find(query, callback).sort({date: -1});
}

module.exports.getRentalByDate = (startDate, endDate, callback) => {
  const query = {date: {$gte: startDate, $lt: endDate}}

  Rental.find(query, callback).sort({date: -1});
}