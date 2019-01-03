import React from 'react';
import Flexbox from 'flexbox-react';

const ReviewEntry = (props) => {
  return (
    <div>
      <div className = 'small'>
        <span className = 'date'>
          {props.item.date.slice(4, 15)}
        </span>
      </div>
      <div>
        <p className = 'review-title'>
          {props.item.rev_title}
        </p>
      </div>
      <div>
        <p className = 'review-body'>
          {props.item.body_text}
        </p>
        
      </div>
    </div>

    
     
    
  );
};




export default ReviewEntry;