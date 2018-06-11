import * as React from 'react';
import { Page, PageProps } from '../Page';
import { IGoods } from '../../types';
import { goodsFile, goodsRoot, goodCaption, goodFileNoImage, moreCaption } from '../../const';
import { WrapText } from '../WrapText/index';
import { Link } from 'react-router-dom';

export class Goods extends Page {

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
    const { groups, goods, selectedLang, match  } = this.props;
    console.log(this.props);

    if (goods) {
      const filtered = goods.goods.filter((t) => t.group === match.params.groupID );

      return (
        <div>
          <div className="PriceBtn">
            {<Link  to={`/price`}>
              Прейскурант
            </Link>}
          </div>
          <div className="GoodsContainer">
            {
              filtered.map( (g, idx) => {
                const fullImageName = !g.image ? `${goodsRoot}${goodFileNoImage}`
                  : g.image.includes('/') ? g.image
                  : `${goodsRoot}${g.image}`;

                return (
                  <div key={idx}  className="GoodItem">
                    <img src={fullImageName} />
                    <h5 className="GoodName">
                      {g.caption[selectedLang.toLowerCase()].name}
                    </h5>
                    <ul>
                      <li>
                        {g.grade[selectedLang.toLowerCase()].name ? g.grade[selectedLang.toLowerCase()].name : '-' }
                      </li>
                      <li>
                        <strong>
                          {goodCaption.description.ingredients[selectedLang.toLowerCase()].name}
                        </strong>
                        <WrapText text={g.ingredients[selectedLang.toLowerCase()].name} />
                      </li>
                      <li>
                        <strong>
                          {goodCaption.description.casing[selectedLang.toLowerCase()].name}
                        </strong>
                        {g.casing[selectedLang.toLowerCase()].name}
                      </li>
                      <li>
                        <strong>
                          {goodCaption.description.beforuse[selectedLang.toLowerCase()].name}
                        </strong>
                        {g.beforuse}
                      </li>
                      <Link className="GoodMore" to={`/production/groups/` + g.group + '/good/' + g.ruid}>
                        {moreCaption.caption[selectedLang.toLowerCase()].name}
                      </Link>
                    </ul>
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
          <div>{match.params.groupID}</div>
          Loading...
        </div>
      );
    }
  }
}