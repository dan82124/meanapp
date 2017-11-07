const mongoose = require('mongoose');

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
