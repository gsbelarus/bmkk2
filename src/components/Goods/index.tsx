import * as React from 'react';
import { Page, PageProps } from '../Page';
import { goodsRoot, goodCaption, goodFileNoImage } from '../../const';
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

    if (goods) {

      const filtered = goods.goods.filter( t => t.group === match.params.groupID );

      return (
        <div>
          <div className="Goods FlexContainer">
            {
              filtered.map( (g, idx) => {
                const fullImageName = !g.image ? `${goodsRoot}${goodFileNoImage}`
                  : g.image.includes('/') ? g.image
                  : `${goodsRoot}${g.image}`;
                const myprice = price.price.find( p => p.ruid === g.ruid );
                return (
                  <div className="Card CardGood"> 
                    <div className="bg"></div>
                    <Link key={idx} className="GoodMore" to={`/production/${g.group}/${g.ruid}`}></Link>
                    {/* <div className="Badge GoodNew">Скидка!</div> */}
                    {(myprice ? myprice.issale : '') && <div className="Badge GoodNew">Скидка!</div>} 
                    {(myprice ? myprice.isnew && !myprice.issale : '') && <div className="Badge GoodNew">Новинка!</div>}
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
          Loading...
        </div>
      );
    }
  }
}