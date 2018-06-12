import * as React from 'react';
import { Page } from '../Page';
import { IGoods } from '../../types';
import { goodsFile, priceCaption } from '../../const';

export class Price extends Page {

  componentDidMount() {
    const { onLoadGoods } = this.props;
    fetch(goodsFile)
    .then( res => {
      return res.text();
    })
    .then( res => JSON.parse(res) )
    .then( res => onLoadGoods(res as IGoods) )
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { groups, goods, selectedLang  } = this.props;
    console.log(this.props);

    if (goods) {

      return (
        <div className="PriceContainer">
          <h2>
            ПРАЙС-ЛИСТ <br/>
            в соответствии с прейскурантом цен на {goods.date}
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
