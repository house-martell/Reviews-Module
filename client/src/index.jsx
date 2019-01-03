import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import axios from 'axios';
import Filters from './components/Filters.jsx';
import ReactPaginate from 'react-paginate';



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
      body: {},
      pageCount: 0,
      offset: 10,
      index: 0,
      totalStars: 1,
      reviewsToDisplay: []
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
    this.handlePageClick = this.handlePageClick.bind(this);
    this.getPageCount = this.getPageCount.bind(this);
    this.getOnlyTen = this.getOnlyTen.bind(this);
    this.totalStars = this.totalStars.bind(this);
    this.onDropdown = this.onDropdown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.reset = this.reset.bind(this);
    
  }
  
  getRandomNumber(max) {
    return Math.ceil(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    this.getReviews(this.getRandomNumber(6));
  }

  getReviews(id) {
    axios
      .get(`/Reviews/${id}`)
      .then((data) => this.setState({reviews: data.data}))
      .then(data => this.totalStars(this.state.reviews))
      .then(data => this.getOnlyTen(this.state.reviews, this.state.index))
      .then(data => this.getStarCount(this.state.reviews))
      .then(data => this.getFitCount(this.state.reviews))
      .then(data => this.getSupportCount(this.state.reviews))
      .then(data => this.getAthleticCount(this.state.reviews))
      .then(data => this.getAgeCount(this.state.reviews))
      .then(data => this.getBodCount(this.state.reviews))
      .then(data => this.getPageCount(this.state.reviews))
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
    for (let i = 0; i < array.length; i++) {
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
    for (let i = 0; i < array.length; i++) {
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
    for (let i = 0; i < array.length; i++) {
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
    for (let i = 0; i < array.length; i++) {
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
    let filter = new Promise((resolve, reject) => {
      let newResults = [];
      for (var i = 0; i < this.state.reviews.length; i++) {
        if (this.state.reviews[i][category] === Number(selected)) {
          newResults.push(this.state.reviews[i]);
        }
      }
      this.setState({reviewsToDisplay: newResults});
      if (this.state.reviews.length > 0) {
        resolve('filtered results');
      } else {
        reject('no reviews');
      }
    });
    filter.then(() => {
      this.getOnlyTen(this.state.reviewsToDisplay, 0);
    });
    filter.then(() => {
      this.getPageCount(this.state.reviewsToDisplay);
    });
    filter.then(() => {
      let items = document.getElementsByClassName('reset');
      items = Array.prototype.slice.call(items);
      
      items.forEach(item => {
        if (!item.classList.contains('open')) {
          item.classList.add('open');
        } 
      });
      
    });
  }

  filterMoreResults (selected, category) {
    let promise = new Promise((resolve, reject) => {
      let filtered = [];
      for (var i = 0; i < this.state.reviews.length; i++) {
        if (this.state.reviews[i][category] === selected) {
          filtered.push(this.state.reviews[i]);
        }
      }
      console.log('filtered', filtered);
      this.setState({reviewsToDisplay: filtered});
      if (this.state.reviews.length > 0) {
        resolve('array seeded');
      } else {
        reject('reviews not seeded');
      }
    });
    promise.then(() => {
      this.getOnlyTen(this.state.reviewsToDisplay, 0);
    });
    promise.then(() => {
      this.getPageCount(this.state.reviewsToDisplay);
    });
    promise.then(() => {
      let items = document.getElementsByClassName('reset');
      items = Array.prototype.slice.call(items);
      
      items.forEach(item => {
        if (!item.classList.contains('open')) {
          item.classList.add('open');
        } 
      });
      
    });
  }

  getPageCount (array) {
    let count = (array.length / this.props.perPage);
    this.setState({pageCount: count});
  }

  handlePageClick (selector) {
    let newSelection = selector.selected;
    console.log('heyyo', newSelection);
    let newIndex = newSelection * 10;
    console.log('howdy', newIndex);
    this.getOnlyTen(this.state.reviews, newIndex);
  }

  getOnlyTen (array, index) {
    let ten = array.slice(index, index + 10);
    console.log('this is ten', ten);
    this.setState({reviewsToDisplay: ten});
  }

  totalStars (array) {
    let finalCount = 0;
    let totalStars = 0;
    for (var i = 0; i < array.length; i++) {
      for (var key in array[i]) {
        if (key === 'stars') {
          finalCount += array[i][key];
        }
      }
    }
    totalStars = Number(totalStars);
    totalStars = Math.floor(finalCount / array.length);
    console.log('total', totalStars);
    this.setState({totalStars: totalStars});
  }

  onDropdown(className) {
    let items = document.getElementsByClassName(className);
    items = Array.prototype.slice.call(items);
    items.forEach(item => {
      if (!item.classList.contains('open')) {
        item.classList.add('open');
      } else {
        item.classList.remove('open');
      }
    });
  }

  onClick() {
    let arr = ['rating-list', 'fit-list', 'support-list', 'athletic-list', 'age-list', 'body-list'];
    for (var i = 0; i < arr.length; i++) {
      let items = document.getElementsByClassName(arr[i]);
      items = Array.prototype.slice.call(items);
      items.forEach(item => {
        if (item.classList.contains('open')) {
          item.classList.remove('open');
        } 
      });
    }
  }

  reset() {
    this.getReviews(this.state.reviews[0].product_id);
    let items = document.getElementsByClassName('reset');
    items = Array.prototype.slice.call(items);
      
    items.forEach(item => {
      if (item.classList.contains('open')) {
        item.classList.remove('open');
      } 
    });

  }



  render() {
    return (
      <div className = 'main'>
        <div className = 'aligned'>
          <h1 className = 'head'> Reviews</h1>
          <h2> How's this gear working for you?</h2>
          <img src = {require(`/Users/Jon/HRLA/Reviews-Module/client/dist/images/${this.state.totalStars}of5.gif`)} className = 'totalStars'></img>
          <button className = 'create'>Create a Review</button>
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
          onDropdown = {this.onDropdown}
          reset = {this.reset}
        />
        
        
        <div>
          <hr className = 'separator'></hr>
        </div>


        <div className = 'review-holder' onClick = {() => this.onClick()}>
          <div className="commentBox">
            <Reviews
              reviewData = {this.state.reviewsToDisplay}
            />
            <ReactPaginate previousLabel={'prev'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'} />
          </div>

          {/* <div id = 'reviewData'>
            
            
          </div> */}
        </div>
      </div>
      

      
    );
  }



}



ReactDOM.render(<App 
  perPage = {10}
/>, document.getElementById('reviews'));




