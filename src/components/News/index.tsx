import * as React from "react";
import { Page } from "../Page";
import { INews } from "../../types";
import { newsFile, newsRoot } from "../../const";
import * as ReactMarkdown from "react-markdown";
import "./news.css";
import { Link } from "react-router-dom";

export class News extends Page {
  componentDidMount() {
    super.componentDidMount();
    const { onLoadNews } = this.props;
    fetch(newsFile)
      .then(res => {
        return res.text();
      })
      .then(res => JSON.parse(res))
      .then(res => onLoadNews(res as INews))
      .catch(err => console.log(err));
  }

  renderBody(): JSX.Element {
    const { news, sl } = this.props;

    if (news) {
      return (
        <div className="">
          <div className="News">
            {news.news.map((n, idx) => {
              const newsTitle = `## ${Page.getLName(n.title, sl)}`;
              const newsText = `${Page.getLName(n.body, sl).substring(0, 170).trimRight()}`;
              return (
                <div className="NewsItem" key={idx}>
                  <div className="bg"></div>
                  <Link to={`${PUBLIC_ROOT}news/` + n.ruid} />
                  <div className="NewsText">                    
                    <ReactMarkdown source={newsTitle} />
                    <ReactMarkdown source={newsText + '...'} />
                    <div className="NewsDate">{n.date}</div>
                  </div>                
   
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
// import * as React from 'react';
// import { Page } from '../Page';
// import { INews } from '../../types';
// import { newsFile, newsRoot } from '../../const';
// import * as ReactMarkdown from 'react-markdown';
// import './news.css';

// export class News extends Page {

//   componentDidMount() {
//     super.componentDidMount();
//     const { onLoadNews } = this.props;
//     fetch(newsFile)
//     .then( res => {
//       return res.text();
//     })
//     .then( res => JSON.parse(res) )
//     .then( res => onLoadNews(res as INews) )
//     .catch( err => console.log(err) );
//   }

//   renderBody(): JSX.Element {
//     const { news, sl } = this.props;

//     if (news) {
//       return (
//         <div className="News FlexContainer">
//           {
//             news.news.map( (n, idx) => {
//               const fullImageName = !n.image ? ``
//                 : n.image.includes('/') ? n.image
//                 : `${newsRoot}${n.image}`;
//               const newsText = `## ${Page.getLName(n.title, sl)}\n\n${Page.getLName(n.body, sl).trimRight()}`;
//               return (
//                 <div key={idx}  className="Card">
//                   <ReactMarkdown source={newsText} />
//                   {fullImageName && <img src={fullImageName}/>}
//                   <div className="NewsDate">
//                     {n.date}
//                   </div>
//                 </div>
//               )
//               }
//             )
//           }
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           Loading...
//         </div>
//       );
//     }
//   }
// }
