import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const Reviews = (props) => {
  return (
    <div>
      {props.reviewData.map((item, index) => {
        return (
          <div>
            <ReviewEntry 
              item = {item}
              key = {index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;