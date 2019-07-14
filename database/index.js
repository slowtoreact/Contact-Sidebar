const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/FEC';

mongoose.connect(mongoUri, { useNewUrlParser: true });
var db = mongoose.connection;


module.exports = db