const mongoose = require('mongoose');

//Bike Model Schema
const ModelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
});

const Model = module.exports = mongoose.model('Model', ModelSchema);
