import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadOutlets } from '../actions';
import { IOutlets } from '../types';
import { outletsFile, outletsCaption } from '../const';
import { WrapText } from './WrapText';

export class Outlets extends Page {

  componentDidMount() {
    const { onLoadOutlets } = this.props;
    fetch(outletsFile)
    .then( res => res.text())
    .then( res => JSON.parse(res) )
    .then( res => onLoadOutlets(res as IOutlets) )
    .catch( err => console.log(JSON.stringify(err)) );
  }

  renderBody(): JSX.Element {
    const { outlets, selectedLang  } = this.props;
    console.log(this.props);
    
    if (outlets) {   

      return (
        <div className="OutletContainer">
          <h2>
            Фирменные магазины и точки реализации
          </h2>
          { 
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>
                    {outletsCaption.description.caption[selectedLang.toLowerCase()].name} 
                  </th>
                  <th rowSpan={2}>
                    {outletsCaption.description.phone[selectedLang.toLowerCase()].name} 
                  </th>
                  <th rowSpan={2}>
                    {outletsCaption.description.email[selectedLang.toLowerCase()].name} 
                  </th>         
                  <th colSpan={3}>
                     <p> 
                        {outletsCaption.description.time[selectedLang.toLowerCase()].name} 
                     </p>   
                  </th>                                                
                </tr>
                <tr>
                  <th>
                    {outletsCaption.description.timewd[selectedLang.toLowerCase()].name} 
                  </th>   
                  <th>
                    {outletsCaption.description.timesat[selectedLang.toLowerCase()].name} 
                  </th>    
                  <th>
                    {outletsCaption.description.timesun[selectedLang.toLowerCase()].name} 
                  </th>                                                       
                </tr>                
              </thead>
              <tbody>
                {
                    outlets.outlets.sort( (a, b) => a.caption[selectedLang.toLowerCase()].name < b.caption[selectedLang.toLowerCase()].name ? -1 : (a.caption === b.caption ? 0 : 1) ).map( (g, idx) => (
                        <tr key={idx}>
                            <td className="tdLeft">{g.caption[selectedLang.toLowerCase()].name + ', ' + g.address[selectedLang.toLowerCase()].name}</td>
                            <td>{(!g.phone ? '' : g.phone) + (g.fax ? '/' + g.fax : '')}</td>
                            <td>{g.email}</td> 
                            <td>{g.timewd}</td> 
                            <td>{g.timesat}</td> 
                            <td>{g.timesun}</td>                               
                        </tr>
                      )
                    )  
                  }                  
              </tbody>
 
            </table>
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
