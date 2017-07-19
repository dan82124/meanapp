const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Bike Schema
const BikeSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  model: {
		type: String,
    required: true
	},
	status: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

const Bike = module.exports = mongoose.model('Bike', BikeSchema);

module.exports.addBike = (newBike, callback) => {
  newBike.save(callback);
}

module.exports.delBike = (id, callback) => {
  const query = {_id: id};

  Bike.deleteOne(query, callback);
}

module.exports.updateBikes = (ids, status, callback) => {
  const query = {_id: {$in: ids}};
  const update = {status: status};

  Bike.update(query, {$set: update}, {multi: true}, callback);
}

module.exports.updateBike = (id, status, model, price, callback) => {
  const query = {_id: id};
  const update = {status: status, model: model, price: price};

  Bike.update(query, {$set: update}, callback);
}

module.exports.updatePriceByModel = (model, price, callback) => {
  const query = {model: model};
  const update = {price: price};

  Bike.update(query, {$set: update}, {multi: true}, callback);
}

module.exports.getBikeCount = (callback) => {
	Bike.find().count(callback);
}

module.exports.getBikeList = (callback) => {
	Bike.find(callback).sort({_id: 1});
}

module.exports.getBikeById = (id, callback) => {
	const query = {_id: id};

	Bike.find(query, callback);
}

module.exports.getBikeByModel = (model, callback) => {
	const query = {model: model};

	Bike.find(query, callback).sort({model: 1});
}

module.exports.getBikeByStatus = (status, callback) => {
	const query = {status: status};

	Bike.find(query, callback);
}

module.exports.getBikeByPrice = (price, callback) => {
	const query = {price: price};
	
	Bike.find(query, callback);
}