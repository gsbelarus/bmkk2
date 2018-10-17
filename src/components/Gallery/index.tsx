import * as React from "react";
import './gallery.css';
import ImageGallery from 'react-image-gallery';
import { IGallery } from "../../types";
import { restRoot } from "../../const";
import "react-image-gallery/styles/css/image-gallery.css";

export class Gallery extends React.Component<{}> {
  render() {
    let i: number = 0;
    let galleryImgBig: IGallery[] = [];
    for (i = 1; i <= 9; i++) {
      galleryImgBig.push(
        {
          original: `${restRoot}rest${i}.jpg`, 
          thumbnail: `${restRoot}rest${i}.jpg` 
        },
      );
    }  
    return (
      <ImageGallery items={galleryImgBig} slideInterval={5000}/>
    );
  }
}



