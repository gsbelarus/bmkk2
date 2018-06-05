import * as React from 'react';
import { Page, PageProps } from './Page';
import { LoadContacts, LoadDepartments } from '../actions';
import { IContacts, IDepartments } from '../types';
import { contactsFile, contactsRoot, departmentsFile, contactCaption } from '../const';
import { Link } from 'react-router-dom';

export class Contacts extends Page {
  constructor(props: PageProps) {
    super(props);
  }

  componentDidMount() {
    const { onLoadContacts, onLoadDepartments } = this.props;

    fetch(contactsFile)
    .then( res => res.text() )
    .then( res => JSON.parse(res) )
    .then( res => onLoadContacts(res as IContacts) )
    .catch( err => console.log(JSON.stringify(err)) );

    fetch(departmentsFile)
    .then( res => res.text() )
    .then( res => JSON.parse(res) )
    .then( res => onLoadDepartments(res as IDepartments) )
    .catch( err => console.log(JSON.stringify(err)) );    
  }

  renderBody(): JSX.Element {
    const { contacts, departments, selectedLang } = this.props;
    if (contacts && departments) {
      return (
        <div className="GroupsContainer">
          { departments.departments.map( (d, d_idx) => (
              <div key={d_idx} className="DepartmentItem">
                <h3>
                  {d.caption[selectedLang.toLowerCase()].name}
                </h3>
                {
                  contacts.contacts.filter( c => c.department === d.ruid ).map( (c, idx) => (
                    <div key={idx} className="ContactItem">        
                      <div className="ContactName">
                        {c.caption[selectedLang.toLowerCase()].name}
                      </div>
                      <div className={c.phone ? "ContactInfo" : "NoneDisplay"}>
                        <span>
                          {contactCaption.description.phone[selectedLang.toLowerCase()].name}
                        </span>                      
                        {c.phone}
                      </div>
                      <div className={c.fax ? "ContactInfo" : "NoneDisplay"}>
                        <span>
                          {contactCaption.description.fax[selectedLang.toLowerCase()].name}
                        </span>
                        {c.fax}
                      </div>   
                      <div className={c.email ? "ContactInfo" : "NoneDisplay"}>
                        <span>
                          {contactCaption.description.email[selectedLang.toLowerCase()].name}
                        </span>                      
                        {c.email}
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