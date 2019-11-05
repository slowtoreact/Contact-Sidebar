const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/FEC';
const Restaurant= require('./restaurant.js')

mongoose.connect(mongoUri, { useNewUrlParser: true });
var db = mongoose.connection;

const findRestaurantData = (restaurant,cb) => {
    Restaurant.find({name:restaurant},(err,doc)=>{
      if (err) {return cb(err, 'error finding restaurant to display')}
      return doc ;
    })
      .then((restaurantResult) => {
        return cb(restaurantResult)
      });
  
  };

module.exports = {db, findRestaurantData}