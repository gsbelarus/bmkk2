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
    const { goods, sl, match  } = this.props;

    if (goods) {

      const filtered = goods.goods.filter( t => t.group === match.params.groupID );

      return (
        <div>
          <div className="GoodsContainer">
            {
              filtered.map( (g, idx) => {
                const fullImageName = !g.image ? `${goodsRoot}${goodFileNoImage}`
                  : g.image.includes('/') ? g.image
                  : `${goodsRoot}${g.image}`;

                return (
                  <Link key={idx} className="GoodMore" to={`/production/${g.group}/${g.ruid}`}>
                    <div className="GoodItem">
                      {g.isnew && <div className="GoodNew">Новинка!</div>}
                      {g.grade && <div className="GoodGrade">{Page.getLName(g.grade, sl)}</div>} 
                      <img src={fullImageName} />
                      <div className="GoodData">                     
                        <div className="GoodName">
                          {g.caption ? Page.getLName(g.caption, sl) : g.fullname ? g.fullname : ''}
                        </div>                      
                      </div>
                    </div>
                  </Link>
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