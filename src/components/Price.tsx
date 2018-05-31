import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGoods } from '../actions';
import { IGoods } from '../types';
import { goodsFile, goodsRoot, goodCaption, goodFileNoImage } from '../const';
import { WrapText } from './WrapText';

export class Price extends Page {

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
        <div className="PriceContainer">
          <header>
            Прайс
          </header>
          <aside>aside1</aside>
          <section>123</section>
          <aside>aside2</aside>
          <footer>Footer</footer>
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