import React from 'react';

const Filters = (props) => {
  return (
    <div className = 'flex-grid'>
    
      <select id = 'stars' className = 'col' onChange ={(e) => props.filterResults(e.target.value, 'stars')} >
        <option>Rating</option>
        <option value = '1'>1 STAR({props.starData[1] || 0}) </option>
        <option value = '2'> 2 STARS({props.starData[2] || 0})</option>
        <option value = '3'> 3 STARS({props.starData[3] || 0})</option>
        <option value = '4'> 4 STARS({props.starData[4] || 0})</option>
        <option value = '5'> 5 STARS({props.starData[5] || 0})</option>
      </select>

      <select id = 'fit' className = 'col' onChange ={(e) => props.filterResults(e.target.value, 'fit')}>
        <option>Fit</option>
        <option value = '14'>Second Skin ({props.fitData[14] || 0}) </option>
        <option value = '28'>Tight ({props.fitData[28] || 0})</option>
        <option value = '42'>Snug ({props.fitData[42] || 0}) </option>
        <option value = '56'>Just Right ({props.fitData[56] || 0}) </option>
        <option value = '70'>Roomy ({props.fitData[70] || 0})</option>
        <option value = '84'>Oversized ({props.fitData[84] || 0})</option>
        <option value = '98'>Flowy ({props.fitData[98] || 0}) </option>

      </select>

      <select id = 'support' className = 'col' onChange = {(e) => props.filterResults(e.target.value, 'support')}>
        <option>Support</option>
        <option value = '14'> Just Enough ({props.supportData[14] || 0}) </option>
        <option value = '28'> Studio Friendly ({props.supportData[28] || 0})</option>
        <option value = '42'> Supportive and Comfortable ({props.supportData[42] || 0}) </option>
        <option value = '56'> Ready To Run ({props.supportData[56] || 0}) </option>
        <option value = '70'> Holds 'Em Tight ({props.supportData[70] || 0})</option>
        <option value = '84'> Super Supportive ({props.supportData[84] || 0})</option>
        <option value = '98'> Locked and Loaded ({props.supportData[98] || 0}) </option>
      
      </select>

      <select id = 'athType' className = 'col' onChange = {(e) => props.filterMoreResults(e.target.value, 'athletic_type')}>
        <option>Athletic Type</option>
        <option value = 'Yogi'> Yogi ({props.athleticData['Yogi'] || 0}) </option>
        <option value = 'Runner'> Runner ({props.athleticData['Runner'] || 0})</option>
        <option value = 'Dancer'> Dancer ({props.athleticData['Dancer'] || 0}) </option>
        <option value = 'Cyclist'> Cyclist ({props.athleticData['Cyclist'] || 0}) </option>
        <option value = 'Sweaty Generalist'> Sweaty Generalist ({props.athleticData['Sweaty Generalist'] || 0}) </option>      
      </select>

      <select id = 'ageSelect' className = 'col' onChange = {(e) => props.filterMoreResults(e.target.value, 'age_range')}>
        <option>Age</option>
        <option value = 'Under 18'> Under 18 ({props.ageData['Under 18'] || 0}) </option>
        <option value = '18-24'> 18-24 ({props.ageData['18-24'] || 0})</option>
        <option value = '25-34'> 25-34 ({props.ageData['25-34'] || 0}) </option>
        <option value = '35-44'> 35-44 ({props.ageData['35-44'] || 0}) </option>
        <option value = '45-54'> 45-54 ({props.ageData['45-54'] || 0}) </option>
        <option value = '55-64'> 55-64 ({props.ageData['55-64'] || 0}) </option>
        <option value = 'Over 65'> Over 65 ({props.ageData['Over 65'] || 0}) </option>
        <option value = 'I keep my age on the DL'> I keep my age on the DL ({props.ageData['I keep my age on the DL'] || 0}) </option>
      </select>

      <select id = 'bodySelect' className = 'col' onChange = {(e) => props.filterMoreResults(e.target.value, 'body_type')}>
        <option>Body Type</option>
        <option value = 'Athletic'> Athletic ({props.bodyData['Athletic'] || 0}) </option>
        <option value = 'Curvy'> Curvy ({props.bodyData['Curvy'] || 0})</option>
        <option value = 'Lean'> Lean ({props.bodyData['Lean'] || 0}) </option>
        <option value = 'Muscular'> Muscular ({props.bodyData['Muscular'] || 0}) </option>
        <option value = 'Petite'> Petite ({props.bodyData['Petite'] || 0}) </option>
        <option value = 'Slim'> Slim ({props.bodyData['Slim'] || 0}) </option>
        <option value = 'Solid'> Solid ({props.bodyData['Solid'] || 0}) </option>
      </select>

      <div className = 'col'>
      </div>

      <div className = 'col'>
        |
      </div>
     
    
    
    
    </div>
  );
};



export default Filters;