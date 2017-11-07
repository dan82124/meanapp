const Rental = require('../models/rental');

module.exports = {
  addRental (req, callback) {
    let newRental = new Rental({
      customerId: req.body.customerId,
      customerName: req.body.customerName,
      date: new Date,
      duration: 0,
      status: true,
      tax: 0,
      total: 0
    });
    
    newRental.save(callback);
  },
  delRental (id, callback) {
    const query = {_id: id};

    Rental.deleteOne(query, callback);
  },
  addBike (id, bike, callback) {
    const query = {_id: id};
    const update = {bikeId: {$each: bike}};

    Rental.update(query, {$addToSet: update}, callback);
  },
  removeBike (id, bike, callback) {
    const query = {_id: id};
    const update = {bikeId: {$in: bike}};

    Rental.update(query, {$pull: update}, {multi: true},  callback);
  },
  editDate (id, date, callback) {
    const query = {_id: id};
    const update = {date: date};

    Rental.update(query, {$set: update}, callback);
  },
  retRental (id, endDate, duration, status, tax, total, callback) {
    const query = {_id: id};
    const update = {endDate: endDate, duration: duration, status: status, tax: tax, total: total};

    Rental.update(query, {$set: update}, callback);
  },
  getRentalList (callback) {
    Rental.find(callback).sort({status: -1, date: -1});
  },
  getRentalByCustId (custId, callback) {
    const query = {customerId: custId}

    Rental.find(query, callback).sort({date: -1});
  },
  getRentalByStatus (status, callback) {
    const query = {status: status}

    Rental.find(query, callback).sort({date: -1});
  },
  getRentalByDate (startDate, endDate, callback) {
    const query = {date: {$gte: startDate, $lt: endDate}}

    Rental.find(query, callback).sort({date: -1});
  }
}
