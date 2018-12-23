const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Reviews');


const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => console.log('connected to mongoDB'));

const reviewSchema = mongoose.Schema({
  product_id: {type: Number, require: false},
  username: {type: String, require: false},
  body_text: {type: String, require: false}, 
  location: {type: String, require: false},
  athletic_type: {type: String, require: false},
  age_range: {type: String, require: false},
  body_type: {type: String, require: false},
  date: {type: Date, require: false},
  stars: {type: Number, require: false},
  fit: {type: Number, require: false},
  support: {type: Number, require: false},
  what_you_like: {type: String, require: false},
  what_you_didnt_like: {type: String, require: false} 
  
});

const Review = mongoose.model('Reviews', reviewSchema);

const getReviews = function(id, callback) {
  Review.find({product_id: id}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(data);
    }
  });
};


module.exports = {Review, getReviews, connection};