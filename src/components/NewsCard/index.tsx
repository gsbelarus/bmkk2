import * as React from "react";
import { Page } from "../Page";
import { newsRoot } from "../../const";
import * as ReactMarkdown from "react-markdown";
import { IGallery } from "../../types";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export class NewsCard extends Page {
  getPageStyle() {
    return `${super.getPageStyle()} NewsCard`;
  }

  renderBody(): JSX.Element {
    const { news, sl, match } = this.props;
    if (news) {
      let galleryImgBig: IGallery[] = [];
      const g = news.news.find(t => t.ruid === match.params.newsID);
      if (g) {
        const newsText = `## ${Page.getLName(g.title, sl)}\n\n${Page.getLName(
          g.body,
          sl
        ).trimRight().split('![](').join(`![](${newsRoot}`)}`;

        let img: JSX.Element | undefined = undefined;
        if (g.image && (g.image2 || g.image3)) {
          for (let i = 1; i <= 3; i++) {
            const gg = i === 1 ? g.image : i === 2 ? g.image2 : g.image3;
            if (gg) {
              galleryImgBig.push(
                {
                  original: gg.includes('/') ? gg
                  : `${newsRoot}${gg}`,
                  thumbnail: gg.includes('/') ? gg
                  : `${newsRoot}${gg}`
                });
            }
          }
          img = <ImageGallery items={galleryImgBig} slideInterval={5000}/>
        } else {
          if (g.image) {
            img = <div className="NewImgs">{<img src={g.image.includes('/') ? g.image : `${newsRoot}${g.image}`} />}</div>
          }
        }

        return (
          <div className="NewsContainer">
            <ReactMarkdown source={newsText} />
            {img}
            <div className="NewsDate">{g.date}</div>
          </div>
        );
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}
