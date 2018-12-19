import * as React from "react";
import { Page, LoadMDFile } from "../Page";
import * as ReactMarkdown from "react-markdown";
import { languages, IGoods, IPrice, IxlsxData } from "../../types";
import { downloadsRoot, headers, addInfo, headersX } from "../../const";
import "./downloadfiles.css";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

export class DownLoadFiles extends Page {

  componentDidMount() {
    super.componentDidMount();
    const { onLoadDownLoadMD } = this.props;
    languages.forEach((l, idx) => {
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
    const { sl, downLoadMD, csvData, goods, price, xlsxData } = this.props;

    return (
      <div className="downloadfiles">
        {downLoadMD &&
          downLoadMD[sl.toUpperCase()] && (
            <ReactMarkdown source={downLoadMD[sl.toUpperCase()].name} />
          )}
      </div>
    );
  }
}


