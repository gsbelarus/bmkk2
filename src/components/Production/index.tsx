import * as React from 'react';
import { Page } from '../Page';
import { goodGroupsRoot, groupFileNoImage } from '../../const';
import { Link } from 'react-router-dom';
import './production.css';

export class Production extends Page {
  renderBody(): JSX.Element {
    const { groups, sl } = this.props;

    if (groups) {
      return (
        <div>
          <div className="GroupsContainer">
            {
              groups.groups.map( (g, idx) => (  
                <div className="Card"> 
                  <Link key={idx} to={`/production/` + g.ruid}>
                  </Link>  
                  <img src={!g.image ? `${goodGroupsRoot}${groupFileNoImage}` : `${goodGroupsRoot}${g.image}`} />                  
                  <div className="CardCaption">
                    <div className="CardText">
                      {Page.getLName(g.caption, sl)}
                    </div>
                  </div>
                </div>
              ))
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