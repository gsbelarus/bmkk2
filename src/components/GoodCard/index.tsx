import * as React from 'react';
import { Page, PageProps } from '../Page';
import { goodsRoot, goodCaption, goodFileNoImage2 } from '../../const';
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
              <Link to={`/production/${mygroup.ruid}`}>
                {mygroup.caption[sl].name}
              </Link>
            </span>,
            <span key={mygood.ruid}>
              {mygood.caption[sl].name}
            </span>
          );
        }
      }
    }
    return result;
  }

  renderBody(): JSX.Element {
    const { goods, sl, match } = this.props;
    const g = goods.goods.find( t => t.ruid === match.params.goodID );
    const fullImageName = !g!.image2 ? `${goodsRoot}${goodFileNoImage2}`
    : g!.image2.includes('/') ? g!.image2
    : `${goodsRoot}${g!.image2}`;

    if (g) {
      return (
        <div className="GoodCard">
          <img src={fullImageName} />
          <div className="GoodCardItem">
            <div className={g.isnew==='1' ? "GoodCardNew" : "NoneDisplay"}>
              Новинка!
            </div>
            <h2>
              {g.caption[sl].name ? g.caption[sl].name : g.fullname}
            </h2>
            <ul>
              <li>
                {g.grade[sl].name}
              </li>
              <li>
                <strong>
                  {goodCaption.description.ingredients[sl].name}
                </strong>
                {g.ingredients[sl].name ? g.ingredients[sl].name : g.ingredients['ru'].name}
              </li>
              <li>
                <strong>
                  {goodCaption.description.casing[sl].name}
                </strong>
                {g.casing[sl].name ? g.casing[sl].name : g.casing['ru'].name}
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
                {g.costnde}
              </li>
              <li>
                <strong>
                  {goodCaption.description.dcostfull[sl].name}
                </strong>
                {g.dcostfull}
              </li>
              <br/>
              <li>
                <strong>
                  Пищевая ценность
                </strong>
              </li>
              <li>
                <strong>
                  {goodCaption.description.proteins[sl].name}
                </strong>
                {g.proteins}
              </li>
              <li>
                <strong>
                  {goodCaption.description.fats[sl].name}
                </strong>
                {g.fats}
              </li>
              <li>
                <strong>
                  {goodCaption.description.carbons[sl].name}
                </strong>
                {g.carbons}
              </li>
              <li>
                <strong>
                  {goodCaption.description.energy[sl].name}
                </strong>
                {g.enegry}
              </li>
            </ul>
            <div className="PriceGoods">
              С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" <br/>
              можно ознакомиться <Link to={`/price`}>здесь!</Link>
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
  }
}