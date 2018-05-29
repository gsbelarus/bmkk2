import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot } from '../const';

export interface GoodsProps extends PageProps {
  groupID?: string;
}; 

export class Goods extends Page<GoodsProps> {
  constructor(props: GoodsProps, selectedGroup: string) {
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
    const { goods, selectedLang, groupID  } = this.props; 
    

    if (goods) {
      return (
        <div className="GroupsContainer">
          <div>{groupID}</div>
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
          <div>{groupID}</div>
          Loading...
        </div>
      );
    }
  }
}