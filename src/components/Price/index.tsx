import * as React from 'react';
import { Page, PageProps } from '../Page';
import { priceCaption } from '../../const';
import './price.css';
import { Link } from 'react-router-dom';

export class Price extends Page {

  constructor(props: PageProps) {
    super(props);
    this.fullWidth = true;
    // this.logoImg = undefined;
  }

  renderBody(): JSX.Element {
    const { groups, goods, price, sl  } = this.props;

    if (goods && price) {
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
                              <td>{idx+1}</td>
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
                              <td>{Page.getLName(g.ingredientsprice, sl)}</td>
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
          Loading...
        </div>
      );
    }
  }
}
