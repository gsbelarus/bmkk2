import * as React from "react";
import { Page, LoadMDFile } from "../Page";
import * as ReactMarkdown from "react-markdown";
import { languages } from "../../types";
import { downloadsRoot, headers, addInfo } from "../../const";
import "./downloadfiles.css";
import { CSVLink } from "react-csv";

export class DownLoadFiles extends Page {
  componentDidMount() {
    super.componentDidMount();
    const { onLoadDownLoadMD } = this.props;
    languages.map((l, idx) => {
      LoadMDFile(
        `${downloadsRoot}download.` + l.toLowerCase() + `.md`,
        l,
        onLoadDownLoadMD
      );
    });
  }

  getPageStyle() {
    return `${super.getPageStyle()} DownLoadFiles`;
  }

  renderBody(): JSX.Element {
    const { sl, downLoadMD, csvData } = this.props;
    return (
      <div className="downloadfiles">
        {csvData && (
          <div>
            <CSVLink
              filename={"PriceBmkk.csv"}
              headers={headers}
              data={csvData}
              target="_self"
            >
              {addInfo.textPriceXlsTop[sl].name}{" "}
            </CSVLink>
          </div>
        )}
        {downLoadMD &&
          downLoadMD[sl.toUpperCase()] && (
            <ReactMarkdown source={downLoadMD[sl.toUpperCase()].name} />
          )}
      </div>
    );
  }
}
