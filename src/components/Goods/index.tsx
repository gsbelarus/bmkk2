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
        result.splice(-1, 1, <span key={mygroup.ruid}>{mygroup.caption[sl].name}</span>);
      }
    }
    return result;
  }

  renderBody(): JSX.Element {
    const { goods, groups, sl, match  } = this.props;

    if (goods) {
      const shortenStr = (s: string, maxLength = 80): string => {
        if (s.length < maxLength) {
          return s;
        } else {
          return `${s.slice(0, maxLength - 3)}...`;
        }
      };

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
                      <div className={g.isnew==='1' ? "GoodNew" : "NoneDisplay"}>
                        Новинка!
                      </div>
                      <img src={fullImageName} />
                      <div className="GoodData">
                        <div className="GoodName">
                          {g.caption[sl].name ? g.caption[sl].name : g.fullname}
                        </div>
                        <div>
                          {g.grade[sl].name ? g.grade[sl].name : 'Без сорта' }
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.beforuse[sl].name} `}
                          </strong>
                          {g.beforuse}
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.casing[sl].name} `}
                          </strong>
                          {g.casing[sl].name ? g.casing[sl].name : g.casing['ru'].name}
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.ingredients[sl].name} `}
                          </strong>
                          {g.ingredients[sl].name ? shortenStr(g.ingredients[sl].name) : shortenStr(g.ingredients['ru'].name) }
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