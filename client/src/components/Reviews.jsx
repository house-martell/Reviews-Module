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
              <div className = 'col-one-third'>
                <AttributesEntry
                  item = {item}
                  key = {index}
                />
              </div>
              <div className = 'col-two-third'>
                <ReviewEntry 
                  item = {item}
                  key = {index}
                />
                <hr className = 'dotted'/>

                <div className = 'flex-grid'>
                  <div className = 'col helpful' >
                Was this review helpful to you?
                  </div>
                  <div className = 'col report'>
                    Yes (0) | No (0) | Report as Innapropriate
                  </div>

                </div>
                <br></br>
                <div>
                  <p className = 'comment'>
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