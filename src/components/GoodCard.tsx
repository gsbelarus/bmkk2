import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot } from '../const';

export class GoodCard extends Page {
  constructor(props: PageProps) {
    super(props);
  }

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
    const { goods, selectedLang } = this.props;

    if (goods) {
      return (
        <div className="GroupsContainer">
          {
            goods.goods.map( (g, idx) => (
              <div className="GoodGroup">
                <img src={`${goodsRoot}${g.image}`} />
                <div className="GoodGroupName">
                  {g.caption[selectedLang.toLowerCase()].name}
                </div>
              </div>
            ))
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