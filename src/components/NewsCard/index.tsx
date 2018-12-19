import * as React from "react";
import { Page } from "../Page";
import { newsRoot } from "../../const";
import * as ReactMarkdown from "react-markdown";

export class NewsCard extends Page {
  getPageStyle() {
    return `${super.getPageStyle()} NewsCard`;
  }

  renderBody(): JSX.Element {
    const { news, sl, match } = this.props;
    if (news) {
      const g = news.news.find(t => t.ruid === match.params.newsID);
      if (g) {
        const newsText = `## ${Page.getLName(g.title, sl)}\n\n${Page.getLName(
          g.body,
          sl
        ).trimRight().split('![](').join(`![](${newsRoot}`)}`;
        return (
          <div className="NewsContainer">
            <ReactMarkdown source={newsText} />
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
