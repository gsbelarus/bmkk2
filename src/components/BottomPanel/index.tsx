import * as React from 'react';
import { Language } from '../../types';
import { mainMenu } from '../../const';
import './bottompanel.css';
import { Link } from 'react-router-dom';
import { PageProps } from '../Page';

export class BottomPanel extends React.Component<PageProps, {}> {
  
  render() {
    const { sl, location } = this.props;
    const partnersImg = require('../../../public/image/partners.png');
    return (
      <div className="BottomPanel">
        <nav className="BottomMenu">
          {
            mainMenu
            .filter( f => f.path )
            .map( (mi, idx) => (
              <Link key={idx} to={`/${mi.path}`} className={mi.path !== '' && location.pathname.endsWith(`/${mi.path}`) ? "Selected" : ""}>
                <span>
                  {mi.caption[sl].name} 
                </span>
              </Link>
            ))
          }
        </nav>
      </div>
    );
  }
}