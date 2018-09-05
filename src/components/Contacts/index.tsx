import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import { IContacts, IDepartments } from '../../types';
import { contactsFile, departmentsFile, forcustomerRoot } from '../../const';
import './contacts.css';
import * as ReactMarkdown from 'react-markdown';
import { languages } from '../../types';

export class Contacts extends Page {

  componentDidMount() {
    super.componentDidMount();
    const { onLoadContacts, onLoadDepartments, onLoadRequisitesMD } = this.props;

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

    languages.map((l, idx) => 
      { 
        LoadMDFile(`${forcustomerRoot}requisites.` + l.toLowerCase() + `.md`, l, onLoadRequisitesMD);  
      }
    )    
  }

  renderBody(): JSX.Element {
    const { contacts, departments, sl, requisitesMD } = this.props;

    if (contacts && departments) {
      const depts = departments.departments.filter(
        d => contacts.contacts.some( c => c.department === d.ruid && !!c.ruid )
      );

      return (
        <div>          
          <div className="FlexContainer">
            { depts.map( (d, d_idx) => (
                <div key={d_idx} className="DepartmentItem">
                  <div className="DeptName">{Page.getLName(d.caption, sl)}</div>
                  {
                    contacts.contacts.filter( c => c.department === d.ruid ).map( (c, idx) => (
                      <div key={idx} className="ContactItem">
                        <div>{Page.getLName(c.caption, sl)}</div>
                        {c.phone && <div className="contactdiv"><i className="fas fa-phone fa-xs" />{c.phone}</div>}
                        {c.fax && <div className="contactdiv"><i className="fas fa-fax fa-xs" />{c.fax}</div>}
                        {c.email && <div className="contactdiv"><i className="far fa-envelope fa-xs" />{c.email}</div>}
                        {c.description && <div className="contactdiv">{c.description}</div>}
                      </div>
                      )
                    )
                  }
                </div>
                )
              )
            }
          </div>
          { requisitesMD && requisitesMD[sl.toUpperCase()] && 
            <div id="requisites">
              <ReactMarkdown source={requisitesMD[sl.toUpperCase()].name} />
            </div>
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