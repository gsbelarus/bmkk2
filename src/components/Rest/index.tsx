import * as React from "react";
import { Page, LoadMDFile, PageProps } from "../Page";
import * as ReactMarkdown from "react-markdown";
import "./rest.css";
import { languages } from "../../types";
import { aboutRoot } from "../../const";
import { MultipleItems } from "../Slider";
import { Gallery } from "../Gallery";


export class Rest extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { onLoadRestMD } = this.props;
    languages.forEach((l, idx) => {
      LoadMDFile(
        `${aboutRoot}rest.` + l.toLowerCase() + `.md`,
        l,
        onLoadRestMD
      );
    });
  }

  renderBody(): JSX.Element {
    const { sl, restMD } = this.props;
    return (
      <div>
        {restMD &&
          restMD[sl.toUpperCase()] && (
            <div id="rest">
              <ReactMarkdown source={restMD[sl.toUpperCase()].name} />
              <Gallery />
            </div>
          )}
      </div>
    );
  }
}
