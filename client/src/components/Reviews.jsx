import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AttributesEntry from './AttributesEntry.jsx';
import Styles from '../../dist/styles/Reviews.css';
import classnames from 'classnames';

const Reviews = (props) => {
  return (
    <div>
      
      {props.reviewData.map((item, index) => {
        return (
          <div>
            <div className = {Styles.flexGrid}>
              <div className = {Styles.colOneThird}>
                <AttributesEntry
                  item = {item}
                  key = {index}
                />
              </div>
              <div className = {Styles.colTwoThird}>
                <ReviewEntry 
                  item = {item}
                  key = {index}
                />
                <hr className = {Styles.dotted}/>

                <div className = {Styles.flexGrid}>
                  <div className = {classnames(Styles.col, Styles.helpful)} >
                Was this review helpful to you?
                  </div>
                  <div className = {classnames(Styles.col, Styles.report)}>
                    Yes (0) | No (0) | Report as Innapropriate
                  </div>

                </div>
                <br></br>
                <div>
                  <p className = {Styles.comment}>
                    Post Comment
                  </p>
                </div>
              </div>

              
              
          
            </div>
            <hr/>
          </div>
         
        );
        
      })}
      

    </div>
  );
};

export default Reviews;