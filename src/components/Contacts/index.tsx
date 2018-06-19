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
    const sl = selectedLang.toLowerCase();

    if (contacts && departments) {
      const depts = departments.departments.filter(
        d => contacts.contacts.some( c => c.department === d.ruid )
      );

      return (
        <div className="ContactsContainer">
          { depts.map( (d, d_idx) => (
              <div key={d_idx} className="DepartmentItem">
                <h4>
                  {d.caption[sl].name}
                </h4>
                {
                  contacts.contacts.filter( c => c.department === d.ruid ).map( (c, idx) => (
                    <div key={idx} className="ContactItem">
                      {c.caption[sl].name && <div>{c.caption[sl].name}</div>}
                      {c.phone && <div><i className="fas fa-phone fa-xs" />{c.phone}</div>}
                      {c.fax && <div><i className="fas fa-fax fa-xs" />{c.fax}</div>}
                      {c.email && <div><i className="far fa-envelope fa-xs" />{c.email}</div>}
                      {c.description && <div>{c.description}</div>}
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