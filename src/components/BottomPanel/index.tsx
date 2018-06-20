import * as React from 'react';
import { Language } from '../../types';
import { mainMenu, rightsInfo } from '../../const';
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
<<<<<<< .mine
              <Link key={idx} to={`/${mi.path}`} className={mi.path !== '' && location.pathname.endsWith(mi.path) ? "Selected" : ""}>
=======
              <Link key={idx} to={`${mi.path}`} className={mi.path !== '' && location.pathname.endsWith(`${mi.path}`) ? "Selected" : ""}>
>>>>>>> .theirs
                <span>
                  {mi.caption[sl].name}
                </span>
              </Link>
            ))
          }
        </nav>
        <div className="foot_rights">
          {rightsInfo.text[sl].name}
        </div>   
      </div>
    );
  }
}