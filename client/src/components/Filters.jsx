import React from 'react';

const Filters = (props) => {
  return (
    <div className = 'filters'>

      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('rating-list')}>
          <span className="select-size">Rating <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="rating-list">
          <div value = "1" className="sizes clickable" onClick={() => props.filterResults(1, 'stars')}>1 STAR({props.starData[1] || 0})</div>
          <div value = "2" className="sizes clickable" onClick={() => props.filterResults(2, 'stars')}>2 STARS({props.starData[2] || 0})</div>
          <div value = "3" className="sizes clickable" onClick={() => props.filterResults(3, 'stars')}>3 STARS({props.starData[3] || 0})</div>
          <div value = "4" className="sizes clickable" onClick={() => props.filterResults(4, 'stars')}>4 STARS({props.starData[4] || 0})</div>
          <div value = "5" className="sizes clickable" onClick={() => props.filterResults(5, 'stars')}>5 STARS({props.starData[5] || 0})</div>
        </div>
      </div>  
    

      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('fit-list')}>
          <span className="select-size">Fit <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="fit-list">
          <div className="sizes clickable" onClick={() => props.filterResults(14, 'fit')}>Second Skin({props.fitData[14] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(28, 'fit')}>Tight({props.fitData[28] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(42, 'fit')}>Snug({props.fitData[42] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(56, 'fit')}>Just Right({props.fitData[56] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(70, 'fit')}>Roomy({props.fitData[70] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(84, 'fit')}>Oversized({props.fitData[84] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(98, 'fit')}>Flowy({props.fitData[98] || 0})</div>
        </div>
      </div>  

      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('support-list')}>
          <span className="select-size">Support <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="support-list">
          <div className="sizes clickable" onClick={() => props.filterResults(14, 'support')}>Just Enough({props.supportData[14] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(28, 'support')}>Studio Friendly({props.supportData[28] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(42, 'support')}>Supportive and Comfortable({props.supportData[42] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(56, 'support')}>Ready to Run({props.supportData[56] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(70, 'support')}>Holds 'Em Tight({props.supportData[70] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(84, 'support')}>Super Supportive({props.supportData[84] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterResults(98, 'support')}>Locked and Loaded({props.supportData[98] || 0})</div>
        </div>
      </div>  


      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('athletic-list')}>
          <span className="select-size">Athletic Type <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="athletic-list">
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Yogi', 'athletic_type')}>Yogi({props.athleticData['Yogi'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Runner', 'athletic_type')}>Runner({props.athleticData['Runner'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Dancer', 'athletic_type')}>Dancer({props.athleticData['Dancer'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Cyclist', 'athletic_type')}>Cyclist({props.athleticData['Cyclist'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Sweaty Generalist', 'athletic_type')}>Sweaty Generalist({props.athleticData['Sweaty Generalist'] || 0})</div>
        </div>
      </div>

      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('age-list')}>
          <span className="select-size">Age <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="age-list">
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Under 18', 'age_range')}>Under 18({props.ageData['Under 18'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('18-24', 'age_range')}>18-24({props.ageData['18-24'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('25-34', 'age_range')}>25-34({props.ageData['25-34'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('35-44', 'age_range')}>35-44({props.ageData['35-44'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('45-54', 'age_range')}>45-54({props.ageData['45-54'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('55-64', 'age_range')}>55-64({props.ageData['55-64'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Over 65', 'age_range')}>Over 65({props.ageData['Over 65'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('I keep my age on the DL', 'age_range')}>I keep my age on the DL({props.ageData['I keep my age on the DL'] || 0})</div>
        </div>
      </div>  


      <div className="size-dropdown-container">
        <div className="size-dropdown clickable" onClick={() => props.onDropdown('body-list')}>
          <span className="select-size">Body Type <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img></span>
        </div>
        <div className="body-list">
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Athletic', 'body_type')}>Athletic({props.bodyData['Athletic'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Curvy', 'body_type')}>Curvy({props.bodyData['Curvy'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Lean', 'body_type')}>Lean({props.bodyData['Lean'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Muscular', 'body_type')}>Muscular({props.bodyData['Muscular'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Petite', 'body_type')}>Petite({props.bodyData['Petite'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Slim', 'body_type')}>Slim({props.bodyData['Slim'] || 0})</div>
          <div className="sizes clickable" onClick={() => props.filterMoreResults('Solid', 'body_type')}>Solid({props.bodyData['Solid'] || 0})</div>
        </div>
      </div>  



      <div>
        <a className = 'reset' onClick = {() => props.reset()}>Reset</a>
      </div>

      <div id = 'sort-order'>
        | Choose a Sort Order <img src = {require('/Users/Jon/HRLA/Reviews-Module/client/dist/images/arrow.png')}></img>
      </div>
     
    
    
    
    </div>
  );
};



export default Filters;