import React from 'react';
import Styles from '../../dist/styles/ReviewEntry.css';

const ReviewEntry = (props) => {
  return (
    <div>
      <div className = {Styles.small}>
        <span className = {Styles.date}>
          {props.item.date.slice(4, 15)}
        </span>
      </div>
      <div>
        <p className = {Styles.reviewTitle}>
          {props.item.rev_title}
        </p>
      </div>
      <div>
        <p className = {Styles.reviewBody}>
          {props.item.body_text}
        </p>
        
      </div>
    </div>

    
     
    
  );
};




export default ReviewEntry;