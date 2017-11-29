const Customer = require('../models/customer');

module.exports = {
  getCustomerList (callback) {
    Customer.find(callback).sort({name: 1});
  },
  getCustomerByName (name, callback) {
    const query = {name: name};

    Customer.findOne(query, callback);
  },
  addCustomer (req, callback) {
    let newCustomer = new Customer({
      name: req.body.name
    });

    newCustomer.save(callback);
  },
  delCustomer (id, callback) {
    const query = {_id: id};

    Customer.deleteOne(query, callback);
  },
  updateCustomer (id, name, info, callback) {
    const query = {_id: id};
    const update = {name: name, info: info};

    Customer.update(query, {$set: update}, callback);
  },
  addRental (custId, rentalId, callback) {
    const query = {_id: custId};
    const update = {rentalId: rentalId};

    Customer.update(query, {$addToSet: update}, callback);
  },
  removeRental (custId, rentalId, callback) {
    const query = {_id: custId};
    const update = {rentalId: rentalId};

    Customer.update(query, {$pull: update}, callback);
  }
}
