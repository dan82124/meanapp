const User = require('../models/user');

module.exports = {
  getUserById (id, callback) {
  	User.findById(id, callback);
  },
  getUserByUsername (username, callback) {
  	const query = {username: username};

  	User.findOne(query, callback);
  },
  addUser (req, callback) {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

  	bcrypt.genSalt(10, (err, salt) => {
  		bcrypt.hash(newUser.password, salt, (err, hash) => {
  			if(err) {
  				throw err;
  			}
  			newUser.password = hash;
  			newUser.save(callback);
  		});
  	});
  },
  comparePassword (candidatePassword, hash, callback) {
  	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
  		if(err) {
  			throw err;
  		}
  		callback(null, isMatch);
  	});
  },
  updateLogin (id, callback) {
  	const query = {_id: id};
  	const update = {lastLogin: new Date};

  	User.update(query, {$set: update}, callback);
  }
}
