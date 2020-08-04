import * as React from "react";
import './gallery.css';
import ImageGallery from 'react-image-gallery';
import { IGallery } from "../../types";
import { restRoot, restRoot2 } from "../../const";
import "react-image-gallery/styles/css/image-gallery.css";

export type GalleryProps = {
  n: string;
};

export class Gallery extends React.Component<GalleryProps, {}> {

  render() {

    const { n } = this.props;
    const count = n === '1' ? 8 : 9;
    const root = n === '1' ? restRoot : restRoot2;

    let i: number = 0;
    let galleryImgBig: IGallery[] = [];
    for (i = 1; i <= count; i++) {
      galleryImgBig.push(
        {
          original: `${root}rest${i}.jpg`,
          thumbnail: `${root}rest${i}.jpg`
        },
      );
    }
    return (
      <ImageGallery items={galleryImgBig} slideInterval={5000}/>
    );
  }
}



