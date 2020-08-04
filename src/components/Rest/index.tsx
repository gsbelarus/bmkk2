import * as React from "react";
import { Page, LoadMDFile } from "../Page";
import * as ReactMarkdown from "react-markdown";
import "./rest.css";
import { languages } from "../../types";
import { aboutRoot } from "../../const";
import { Gallery } from "../Gallery";


export class Rest extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { onLoadRestMD, onLoadRestMD2 } = this.props;
    languages.forEach((l, idx) => {
      LoadMDFile(
        `${aboutRoot}rest.` + l.toLowerCase() + `.md`,
        l,
        onLoadRestMD
      );
      LoadMDFile(
        `${aboutRoot}rest2.` + l.toLowerCase() + `.md`,
        l,
        onLoadRestMD2
      );
    });
  }

  renderBody(): JSX.Element {
    const { sl, restMD, restMD2 } = this.props;
    const slUp = sl.toUpperCase()
    return (
      <div>
        {restMD &&
          restMD[slUp] && (
            <div id="rest">
              <ReactMarkdown source={restMD[slUp].name} />
              <Gallery n='1'/>
            </div>
          )}
        {restMD2 &&
          restMD2[slUp] && (
            <div id="rest">
              <ReactMarkdown source={restMD2[slUp].name} />
              <Gallery n='2'/>
            </div>
          )}
      </div>
    );
  }
}
