import * as React from 'react';
import { Page } from '../Page';
import { IContacts, IDepartments } from '../../types';
import { contactsFile, departmentsFile, contactCaption } from '../../const';
import './contacts.css';

export class Contacts extends Page {

  componentDidMount() {
    const { onLoadContacts, onLoadDepartments } = this.props;

    fetch(contactsFile)
    .then( res => res.text() )
    .then( res => JSON.parse(res) )
    .then( res => onLoadContacts(res as IContacts) )
    .catch( err => console.log(err) );

    fetch(departmentsFile)
    .then( res => res.text() )
    .then( res => JSON.parse(res) )
    .then( res => onLoadDepartments(res as IDepartments) )
    .catch( err => console.log(err) );
  }

  renderBody(): JSX.Element {
    const { contacts, departments, selectedLang } = this.props;
    if (contacts && departments) {
      return (
        <div className="GroupsContainer">
          { departments.departments.map( (d, d_idx) => (
              <div key={d_idx} className="DepartmentItem">
                <h4>
                  {d.caption[selectedLang.toLowerCase()].name}
                </h4>
                {
                  contacts.contacts.filter( c => c.department === d.ruid ).map( (c, idx) => (
                    <div key={idx} className="ContactItem">
                      <div className={c.caption[selectedLang.toLowerCase()].name ? "ContactName" : "NoneDisplay"}>
                        {c.caption[selectedLang.toLowerCase()].name}
                      </div>
                      <div className={c.phone ? "ContactInfo" : "NoneDisplay"}>
                        <i className="fas fa-phone fa-xs"></i>
                        {c.phone}
                      </div>
                      <div className={c.fax ? "ContactInfo" : "NoneDisplay"}>
                        <i className="fas fa-fax fa-xs"></i>
                        {c.fax}
                      </div>
                      <div className={c.email ? "ContactInfo" : "NoneDisplay"}>
                        <i className="far fa-envelope fa-xs"></i>
                        {c.email}
                      </div>
                      <div className={c.description ? "ContactInfo" : "NoneDisplay"}>
                        
                        {c.description}
                      </div>                      
                    </div>
                    )
                  )
                }
              </div>
              )
            )
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