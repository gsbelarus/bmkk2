import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot, goodCaption } from '../const';
import { WrapText } from './WrapText';

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
      return (
        <div className="GroupsContainer">
          {
            goods.goods.map( (g, idx) => (
              <div key={idx}  className="GoodItem">
                <img src={`${goodsRoot}${g.image}`} />
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
                    {g.costnde}
                  </li>                  
                </ul>
              </div>
            ))
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