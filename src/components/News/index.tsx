import * as React from 'react';
import { Page } from '../Page';
import { INews } from '../../types';
import { newsFile, newsRoot } from '../../const';
import * as ReactMarkdown from 'react-markdown';
import './news.css';

export class News extends Page {

  componentDidMount() {
    const { onLoadNews } = this.props;
    fetch(newsFile)
    .then( res => {
      return res.text();
    })
    .then( res => JSON.parse(res) )
    .then( res => onLoadNews(res as INews) )
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { news, selectedLang } = this.props;

    if (news) {
      return (
        <div className="GoodsContainer">
          {
            news.news.map( (n, idx) => {
              const fullImageName = !n.image ? ``
              : n.image.includes('/') ? n.image
              : `${newsRoot}${n.image}`;
                return (
                  <div key={idx}  className="NewsItem">
                    <h3>
                      {n.title[selectedLang.toLowerCase()].name}
                    </h3>
                    <ReactMarkdown source={n.body[selectedLang.toLowerCase()].name} />
                    <img src={fullImageName} className={fullImageName === '' ? 'NoneDisplay' : ''}/>
                  </div>
                )
              }
            )
          }
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}