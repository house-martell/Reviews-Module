import React from 'react';
import Styles from '../../dist/styles/Filters.css';
import classnames from 'classnames';

const Filters = (props) => {
  return (
    <div className = {Styles.filters}>

      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.ratingList)}>
          <span className= {Styles.selectItem}>Rating <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className= {Styles.ratingList}>
          <div value = "1" className= {classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(1, 'stars')}>1 STAR({props.starData[1] || 0})</div>
          <div value = "2" className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(2, 'stars')}>2 STARS({props.starData[2] || 0})</div>
          <div value = "3" className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(3, 'stars')}>3 STARS({props.starData[3] || 0})</div>
          <div value = "4" className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(4, 'stars')}>4 STARS({props.starData[4] || 0})</div>
          <div value = "5" className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(5, 'stars')}>5 STARS({props.starData[5] || 0})</div>
        </div>
      </div>  
    

      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.fitList)}>
          <span className={Styles.selectItem}>Fit <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className={Styles.fitList}>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(14, 'fit')}>Second Skin({props.fitData[14] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(28, 'fit')}>Tight({props.fitData[28] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(42, 'fit')}>Snug({props.fitData[42] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(56, 'fit')}>Just Right({props.fitData[56] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(70, 'fit')}>Roomy({props.fitData[70] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(84, 'fit')}>Oversized({props.fitData[84] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(98, 'fit')}>Flowy({props.fitData[98] || 0})</div>
        </div>
      </div>  

      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.supportList)}>
          <span className={Styles.selectItem}>Support <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className={Styles.supportList}>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(14, 'support')}>Just Enough({props.supportData[14] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(28, 'support')}>Studio Friendly({props.supportData[28] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(42, 'support')}>Supportive and Comfortable({props.supportData[42] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(56, 'support')}>Ready to Run({props.supportData[56] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(70, 'support')}>Holds 'Em Tight({props.supportData[70] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(84, 'support')}>Super Supportive({props.supportData[84] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults(98, 'support')}>Locked and Loaded({props.supportData[98] || 0})</div>
        </div>
      </div>  


      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.athleticList)}>
          <span className={Styles.selectItem}>Athletic Type <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className= {Styles.athleticList}>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Yogi', 'athletic_type')}>Yogi({props.athleticData['Yogi'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Runner', 'athletic_type')}>Runner({props.athleticData['Runner'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Dancer', 'athletic_type')}>Dancer({props.athleticData['Dancer'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Cyclist', 'athletic_type')}>Cyclist({props.athleticData['Cyclist'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Sweaty Generalist', 'athletic_type')}>Sweaty Generalist({props.athleticData['Sweaty Generalist'] || 0})</div>
        </div>
      </div>

      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.ageList)}>
          <span className={Styles.selectItem}>Age <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className={Styles.ageList}>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Under 18', 'age_range')}>Under 18({props.ageData['Under 18'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('18-24', 'age_range')}>18-24({props.ageData['18-24'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('25-34', 'age_range')}>25-34({props.ageData['25-34'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('35-44', 'age_range')}>35-44({props.ageData['35-44'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('45-54', 'age_range')}>45-54({props.ageData['45-54'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('55-64', 'age_range')}>55-64({props.ageData['55-64'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Over 65', 'age_range')}>Over 65({props.ageData['Over 65'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('I keep my age on the DL', 'age_range')}>I keep my age on the DL({props.ageData['I keep my age on the DL'] || 0})</div>
        </div>
      </div>  


      <div className={Styles.dropdownContainer}>
        <div className={classnames(Styles.itemDropdown, Styles.clickable)} onClick={() => props.onDropdown(Styles.bodyList)}>
          <span className={Styles.selectItem}>Body Type <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img></span>
        </div>
        <div className={Styles.bodyList}>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Athletic', 'body_type')}>Athletic({props.bodyData['Athletic'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Curvy', 'body_type')}>Curvy({props.bodyData['Curvy'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Lean', 'body_type')}>Lean({props.bodyData['Lean'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Muscular', 'body_type')}>Muscular({props.bodyData['Muscular'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Petite', 'body_type')}>Petite({props.bodyData['Petite'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Slim', 'body_type')}>Slim({props.bodyData['Slim'] || 0})</div>
          <div className={classnames(Styles.items, Styles.clickable)} onClick={() => props.filterResults('Solid', 'body_type')}>Solid({props.bodyData['Solid'] || 0})</div>
        </div>
      </div>  



      <div>
        <a className = {Styles.reset} onClick = {() => props.reset()}>Reset</a>
      </div>

      <div className = {Styles.sortOrder}>
        | Choose a Sort Order <img src = {'https://s3-us-west-1.amazonaws.com/reviewsmodulejon/arrow.png'}></img>
      </div>
     
    
    
    
    </div>
  );
};



export default Filters;