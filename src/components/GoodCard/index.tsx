import * as React from 'react';
import { Page, PageProps } from '../Page';
import { goodsRoot, goodCaption, goodFileNoImage2, addInfo } from '../../const';
import './goodcard.css';
import { Link } from 'react-router-dom';

export class GoodCard extends Page {

  getPageStyle() {
    return `${super.getPageStyle()} GoodCard`;
  }

  renderNavPath(props: PageProps): JSX.Element[] {
    const result = super.renderNavPath(props);
    const { goods, groups, sl, match } = this.props;

    if (goods && goods.goods && groups && groups.groups) {
      const mygood = goods.goods.find( t => t.ruid === match.params.goodID );
      if (mygood) {
        const mygroup = groups.groups.find( g => g.ruid === mygood.group );
        if (mygroup) {
          result.splice(-2, 2,
            <span key={mygroup.ruid}>
              <Link to={`${PUBLIC_ROOT}production/${mygroup.ruid}`}>
                {Page.getLName(mygroup.caption, sl)}
              </Link>
            </span>,
            <span key={mygood.ruid}>
              {mygood.caption ? Page.getLName(mygood.caption, sl) : mygood.fullname ? mygood.fullname : ''}
            </span>
          );
        }
      }
    }
    return result;
  }

  renderBody(): JSX.Element {
    const { goods, price, sl, match } = this.props;
    if (goods) {
      const g = goods.goods.find( t => t.ruid === match.params.goodID );
      const fullImageName = !g!.image2 ? `${goodsRoot}${goodFileNoImage2}`
      : g!.image2.includes('/') ? g!.image2
      : `${goodsRoot}${g!.image2}`;

      if (g) {
        const myprice = price.price.find( p => p.ruid === g.ruid);
        return (
          <div className="GoodsContainer">
            <div className="GoodCard">
              <img src={fullImageName} />
              <div className="GoodCardItem">
                {(myprice ? myprice.issale : '') && <div className="GoodCardNew">Скидка!</div>}
                {(myprice ? myprice.isnew && !myprice.issale : '') && <div className="GoodCardNew">Новинка!</div>}
                <h2>
                  {g.caption ? Page.getLName(g.caption, sl) : g.fullname ? g.fullname : ''}
                </h2>
                <ul>
                  <li>
                    {Page.getLName(g.grade, sl)}
                  </li>
                  <li>
                    <strong>
                      {goodCaption.description.ingredients[sl].name}
                    </strong>
                    {Page.getLName(g.ingredients, sl)}
                  </li>
                  <li>
                    <strong>
                      {goodCaption.description.casing[sl].name}
                    </strong>
                    {Page.getLName(g.casing, sl)}
                  </li>
                  <li>
                    <strong>
                      {goodCaption.description.beforuse[sl].name}
                    </strong>
                    {g.beforuse}
                  </li>
                  <li>
                    <strong>
                      {goodCaption.description.costnde[sl].name}
                    </strong>
                    {myprice ? myprice.costnde : ''}
                  </li>
                  <li>
                    <strong>
                      {goodCaption.description.dcostfull[sl].name}
                    </strong>
                    {myprice ? myprice.dcostfull : ''}
                  </li>
                </ul>
                <div className="PriceGoods">
                  {addInfo.textPriceMore[sl].name} <Link to={`${PUBLIC_ROOT}price`}>{addInfo.textPriceLink[sl].name}!</Link>
                </div>
              </div>
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
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }    
  }
}