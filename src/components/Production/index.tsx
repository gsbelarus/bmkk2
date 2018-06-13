import * as React from 'react';
import { Page } from '../Page';
import { goodGroupsRoot, groupFileNoImage } from '../../const';
import { Link } from 'react-router-dom';
import './production.css';

export class Production extends Page {

  renderBody(): JSX.Element {
    const { groups, selectedLang } = this.props;

    if (groups) {
      return (
        <div>
          <div>
            С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" можно ознакомиться <Link to={`/price`}>здесь!</Link>
          </div>
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