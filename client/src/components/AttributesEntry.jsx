import React from 'react';
import { Star } from '@material-ui/icons';


const AttributesEntry = (props) => {
  return (
    <div id ='stars'>
      <img src = {require(`/Users/Jon/HRLA/Reviews-Module/client/dist/images/${props.item.stars}of5.gif`)}></img>
      <br></br>
      <p className = 'username'>
        {props.item.username}
      </p> 
      <br></br>
      <div className = 'attributes-holder'>
        <p className = 'attributes'>Location:</p> <p className = 'att-entry'>{props.item.location}</p>
      </div>
      <div className = 'attributes-holder'>
        <p className = 'attributes'>Athletic Type:</p><p className = 'att-entry'>{props.item.athletic_type}</p>
      </div>
      <div className = 'attributes-holder'>
        <p className = 'attributes'>Age:</p><p className = 'att-entry'>{props.item.age_range}</p>
      </div>
      <div className = 'attributes-holder'>
        <p className = 'attributes'>Body Type:</p><p className = 'att-entry'>{props.item.body_type}</p>
      </div>
      <br></br>

      <p className = 'att-entry'>What You Like</p> <p className = 'helpful'>{props.item.what_you_like} </p>
      <br></br>
      <p className = 'att-entry'>Fit: </p>
      <div className = 'flex-bar'>
        <div className = 'col-quarter'>
          <p className = 'helpful'> Fitted</p>
        </div>
        <div className ='bar col-bar'>
          <div style ={{ width: `${props.item.fit}%` }} className ='bar-inner'></div>
        </div>
        <div className = 'col-quarter'>
          <p className = 'helpful'> Loose </p>
        </div>
      </div>
      <p className = 'att-entry'> Suport:</p>
      <div className = 'flex-bar'>
        <div className = 'col-quarter'>
          <p className = 'helpful'>Light</p>
        </div>
        <div className ='bar col-bar'>
          <div style ={{ width: `${props.item.support}%` }} className ='bar-inner'></div>
        </div>
        <div className = 'col-quarter'>
          <p className = 'helpful'>Full</p>
        </div>
      </div>



    </div>
    
  );
};

export default AttributesEntry;