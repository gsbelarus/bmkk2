import * as React from "react";
import Slider from "react-slick";
import './slider.css';

export type SliderProps = {
  sliderImgs: string[];
};

export class MultipleItems extends React.Component<SliderProps, {}> {
  // constructor(P: PageProps) {
  //   let i: number = 0;
  //   let restImg: string[] = [];
  //   for (i = 1; i <= 9; i++) {
  //     restImg.push(require("../../../public/image/rest/rest" + i + ".jpg"));
  //   }
  //   super(P);
  //   this.restImgs = restImg;
  // }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true
      //,
      // autoplay: true,
      // autoplaySpeed: 2000
    };
    const { sliderImgs } = this.props;
    return (
      <div className="Slider">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {sliderImgs.map((l, idx) => ( 
            <div key={idx}>
              <img src={l} />
            </div>
          ))}
          {/* <div>
            <img src={sliderImgs[0]} />
          </div>
          <div>
            <img src={sliderImgs[1]} />
          </div>
          <div>
            <img src={sliderImgs[2]} />
          </div>
          <div>
            <img src={sliderImgs[3]} />
          </div>
          <div>
            <img src={sliderImgs[4]} />
          </div>
          <div>
            <img src={sliderImgs[5]} />
          </div>
          <div>
            <img src={sliderImgs[6]} />
          </div>
          <div>
            <img src={sliderImgs[7]} />
          </div> */}

        </Slider>
      </div>
    );
  }
}
