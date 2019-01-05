import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import axios from 'axios';
import Filters from './components/Filters.jsx';
import ReactPaginate from 'react-paginate';
import Styles from '../../client/dist/styles/Index.css';
import Styles2 from '../../client/dist/styles/Filters.css';



class ReviewsPage extends React.Component {
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
    this.getReviews(this.getRandomNumber(5));
  }

  getReviews(id) {
    axios
      .get(`http://54.193.53.174:3002/Reviews/${id}`)
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
      if (this.state.view === 'default') {
        let newResults = [];
        for (var i = 0; i < this.state.reviews.length; i++) {
          if (this.state.reviews[i][category] === selected) {
            newResults.push(this.state.reviews[i]);
          }
        }
        this.setState({reviewsToDisplay: newResults});
        if (this.state.reviews.length > 0) {
          resolve('filtered results');
        } else {
          reject('no reviews');
        }
      } 
      if (this.state.view === 'filtering') {
        let newResults = [];
        for (var i = 0; i < this.state.reviewsToDisplay.length; i++) {
          if (this.state.reviewsToDisplay[i][category] === selected) {
            newResults.push(this.state.reviewsToDisplay[i]);
          }
        }
        this.setState({reviewsToDisplay: newResults});
        if (this.state.reviews.length > 0) {
          resolve('filtered results');
        } else {
          reject('no reviews');
        }
      }
    });
    filter.then(() => {
      this.getOnlyTen(this.state.reviewsToDisplay, 0);
    });
    filter.then(() => {
      this.getPageCount(this.state.reviewsToDisplay);
    });
    filter.then(() => {
      let items = document.getElementsByClassName(Styles2.reset);
      items = Array.prototype.slice.call(items);
      
      items.forEach(item => {
        if (!item.classList.contains(Styles.open)) {
          item.classList.add(Styles.open);
        } 
      });
      
    });
    filter.then(() => {
      this.setState({view: 'filtering'});
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
      if (!item.classList.contains(Styles.open)) {
        item.classList.add(Styles.open);
      } else {
        item.classList.remove(Styles.open);
      }
    });
  }

  onClick() {
    let arr = [Styles2.ratingList, Styles2.fitList, Styles2.supportList, Styles2.athleticList, Styles2.ageList, Styles2.bodyList];
    for (var i = 0; i < arr.length; i++) {
      let items = document.getElementsByClassName(arr[i]);
      items = Array.prototype.slice.call(items);
      items.forEach(item => {
        if (item.classList.contains(Styles.open)) {
          console.log(item.classList);
          item.classList.remove(Styles.open);
        } 
      });
    }
  }

  reset() {
    this.getReviews(this.state.reviews[0].product_id);
    let items = document.getElementsByClassName(Styles.open);
    items = Array.prototype.slice.call(items);
      
    items.forEach(item => {
      if (item.classList.contains(Styles.open)) {
        item.classList.remove(Styles.open);
      } 
    });

    this.setState({view: 'default'});

  }



  render() {
    return (
      <div>
        <div className = {Styles.aligned}>
          <h1 className = {Styles.head}> Reviews</h1>
          <h2 className = {Styles.secondHead}> How's this gear working for you?</h2>
          <img src = {`https://s3-us-west-1.amazonaws.com/reviewsmodulejon/${this.state.totalStars}of5.gif`} className = 'totalStars'></img>
          <button className = {Styles.create}>Create a Review</button>
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
          <hr className = {Styles.separator}></hr>
        </div>


        <div className = {Styles.reviewHolder} onClick = {() => this.onClick()}>
          <div>
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
              containerClassName={Styles.pagination}
              subContainerClassName={Styles.lister}
              activeClassName={Styles.active} 
              pageClassName ={Styles.lister}/>
              
          </div>

         
        </div>
      </div>

    );
  }
}

ReactDOM.render(<ReviewsPage 
  perPage = {10}
/>, document.getElementById('reviews'));



export default ReviewsPage;
