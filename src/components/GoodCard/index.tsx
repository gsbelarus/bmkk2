import * as React from 'react';
import { Page, PageProps } from '../Page';
import { IGoods } from '../../types';
import { goodsFile, goodsRoot2, goodCaption, goodFileNoImage } from '../../const';
import './goodcard.css';
import { Link } from 'react-router-dom';

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
                {g.costnde} 
              </li>
              <li>
                <strong>
                  {goodCaption.description.dcostfull[selectedLang.toLowerCase()].name}
                </strong>
                {g.dcostfull}
              </li>                                 
            </ul>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>
                    {goodCaption.description.proteins[selectedLang.toLowerCase()].name}
                  </th>
                  <th rowSpan={2}>
                    {goodCaption.description.fats[selectedLang.toLowerCase()].name}
                  </th>                
                  <th rowSpan={2}>
                    {goodCaption.description.carbons[selectedLang.toLowerCase()].name}
                  </th>      
                  <th colSpan={5}>
                    {goodCaption.description.vitamins[selectedLang.toLowerCase()].name}
                  </th>
                  <th rowSpan={2}>
                    {goodCaption.description.energy[selectedLang.toLowerCase()].name}
                  </th>                  
                </tr>         
                <tr>
                  <th>
                    {goodCaption.description.B1[selectedLang.toLowerCase()].name}
                  </th>
                  <th>
                    {goodCaption.description.B2[selectedLang.toLowerCase()].name}
                  </th>                
                  <th>
                    {goodCaption.description.C[selectedLang.toLowerCase()].name}
                  </th>      
                  <th>
                    {goodCaption.description.Ca[selectedLang.toLowerCase()].name}
                  </th> 
                  <th>
                    {goodCaption.description.Fe[selectedLang.toLowerCase()].name}
                  </th>                                      
                </tr>                    
              </thead>
              <tbody>
                <tr key={g.ruid}>
                  <td>{g.proteins}</td>
                  <td>{g.fats}</td>                
                  <td>{g.carbons}</td>
                  <td>{g.B1}</td>
                  <td>
                    {g.B2}
                  </td>
                  <td>
                    {g.C}
                  </td>
                  <td>
                    {g.Ca}
                  </td>
                  <td>
                    {g.Fe}
                  </td>              
                  <td>
                    {g.enegry}
                  </td> 
                </tr>                                             
              </tbody>  
            </table>      
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