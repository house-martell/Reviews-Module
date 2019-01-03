var Sentencer = require('sentencer');
const {Review} = require('./index.js');
const DateGenerator = require('random-date-generator');



//I need to make a thousand randomly generated sentences
let holder = [];

let bodyTypes = ['Athletic', 'Curvy', 'Lean', 'Muscular', 'Petite', 'Slim', 'Solid'];
let ageRange = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', 'Over 65', 'I keep my age on the DL'];
let athleticType = ['Yogi', 'Dancer', 'Runner', 'Cyclist', 'Sweaty Generalist'];
let locations = ['Los Angeles, CA', 'Miami, FL', 'Boise, ID', 'New York, NY', 'Seattle, OR', 'San Francisco, CA'];
let fitSupport = [14, 28, 42, 56, 70, 84, 98];


let getRandomFromArray = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

let getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let startDate = new Date(2015, 1, 1);
let endDate = new Date(2019, 1, 1);



const randomlyGeneratedReviews = (num) => {
  for (var i = 0; i < num; i++) {
    holder.push({
      product_id: getRandomNumber(1, 5),
      rev_title: Sentencer.make('These {{ noun }} are {{ an_adjective}}'),
      username: Sentencer.make('{{ noun }}' + getRandomNumber(1, 100)),
      body_text: Sentencer.make('This item has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.'),
      location: getRandomFromArray(locations),
      athletic_type: getRandomFromArray(athleticType),
      age_range: getRandomFromArray(ageRange),
      body_type: getRandomFromArray(bodyTypes),
      date: DateGenerator.getRandomDateInRange(startDate, endDate),
      stars: getRandomNumber(1, 5),
      fit: getRandomFromArray(fitSupport),
      support: getRandomFromArray(fitSupport),
      what_you_like: Sentencer.make('This item has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.'),
      what_you_didnt_like: Sentencer.make('Bad fit')

    });
  }
};

randomlyGeneratedReviews(200);

let insertData = function(arr) {
  Review.insertMany(
    arr
  );
};

insertData(holder);

Sentencer.configure({
  // the list of nouns to use. Sentencer provides its own if you don't have one!
  nounList: [],

  // the list of adjectives to use. Again, Sentencer comes with one!
  adjectiveList: [],
  
  // additional actions for the template engine to use.
  // you can also redefine the preset actions here if you need to.
  // See the "Add your own actions" section below.
  actions: {
    age: function() {
      return 'something';
    }
  }
});







