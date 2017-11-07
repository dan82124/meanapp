const Model = require('../models/model');

module.exports = {
  addModel (req, callback) {
    let newModel = new Model({
      name: req.body.name,
      price: req.body.price
    });

    newModel.save(callback);
  },
  delModel (name, callback) {
    const query = {name: name};

    Model.deleteOne(query, callback);
  },
  updateModel (name, price, callback) {
    const query = {name: name};
    const update = {name:name, price: price};

    Model.update(query, {$set: update}, callback);
  },
  getModelList (callback) {
    Model.find({}, {__v:false, _id: false}, callback).sort({name: 1});
  }
}
