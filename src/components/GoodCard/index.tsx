import * as React from 'react';
import { Page, PageProps } from '../Page';
import { IGoods } from '../../types';
import { goodsFile, goodsRoot2, goodCaption, goodFileNoImage } from '../../const';

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
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { goods, selectedLang, match } = this.props;
    const g = goods.goods.find( t => t.ruid === match.params.goodID );
    const fullImageName = !g!.image2 ? `${goodsRoot2}${goodFileNoImage}`
    : g!.image2.includes('/') ? g!.image2
    : `${goodsRoot2}${g!.image2}`;

    if (g) {
      return (
        <div className="GoodCard">
          <img src={fullImageName} />
          <div className="GoodCardItem">
            <h2 className="GoodName">
              {g.caption[selectedLang.toLowerCase()].name}
            </h2>
            <ul>
              <li>
                {g.grade[selectedLang.toLowerCase()].name}
              </li>
              <li>
                <strong>
                  {goodCaption.description.ingredients[selectedLang.toLowerCase()].name}
                </strong>
                {g.ingredients[selectedLang.toLowerCase()].name}
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