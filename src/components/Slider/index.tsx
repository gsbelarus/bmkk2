import * as React from "react";
import Slider from "react-slick";
import './slider.css';

export type SliderProps = {
  sliderImgs: string[];
};

export class MultipleItems extends React.Component<SliderProps, {}> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear"   
    };
    const { sliderImgs } = this.props;
    return (
      <div className="Slider">
        <Slider {...settings}>
          {sliderImgs.map((l, idx) => ( 
            <div key={idx}>
              <img src={l} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
