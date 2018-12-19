import * as React from "react";
import { Page } from "../Page";
import { goodGroupsRoot, groupFileNoImage, noImageRoot, addInfo } from "../../const";
import { Link } from "react-router-dom";
import "./production.css";

export class Production extends Page {
  renderBody(): JSX.Element {
    const { groups, sl } = this.props;

    if (groups) {
      return (
        <div>
          <div className="FlexContainer">
            {groups.groups.map((g, idx) => (
              <div className="Card" key={idx}>
                <div className="bg" />
                <Link to={`${PUBLIC_ROOT}production/` + g.ruid} />
                <img
                  src={
                    !g.image
                      ? `${noImageRoot}${groupFileNoImage}`
                      : `${goodGroupsRoot}${g.image}`
                  }
                />
                <div className="CardCaption">
                  <div className="CardText">{Page.getLName(g.caption, sl)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>{addInfo.textLoading[sl].name}</div>;
    }
  }
}
