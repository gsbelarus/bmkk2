import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadGroups } from '../actions';
import { IGoodGroups } from '../types';
import { goodGroupsFile, goodGroupsRoot, groupFileNoImage } from '../const';
import { Link } from 'react-router-dom';

export class Production extends Page {
  constructor(props: PageProps) {
    super(props);
  }

  componentDidMount() {
    const { onLoadGroups } = this.props;
    fetch(goodGroupsFile)
    .then( res => {
      return res.text();
    })
    .then( res => JSON.parse(res) )
    .then( res => onLoadGroups(res as IGoodGroups) )
    .catch( err => console.log(JSON.stringify(err)) );
  }

  renderBody(): JSX.Element {
    const { groups, selectedLang } = this.props;

    if (groups) {
      return (
        <div className="GroupsContainer">
          {
            groups.groups.map( (g, idx) => (
              <div key={idx} className="GoodGroup">
                <Link to={`/production/groups/` + g.ruid}>
                  <img src={!g.image ? `${goodGroupsRoot}${groupFileNoImage}` : `${goodGroupsRoot}${g.image}`} />
                  <div className="GoodGroupName">
                   {g.caption[selectedLang.toLowerCase()].name}
                  </div>
                </Link>
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