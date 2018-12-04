import * as React from "react";
import { Page, LoadMDFile } from "../Page";
import * as ReactMarkdown from "react-markdown";
import { languages, IGoods, IPrice, IxlsxData } from "../../types";
import { downloadsRoot, headers, addInfo, headersX } from "../../const";
import "./downloadfiles.css";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

export class DownLoadFiles extends Page {
  onClickSaveXml = (xlsxData: IxlsxData) => {
    let worksheet = XLSX.utils.aoa_to_sheet(xlsxData);

    let wb = XLSX.utils.book_new();
    var wscols = [
      { wch: 5 },
      { wch: 110 },
      { wch: 7 },
      { wch: 13 },
      { wch: 13 },
      { wch: 13 },
      { wch: 13 },
      { wch: 15 },
      { wch: 18 },
      { wch: 100 }
    ];

    worksheet["!cols"] = wscols;

    XLSX.utils.book_append_sheet(wb, worksheet, "SheetJS");
    XLSX.writeFile(wb, "PriceBmkk.xlsx");
  };

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
    const { sl, downLoadMD, csvData, goods, price, xlsxData } = this.props;

    return (
      <div className="downloadfiles">
        {/* <span>
          Полный прайс-лист в формате CSV (Microsoft Excel) на продукцию
          предприятия с указанием наименования, состава, срока хранения,
          штрих-кода, цен ФСО и ФСН.
        </span>
        {xlsxData && (
          <div className="PriceCsv">
            <a onClick={() => this.onClickSaveXml(xlsxData)}>
              {addInfo.textPriceXlsTop[sl].name}
            </a>
          </div>
        )} */}
        {downLoadMD &&
          downLoadMD[sl.toUpperCase()] && (
            <ReactMarkdown source={downLoadMD[sl.toUpperCase()].name} />
          )}
      </div>
    );
  }
}


