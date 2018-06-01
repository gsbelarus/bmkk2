import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadNews } from '../actions';
import { INews } from '../types';
import { newsFile, newsRoot } from '../const';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';


export class News extends Page {
  constructor(props: PageProps) {
    super(props);
  }

  componentDidMount() {
    const { onLoadNews } = this.props;
    fetch(newsFile)
    .then( res => {
      return res.text();
    })
    .then( res => JSON.parse(res) )
    .then( res => onLoadNews(res as INews) )
    .catch( err => console.log(JSON.stringify(err)) );
  }

  renderBody(): JSX.Element {
    const { news, selectedLang } = this.props;

    if (news) {
      return (
        <div className="GoodsContainer">          
          {
            news.news.map( (n, idx) => {
              const fullImageName = !n.image ? ``
              : n.image.includes('//') ? n.image.replace('//', '/')
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