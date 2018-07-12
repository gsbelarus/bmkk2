
import * as React from 'react';
import Slider from "react-slick";


export class SimleSlider extends React.Component {
  state = {
    display: true,
    width: 600
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const img1 = require(`../../../public/image/partn1.png`); 
    const img2 = require(`../../../public/image/partn2.png`); 
    const img3 = require(`../../../public/image/partn3.png`); 
    const img4 = require(`../../../public/image/partn4.png`);     
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div >
            <img src={img2} />
          </div>
          <div >
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>  
          <div>
            <img src={img2} />
          </div>          
        </Slider>
      </div>
    );
  }
}