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
          <div className="News FlexContainer">
            {news.news.map((n, idx) => {
              const fullImageName = !n.image
                ? ``
                : n.image.includes("/")
                  ? n.image
                  : `${newsRoot}${n.image}`;
              const newsTitle = `## ${Page.getLName(n.title, sl)}`;
              return (
                <div className="Card" key={idx}>
                  <div className="bg" />
                  <Link to={`${PUBLIC_ROOT}news/` + n.ruid} />
                  {/* <Link to={`${PUBLIC_ROOT}production/1015533282_1029231264/570070213_1585746679`} /> */}
                  <img src={fullImageName} />
                  <div className="CardCaption">
                    <div className="CardText">
                      <ReactMarkdown source={newsTitle} />
                    </div>
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
