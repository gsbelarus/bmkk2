import * as React from 'react';
import { Page } from '../Page';
import { goodsRoot, goodCaption, goodFileNoImage2 } from '../../const';
import './goodcard.css';
import { Link } from 'react-router-dom';

export class GoodCard extends Page {

  renderBody(): JSX.Element {
    const { goods, selectedLang, match } = this.props;
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
                {g.costnde}
              </li>
              <li>
                <strong>
                  {goodCaption.description.dcostfull[selectedLang.toLowerCase()].name}
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
                  {goodCaption.description.proteins[selectedLang.toLowerCase()].name}
                </strong>
                {g.proteins}
              </li>
              <li>
                <strong>
                  {goodCaption.description.fats[selectedLang.toLowerCase()].name}
                </strong>
                {g.fats}
              </li>
              <li>
                <strong>
                  {goodCaption.description.carbons[selectedLang.toLowerCase()].name}
                </strong>
                {g.carbons}
              </li>  
              <li>
                <strong>
                  {goodCaption.description.energy[selectedLang.toLowerCase()].name}
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