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
          <h2>
            ПРАЙС-ЛИСТ в соответствии с прейскурантом цен на {goods.date}
          </h2>
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
                              <td>{g.costnde}</td>
                              <td>{g.dcostfull}</td>
                              <td>{g.rate}</td>
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
