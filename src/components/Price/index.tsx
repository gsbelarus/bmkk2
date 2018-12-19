import * as React from 'react';
import { Page, PageProps, LoadMDFile } from '../Page';
import { priceCaption, forcustomerRoot, addInfo } from '../../const';
import './price.css';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';
import { languages } from '../../types';
export class Price extends Page {

  constructor(props: PageProps) {
    super(props);
    this.fullWidth = true;
  }

  componentDidMount() {
    super.componentDidMount();
    const {onLoadPriceTitleMD} = this.props;
    languages.forEach((l, idx) =>
      {
        LoadMDFile(`${forcustomerRoot}pricetitle.` + l.toLowerCase() + `.md`, l, onLoadPriceTitleMD);
      }
    )
  }

  renderBody(): JSX.Element {
    const { groups, goods, price, sl, priceTitleMD  } = this.props;

    if (goods && price && groups) {
      return (
        <div className="PriceContainer">
          <div className="PriceTop">
            <div className="PriceTitle">
              <p>{addInfo.texName[sl].name}</p>
              <strong>{addInfo.textPriceTop[sl].name} </strong>{addInfo.textPriceName[sl].name} {goods.date}
            </div>
            { priceTitleMD && priceTitleMD[sl.toUpperCase()] &&
              <div className="PriceInfo">
                 <ReactMarkdown source={priceTitleMD[sl.toUpperCase()].name} />
              </div>
            }
          </div>

          {
            <table className="GrayTable">
              <thead>
                <tr>
                  {
                    priceCaption.map( (d, pr_idx) => (
                        <th key={pr_idx}>
                          {d.caption[sl].name}
                        </th>
                      )
                    )
                  }
                </tr>
              </thead>
              {groups.groups.map( (gr, gr_idx) =>
                (
                  <tbody key={gr_idx}>
                    <tr>
                      <td colSpan={8} className="tGrName">
                        {Page.getLName(gr.caption, sl)}
                      </td>
                    </tr>
                    {
                        goods.goods.filter( g => g.group === gr.ruid ).map( (g, idx) => {
                          const myprice = price.price.find( p => p.ruid === g.ruid );
                          return (
                            <tr key={idx}>
                              <td className="tdCentre">{idx+1}</td>
                              <td>
                                <Link to={`${PUBLIC_ROOT}production/${g.group}/${g.ruid}`}>{g.fullname}</Link>
                              </td>
                              <td>{Page.getLName(g.valuename, sl)}</td>
                              <td className="tdRight">{myprice ? myprice.costnde : ''}</td>
                              <td className="tdRight">{myprice ? myprice.dcostfull : ''}</td>
                              <td className="tdRight">{g.rate}</td>
                              <td>{g.beforuse}</td>
                              <td>{g.term}</td>
                              <td>{myprice ? myprice.barcode : ''}</td>
                              <td>{Page.getLName(g.ingredients, sl)}</td>
                            </tr>
                          )}
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
          {addInfo.textLoading[sl].name}
        </div>
      );
    }
  }
}
