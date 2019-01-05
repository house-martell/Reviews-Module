import React from 'react';
import Styles from '../../dist/styles/AttributesEntry.css';
import classnames from 'classnames';


const AttributesEntry = (props) => {
  return (
    <div id ='stars'>
      <img src = {require(`/Users/Jon/HRLA/Reviews-Module/client/dist/images/${props.item.stars}of5.gif`)}></img>
      <br></br>
      <p className = {Styles.username}>
        {props.item.username}
      </p> 
      <br></br>
      <div className = {Styles.attributesHolder}>
        <p className = {Styles.attributes}>Location:</p> <p className = {Styles.attEntry}>{props.item.location}</p>
      </div>
      <div className = {Styles.attributesHolder}>
        <p className = {Styles.attributes}>Athletic Type:</p><p className = {Styles.attEntry}>{props.item.athletic_type}</p>
      </div>
      <div className = {Styles.attributesHolder}>
        <p className = {Styles.attributes}>Age:</p><p className = {Styles.attEntry}>{props.item.age_range}</p>
      </div>
      <div className = {Styles.attributesHolder}>
        <p className = {Styles.attributes}>Body Type:</p><p className = {Styles.attEntry}>{props.item.body_type}</p>
      </div>
      <br></br>

      <p className = {Styles.attEntry}>What You Like</p> <p className = {Styles.helpful}>{props.item.what_you_like} </p>
      <br></br>
      <p className = {Styles.attEntry}>Fit: </p>
      <div className = {Styles.flexBar}>
        <div className = {Styles.colQuarter}>
          <p className = {Styles.helpful}> Fitted</p>
        </div>
        <div className ={classnames(Styles.bar, Styles.colBar)}>
          <div style ={{ width: `${props.item.fit}%` }} className ={Styles.barInner}></div>
        </div>
        <div className = {Styles.colQuarter}>
          <p className = {Styles.helpful}> Loose </p>
        </div>
      </div>
      <p className = {Styles.attEntry}> Suport:</p>
      <div className = {Styles.flexBar}>
        <div className = {Styles.colQuarter}>
          <p className = {Styles.helpful}>Light</p>
        </div>
        <div className ={classnames(Styles.bar, Styles.colBar)}>
          <div style ={{ width: `${props.item.support}%` }} className ={Styles.barInner}></div>
        </div>
        <div className = {Styles.colQuarter}>
          <p className = {Styles.helpful}>Full</p>
        </div>
      </div>



    </div>
    
  );
};

export default AttributesEntry;