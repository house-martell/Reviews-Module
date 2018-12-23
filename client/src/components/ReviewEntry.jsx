import React from 'react';
import Flexbox from 'flexbox-react';

const ReviewEntry = (props) => {
  return (
      <div>
    <div>
      {props.item.date}
      </div>
      <br></br>
      <div>
      {props.item.body_text}

    </div>
    </div>

    
     
    
  );
};




export default ReviewEntry;