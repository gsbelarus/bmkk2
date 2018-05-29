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
        <div className="GoodCard">


          <table>
            <tbody>
              <tr>
                <th>Наименование продукта</th>
                <td></td>
              </tr>

            
            <tr>
                <th>Описание</th>
                <td>Колбаса вареная мясная </td>
            </tr>

            <tr>
                <th>Производитель</th>
                <td>ОАО «Александрийское»</td>
            </tr>

            
            <tr>
                <th>Сорт</th>
                <td>Высший сорт</td>
            </tr>

            
            <tr>
                <th>Оболочка, упаковка</th>
                <td>Оболочка Бига-3</td>
            </tr>

            
            <tr>
                <th>Стандарт, ГОСТ, ТУ</th>
                <td>СТБ 126</td>
            </tr>

            
            <tr>
                <th>Стандарт, ГОСТ, ТУ</th>
                <td>РЦ BY 500011238.2915-2012</td>
            </tr>

            
            <tr>
                <th>Срок реализации (годности), суток</th>
                <td>30 суток</td>
            </tr>

            <tr>
                <th>Условия хранения:</th>
                <td><p>В целой упаковке при относительной влажности воздуха (75±5)% и температуре (4±2)°С</p></td>
            </tr>
        </tbody></table>          


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