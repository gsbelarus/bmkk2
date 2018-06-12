import * as React from 'react';
import { Page } from '../Page';
import { IOutlets } from '../../types';
import { outletsFile, outletsCaption } from '../../const';
import './outlets.css';

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
        <div className="OutletsContainer">
          {
            outlets.outlets.map( (outlet, idx) => (
              <div key={idx} className="OutletBox">
                {outlet.caption[selectedLang.toLowerCase()].name}
                <div>
                  {outlet.address[selectedLang.toLowerCase()].name}
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
