const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



  const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    website: String,
    openTable: Boolean,
    openTableLink: String,
    hoursOpen: Object,
    hoursClose: Object
  });
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  
  module.exports = Restaurant
