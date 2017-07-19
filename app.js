const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

const users = require('./routes/users');
const bikes = require('./routes/bikes');
const customers = require('./routes/customers');
const rentals = require('./routes/rentals');

const app = express();

const port = 3000;

//Connect to DB
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
	console.log('Connected to: ' + config.database);
});

mongoose.connection.on('error', (err) => {
	console.log('Failed to connect: ' + err);
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Set Frontend Folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/users', users);
app.use('/bikes', bikes);
app.use('/customers', customers);
app.use('/rentals', rentals);

app.get('/', (req, res) => {
	res.send('Invalid');
})

app.listen(port, () => {
	console.log('Server started on port ' + port);
});
