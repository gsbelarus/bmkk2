
import * as React from 'react';
import './slider.css';

export class SimleSlider extends React.Component {
  render() {
    const img1 = require(`../../../public/image/partn1.png`); 
    const img2 = require(`../../../public/image/partn2.png`); 
    const img3 = require(`../../../public/image/partn3.png`); 
    const img4 = require(`../../../public/image/partn4.png`);     
    return (
      <div className="FlexContainer">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />         
      </div>
    );
  }
}