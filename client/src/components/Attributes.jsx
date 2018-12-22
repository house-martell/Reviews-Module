import React from 'react';
import AttributesEntry from './AttributesEntry.jsx';


const Attributes = (props) => {
  return (
    <div>
      {props.reviewData.map((item, index) => {
        return (
          <AttributesEntry 
            item = {item}
            key = {index}
          />
        );
      })}
    </div>
  );
};




export default Attributes;
