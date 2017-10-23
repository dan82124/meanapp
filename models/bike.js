const mongoose = require('mongoose');

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
