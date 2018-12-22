import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import axios from 'axios';
import Attributes from './components/Attributes.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    this.getReviews(this.getRandomNumber(5));
  }

  getReviews(id) {
    axios
      .get(`/Reviews/${id}`)
      .then((data) => this.setState({reviews: data.data}));
  }

  render() {
    return (
      <div>
        <div>
          <h1> Reviews</h1>
          <h2> How's this gear working for you?</h2>
          <button>Create a Review</button>
        </div>

        
        <div id = 'container'>

          <div id = 'reviewBody'>
            <Reviews
              reviewData = {this.state.reviews}
            />
        
          </div>

          <div id = 'reviewAttributes'>
            <Attributes 
              reviewData = {this.state.reviews}
            />
        
        
          </div>

        </div>

        


      </div>
    );
  }



}



ReactDOM.render(<App />, document.getElementById('reviews'));




