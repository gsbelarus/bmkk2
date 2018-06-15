import * as React from 'react';
import { Page } from '../Page';
import { IOutlets } from '../../types';
import { outletsFile, outletsCaption } from '../../const';
import './outlets.css';

const outletImg = require('../../../public/image/outlet.png');

export class Outlets extends Page {

  componentDidMount() {
    const { onLoadOutlets } = this.props;
    fetch(outletsFile)
    .then( res => res.text())
    .then( res => JSON.parse(res) )
    .then( res => onLoadOutlets(res as IOutlets) )
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { outlets, selectedLang } = this.props;

    if (outlets) {
      return (
        <div>
          <p>Комбинат имеет сеть фирменной торговли, где можно приобрести товар в розницу:</p>
          <div className="OutletsContainer">
            {
              outlets.outlets.map( (outlet, idx) => {
                const re = /(?:г|д)\.(?:\s){0,1}([А-Яа-я]+)/;
                const match = re.exec(outlet.address[selectedLang.toLowerCase()].name);
                return (
                  <div key={idx} className="OutletBox">
                    <div className="City">
                      {match && match[1]}
                    </div>
                    <div className="OutletImg">
                      <img src={outletImg} />
                    </div>
                    <div className="OutletData">
                      <div>
                        <strong>{outlet.caption[selectedLang.toLowerCase()].name}</strong>
                      </div>
                      <div>
                        <strong>Адрес: </strong>{outlet.address[selectedLang.toLowerCase()].name}
                      </div>
                      <div>
                        <strong>Телефон: </strong>{outlet.phone}
                      </div>
                      <div>
                        <strong>Email: </strong>{outlet.email}
                      </div>
                      <div>
                        <strong>В рабочие дни: </strong>{outlet.timewd}
                      </div>
                      <div>
                        <strong>В субботу: </strong>{outlet.timesat}
                      </div>
                      <div>
                        <strong>В воскресенье: </strong>{outlet.timesun}
                      </div>
                      <div>
                        <strong>Координаты: </strong>{outlet.lat}, {outlet.lon}
                      </div>
                    </div>
                  </div>
                );
              })
            }
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
