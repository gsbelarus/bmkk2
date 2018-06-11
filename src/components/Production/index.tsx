import * as React from 'react';
import { Page } from '../Page';
import { IGoodGroups } from '../../types';
import { goodGroupsFile, goodGroupsRoot, groupFileNoImage } from '../../const';
import { Link } from 'react-router-dom';
import './production.css';

export class Production extends Page {
  componentDidMount() {
    const { onLoadGroups } = this.props;
    fetch(goodGroupsFile)
    .then( res => res.text() )
    .then( res => JSON.parse(res) )
    .then( res => onLoadGroups(res as IGoodGroups) )
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { groups, selectedLang } = this.props;

    if (groups) {
      return (
        <div className="GroupsContainer">
          {
            groups.groups.map( (g, idx) => (
              <Link key={idx} to={`/production/groups/` + g.ruid}>
                <div className="GoodGroup">
                  <img src={!g.image ? `${goodGroupsRoot}${groupFileNoImage}` : `${goodGroupsRoot}${g.image}`} />
                  <div className="GoodGroupCaption">
                    <div className="GoodGroupText">
                      {g.caption[selectedLang.toLowerCase()].name}
                    </div>
                  </div>
                </div>
              </Link>
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