import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AttributesEntry from './AttributesEntry.jsx';

const Reviews = (props) => {
  return (
    <div>
      {props.reviewData.map((item, index) => {
        return (
          <div>
            <div className = 'flex-grid'>
              <div className = 'col'>
                <AttributesEntry
                  item = {item}
                  key = {index}
                />
              </div>
              <div className = 'col'>
                <ReviewEntry 
                  item = {item}
                  key = {index}
                />
                <hr className = 'dotted'/>

                <div className = 'flex-grid'>
                  <div className = 'col'>
                Was this review helpful to you?
                  </div>
                  <div className = 'col'>
                    Yes (0) | No (0) | Report as Innapropriate
                  </div>

                </div>
                <br></br>
                    Post Comment
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