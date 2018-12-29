import React from 'react';
import { Star } from '@material-ui/icons';


const AttributesEntry = (props) => {
  return (
    <div id ='stars'>
      <img src = {require(`/Users/Jon/HRLA/Reviews-Module/client/dist/images/${props.item.stars}of5.gif`)}></img>
      {/* {Array(props.item.stars).fill(<Star />)} */}
      <br></br>
      {props.item.username}
      <br></br>  
      <br></br>
      Location: {props.item.location}
      <br></br>
      Athletic Type: {props.item.athletic_type}
      <br></br>
      Age: {props.item.age_range}
      <br></br>
      Body Type: {props.item.body_type}
      <br></br>

      What You Like: {props.item.what_you_like}
      <br></br>
        Fit:
      <div className = 'flex-grid'>
        <div className = 'col'>
        Fitted
        </div>
        <div className ='bar col'>
          <div style ={{ width: `${props.item.fit}%` }} className ='bar-inner'></div>
        </div>
        <div className = 'col'>
      Loose
        </div>
      </div>
        Suport:
      <div className = 'flex-grid'>
        <div className = 'col'>
        Light
        </div>
        <div className ='bar col'>
          <div style ={{ width: `${props.item.support}%` }} className ='bar-inner'></div>
        </div>
        <div className = 'col'>
      Full
        </div>
      </div>



    </div>
    
  );
};

export default AttributesEntry;