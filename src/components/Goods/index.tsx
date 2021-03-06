import * as React from 'react';
import { Page, PageProps } from '../Page';
import { goodsRoot, goodFileNoImage, goodCaption, noImageRoot, addInfo } from '../../const';
import { Link } from 'react-router-dom';
import './goods.css';

export class Goods extends Page {

  renderNavPath(props: PageProps): JSX.Element[] {
    const result = super.renderNavPath(props);
    const { groups, match, sl } = props;
    if (groups && groups.groups) {
      const mygroup = groups.groups.find( g => g.ruid === match.params.groupID );
      if (mygroup) {
        result.splice(-1, 1, <span key={mygroup.ruid}>{Page.getLName(mygroup.caption, sl)}</span>);
      }
    }
    return result;
  }

  renderBody(): JSX.Element {
    const { goods, price, sl, match  } = this.props;

    if (goods && price) {

      const filtered = goods.goods.filter( t => t.group === match.params.groupID && Page.getLName(t.caption, sl));

      return (
        <div>
          <div className="Goods FlexContainer">
            {
              filtered.map( (g, idx) => {
                const fullImageName = !g.image ? `${noImageRoot}${goodFileNoImage}`
                  : g.image.includes('/') ? g.image
                  : `${goodsRoot}${g.image}`;
                const myprice = price.price.find( p => p.ruid === g.ruid );
                return (
                  <div key={idx} className="Card CardGood">
                    <div className="bg"></div>
                    <Link className="GoodMore" to={`${PUBLIC_ROOT}production/${g.group}/${g.ruid}`}></Link>
                    {(myprice ? myprice.issale : '') && <div className="Badge GoodNew">{goodCaption.textDiscount[sl].name}</div>}
                    {(myprice ? myprice.isnew && !myprice.issale : '') && <div className="Badge GoodNew">{goodCaption.textNew[sl].name}</div>}
                    {g.grade && <div className="Badge BadgeTopRight">{Page.getLName(g.grade, sl)}</div>}
                    <img src={fullImageName} />
                    <div className="CardCaption">
                      <div className="CardText">
                        {g.caption ? Page.getLName(g.caption, sl) : g.fullname ? g.fullname : ''}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
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