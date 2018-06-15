import * as React from 'react';
import { Page } from '../Page';
import { goodsRoot, goodCaption, goodFileNoImage } from '../../const';
import { Link } from 'react-router-dom';
import './goods.css';

/*

          <div className="PriceBtn">
            {<Link  to={`/price`}>
              Прейскурант
            </Link>}
          </div>

*/

export class Goods extends Page {

  renderBody(): JSX.Element {
    const { goods, groups, selectedLang, match  } = this.props;

    if (goods) {
      const shortenStr = (s: string, maxLength = 80): string => {
        if (s.length < maxLength) {
          return s;
        } else {
          return `${s.slice(0, maxLength - 3)}...`;
        }
      };

      const filtered = goods.goods.filter( t => t.group === match.params.groupID );
      const mygroup = groups.groups.find( t => t.ruid === match.params.groupID );    

      return (
        <div>
          <h1>{mygroup ? mygroup.caption[selectedLang.toLowerCase()].name : ''}</h1>
          <div className="GoodsContainer">
            {
              filtered.map( (g, idx) => {
                const fullImageName = !g.image ? `${goodsRoot}${goodFileNoImage}`
                  : g.image.includes('/') ? g.image
                  : `${goodsRoot}${g.image}`;

                return (
                  <Link key={idx} className="GoodMore" to={`/production/groups/` + g.group + '/good/' + g.ruid}>
                    <div className="GoodItem">
                      <img src={fullImageName} />
                      <div className="GoodData">
                        <div className="GoodName">
                          {g.caption[selectedLang.toLowerCase()].name}
                        </div>
                        <div>
                          {g.grade[selectedLang.toLowerCase()].name ? g.grade[selectedLang.toLowerCase()].name : 'Без сорта' }
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.beforuse[selectedLang.toLowerCase()].name} `}
                          </strong>
                          {g.beforuse}
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.casing[selectedLang.toLowerCase()].name} `}
                          </strong>
                          {g.casing[selectedLang.toLowerCase()].name}
                        </div>
                        <div>
                          <strong>
                            {`${goodCaption.description.ingredients[selectedLang.toLowerCase()].name} `}
                          </strong>
                          {shortenStr(g.ingredients[selectedLang.toLowerCase()].name)}
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