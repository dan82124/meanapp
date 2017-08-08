const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

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

module.exports.addModel = (newModel, callback) => {
  newModel.save(callback);
}

module.exports.delModel = (name, callback) => {
  const query = {name: name};

  Model.deleteOne(query, callback);
}

module.exports.updateModel = (name, price, callback) => {
  const query = {name: name};
  const update = {name:name, price: price};

  Model.update(query, {$set: update}, callback);
}

module.exports.getModelList = (callback) => {
  Model.find(callback).sort({name: 1});
}
