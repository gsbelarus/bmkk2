import * as React from "react";
import Slider from "react-slick";
import { PageProps } from "../Page";

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
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
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
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
