import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot, goodCaption, goodFileNoImage } from '../const';
import { WrapText } from './WrapText';
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
    .catch( err => console.log(JSON.stringify(err)) );
  }

  renderBody(): JSX.Element {
    const { groups, goods, selectedLang, match  } = this.props;
    console.log(this.props);
    
    if (goods) {
      const g = goods.goods.filter((t) => t.group === match.params.groupID );

      return (
        <div className="GoodsContainer">
          <div>
            {<Link to={`/price`}>
              Прейскурант
            </Link>}
          </div>
          {
            g.map( (g, idx) => {
              const fullImageName = !g.image ? `${goodsRoot}${goodFileNoImage}`
                : g.image.includes('//') ? g.image.replace('//', '/')
                : `${goodsRoot}${g.image}`;

              return (
                <div key={idx}  className="GoodItem">
                  <img src={fullImageName} />
                  <h5 className="GoodName">
                    {g.caption[selectedLang.toLowerCase()].name}
                  </h5>
                  <ul>
                    <li>
                      <strong>
                        {goodCaption.description.composition[selectedLang.toLowerCase()].name}
                      </strong>
                      <WrapText text={g.composition[selectedLang.toLowerCase()].name} />
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
                    <li>
                      <strong>
                        {goodCaption.description.costnde[selectedLang.toLowerCase()].name}
                      </strong>
                      {g.costnde} р.
                    </li> 
                    <li>
                      <strong>
                        {goodCaption.description.dcostfull[selectedLang.toLowerCase()].name}
                      </strong>
                      {g.dcostfull} р.
                    </li>                                          
                  </ul>
                </div>
              )
            })
          }
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