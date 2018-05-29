import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot, goodCaption } from '../const';

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
    const { goods, selectedLang, match  } = this.props;

    console.log(this.props);

    if (goods) {
      return (
        <div className="GroupsContainer">
          {
            goods.goods.map( (g, idx) => (
              <div key={idx}  className="GoodItem">
                <img src={`${goodsRoot}${g.image}`} />                
                <div className="GoodName">
                  {g.caption[selectedLang.toLowerCase()].name}
                </div>
                <div className="GoodCaption">{goodCaption.description.consist[selectedLang.toLowerCase()].name}</div>
                <div className="GoodDescr">                
                  {g.consist[selectedLang.toLowerCase()].name}
                </div>
                <div className="GoodCaption">{goodCaption.description.casing[selectedLang.toLowerCase()].name}</div>
                <div className="GoodDescr">
                  {g.casing[selectedLang.toLowerCase()].name}
                </div>
                <div className="GoodCaption">{goodCaption.description.beforuse[selectedLang.toLowerCase()].name}</div>
                <div className="GoodDescr">
                {g.beforuse}
                </div>
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