import React from 'react';

const AttributesEntry = (props) => {
  return (
    <div>
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

    </div>
  );
};

export default AttributesEntry;