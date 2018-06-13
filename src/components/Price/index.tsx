import * as React from 'react';
import { Page, PageProps } from '../Page';
import { priceCaption } from '../../const';
import './price.css';

export class Price extends Page {

  constructor(props: PageProps) {
    super(props);
    this.fullWidth = true;
  }

  renderBody(): JSX.Element {
    const { groups, goods, selectedLang  } = this.props;

    if (goods) {
      return (
        <div className="PriceContainer">
          <div className="PriceTop">
            <div className="PriceTitle">
              <p>ОАО "Березовский мясоконсервный комбинат"</p>
              <strong>ПРАЙС-ЛИСТ</strong> в соответствии с прейскурантом цен на {goods.date}
            </div>
            <div className="PriceInfo">
              Республика Беларусь ГО "Концерн "Брестмясомолпром"<br/><br/>
              Зам.дир по производству и маркетингу +375-1643-25336 <br/>
              Начальник отдела торговли и маркетинга +375-1643-41029<br/>
              Отдел маркетинга тел.+375-1643-41641(факс) 6-74-65, 6-74-66<br/>
              Торговый отдел факс +375-1643-41054, -41802, -41669, -41033, -23280, -41276, -41277<br/>
              Производственный цех г.Барановичи тел. +375-163-417752, -417769(тел./факс) -423758<br/>
              Нач. торг. отдела г.Барановичи тел. 8-033-6400816<br/>
              e-mail: bermeat@mail.ru
            </div>
          </div>

          {
            <table className="GrayTable">
              <thead>
                <tr>
                  {
                    priceCaption.map( (d, pr_idx) => (
                        <th key={pr_idx}>
                          {d.caption[selectedLang.toLowerCase()].name}
                        </th>
                      )
                    )
                  }
                </tr>
              </thead>
              {groups.groups.map( (gr, gr_idx) =>
                (
                  <tbody>
                    <tr>
                      <td colSpan={8} className="tGrName">
                        {gr.caption[selectedLang.toLowerCase()].name}
                      </td>
                    </tr>
                    {
                        goods.goods.filter( g => g.group === gr.ruid ).map( (g, idx) => (
                            <tr key={idx}>
                              <td>{idx+1}</td>
                              <td>{g.caption[selectedLang.toLowerCase()].name}</td>
                              <td>{g.valuename[selectedLang.toLowerCase()].name}</td>
                              <td className="tdRight">{g.costnde}</td>
                              <td className="tdRight">{g.dcostfull}</td>
                              <td className="tdRight">{g.rate}</td>
                              <td>{g.beforuse}</td>
                              <td>{g.term}</td>
                              <td>{g.barcode}</td>
                              <td>{g.ingredients[selectedLang.toLowerCase()].name}</td>
                            </tr>
                          )
                        )
                      }
                  </tbody>
                )
              )}
            </table>
          }
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}
