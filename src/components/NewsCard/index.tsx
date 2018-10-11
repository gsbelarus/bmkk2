import * as React from "react";
import { Page, PageProps } from "../Page";
import { newsRoot } from "../../const";
// import './goodcard.css';
import * as ReactMarkdown from "react-markdown";

export class NewsCard extends Page {
  getPageStyle() {
    return `${super.getPageStyle()} NewsCard`;
  }

  // renderNavPath(props: PageProps): JSX.Element[] {
  //   const result = super.renderNavPath(props);
  //   const { news, match, sl } = props;
  //   if (news && news.news) {
  //     const mygroup = news.news.find(g => g.ruid === match.params.groupID);
      
  //     if (mygroup) {
  //       result.splice(
  //         -1,
  //         1,
  //         <span key={mygroup.ruid}>{mygroup.title ? Page.getLName(mygroup.title, sl) : ''}</span>
  //       );
  //     }
  //   }
  //   return result;
  // }

  renderBody(): JSX.Element {
    const { news, sl, match } = this.props;
    if (news) {
      const g = news.news.find(t => t.ruid === match.params.newsID);
      if (g) {
        const fullImageName = !g.image
          ? ``
          : g.image.includes("/")
            ? g.image
            : `${newsRoot}${g.image}`;
        const newsText = `## ${Page.getLName(g.title, sl)}\n\n${Page.getLName(g.body, sl).trimRight()}`;
       
        return (
          <div className="NewsContainer">
            {/* <div className="GoodCard"> */}
              {/* <div className=""> */}
                <ReactMarkdown source={newsText} />
                {fullImageName && <img src={fullImageName} />}
                <div className="NewsDate">{g.date}</div>
              {/* </div> */}
            </div>
          // </div>
        );
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}
