const Bike = require('../models/bike');

module.exports = {
  addBike (newBike, callback) {
    newBike.save(callback);
  },
  delBike (id, callback) {
    const query = {_id: id};

    Bike.deleteOne(query, callback);
  },
  updateBikes (ids, status, callback) {
    const query = {_id: {$in: ids}};
    const update = {status: status};

    Bike.update(query, {$set: update}, {multi: true}, callback);
  },
  updateBike (id, status, model, price, callback) {
    const query = {_id: id};
    const update = {status: status, model: model, price: price};

    Bike.update(query, {$set: update}, callback);
  },
  updatePriceByModel (model, price, callback) {
    const query = {model: model};
    const update = {price: price};

    Bike.update(query, {$set: update}, {multi: true}, callback);
  },
  getBikeCount (callback) {
    Bike.find().count(callback);
  },
  async getBikeCountOfModels (callback) {
    try {
      const query = {status: "Available"};
      let bikeCounts = {};

      let inBikes = await Bike.find(query);

      for (let bike in inBikes) {
        if (!bikeCounts[inBikes[bike]['model']]) {
          bikeCounts[inBikes[bike]['model']] = 1;
        } else {
          bikeCounts[inBikes[bike]['model']]++;
        }
      }

      callback(null, bikeCounts);
    } catch (err) {
      console.log(err);
      callback(err, {});
    }
  },
  getBikeList (callback) {
    Bike.find(callback).sort({_id: 1});
  },
  getBikeById (id, callback) {
    const query = {_id: id};

    Bike.find(query, callback);
  },
  getBikeByModel (model, callback) {
    const query = {model: model};

    Bike.find(query, callback).sort({model: 1});
  },
  getBikeByStatus (status, callback) {
    const query = {status: status};

    Bike.find(query, callback).sort({model: 1});
  },
  getBikeByPrice (price, callback) {
    const query = {price: price};

    Bike.find(query, callback);
  },
  async getBikesByModelCount (bikeCount) {
    const status = "Available";
    let bikes = [];

    for (model in bikeCount) {
      if (bikeCount[model] > 0){
        let query = {model: model, status: status};
        let group = await Bike.find(query).limit(bikeCount[model]);

        for (let bike in group) {
          bikes.push(group[bike]);
        }
      }
    }

    return bikes;
  }
}
