import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import axios from 'axios';
import Filters from './components/Filters.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
      reviews: [],
      stars: {},
      fit: {},
      support: {},
      athletic: {},
      age: {},
      body: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.getStarCount = this.getStarCount.bind(this);
    this.getFitCount = this.getFitCount.bind(this);
    this.getSupportCount = this.getSupportCount.bind(this);
    this.getAthleticCount = this.getAthleticCount.bind(this);
    this.getAgeCount = this.getAgeCount.bind(this);
    this.getBodCount = this.getBodCount.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.filterMoreResults = this.filterMoreResults.bind(this);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    this.getReviews(this.getRandomNumber(6));
  }

  getReviews(id) {
    axios
      .get(`/Reviews/${id}`)
      .then((data) => this.setState({reviews: data.data}))
      .then(data => this.getStarCount(this.state.reviews))
      .then(data => this.getFitCount(this.state.reviews))
      .then(data => this.getSupportCount(this.state.reviews))
      .then(data => this.getAthleticCount(this.state.reviews))
      .then(data => this.getAgeCount(this.state.reviews))
      .then(data => this.getBodCount(this.state.reviews))
      .then(data => console.log(this.state));
  }


  getStarCount(array) {
    let starCount = {};
    for (let i = 0; i < array.length; i++) {
      if (!starCount.hasOwnProperty(array[i].stars)) {
        starCount[array[i].stars] = 1;
      } else {
        starCount[array[i].stars] ++;
      }
    }

    this.setState({stars: starCount});
  }

  getFitCount(array) {
    let fitCount = {};
    for (let i =0; i<array.length; i++) {
      if (!fitCount.hasOwnProperty(array[i].fit)) {
        fitCount[array[i].fit] = 1;
      } else {
        fitCount[array[i].fit] ++;
      }
    }
    this.setState({fit: fitCount});
  }

  getSupportCount(array) {
    let supportCount = {};
    for (let i =0; i < array.length; i++) {
      if (!supportCount.hasOwnProperty(array[i].fit)) {
        supportCount[array[i].fit] = 1;
      } else {
        supportCount[array[i].fit] ++;
      }
    }
    this.setState({support: supportCount});
  }

  getAthleticCount(array) {
    let athCount = {};
    for (let i =0; i < array.length; i++) {
      if (!athCount.hasOwnProperty(array[i].athletic_type)) {
        athCount[array[i].athletic_type] = 1;
      } else {
        athCount[array[i].athletic_type] ++;
      }
    }
    this.setState({athletic: athCount});
  }

  getAgeCount(array) {
    let ageCount = {};
    for (let i =0; i < array.length; i++) {
      if (!ageCount.hasOwnProperty(array[i].age_range)) {
        ageCount[array[i].age_range] = 1;
      } else {
        ageCount[array[i].age_range] ++;
      }
    }
    this.setState({age: ageCount});
  }

  getBodCount(array) {
    let bodType = {};
    for (let i = 0; i < array.length; i++) {
      if (!bodType.hasOwnProperty(array[i].body_type)) {
        bodType[array[i].body_type] = 1;
      } else {
        bodType[array[i].body_type] ++;
      }
    }
    this.setState({body: bodType});
  }

  filterResults (selected, category) {
    let newResults = [];
    for (var i = 0; i < this.state.reviews.length; i++) {
      if (this.state.reviews[i][category] === Number(selected)) {
        newResults.push(this.state.reviews[i]);
      }
    }
    this.setState({reviews: newResults});
  }

  filterMoreResults (selected, category) {
    let filtered = [];
    for (var i = 0; i < this.state.reviews.length; i++) {
      if (this.state.reviews[i][category] === selected) {
        filtered.push(this.state.reviews[i]);
      }
    }
    this.setState({reviews: filtered});
  }

  render() {
    return (
      <div>
        <div>
          <h1> Reviews</h1>
          <h2> How's this gear working for you?</h2>
          <button>Create a Review</button>
        </div>
        
        
        <Filters 
          starData = {this.state.stars}
          fitData = {this.state.fit}
          supportData = {this.state.support}
          athleticData = {this.state.athletic}
          ageData = {this.state.age}
          bodyData = {this.state.body}
          filterResults = {this.filterResults}
          filterMoreResults = {this.filterMoreResults}
        />
        
        <div id = 'main-view'> 
          {/* continue working HERE */}
          {/* {(this.state.view === )} */}

          <div id = 'reviewData'>
            <Reviews
              reviewData = {this.state.reviews}
            />
        
          </div>

        </div>


      </div>
    );
  }



}



ReactDOM.render(<App />, document.getElementById('reviews'));




