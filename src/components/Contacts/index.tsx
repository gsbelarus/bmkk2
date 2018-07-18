import * as React from 'react';
import { Page } from '../Page';
import { IContacts, IDepartments } from '../../types';
import { contactsFile, departmentsFile } from '../../const';
import './contacts.css';
import * as ReactMarkdown from 'react-markdown';

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
    const { contacts, departments, sl } = this.props;

    const mdr: { [lang: string]: string } = {
      ru: require(`../../../public/data/forcustomer/requisites.ru.md`),
      be: require(`../../../public/data/forcustomer/requisites.be.md`),
      en: require(`../../../public/data/forcustomer/requisites.en.md`)
    };    

    if (contacts && departments) {
      const depts = departments.departments.filter(
        d => contacts.contacts.some( c => c.department === d.ruid && !!c.ruid )
      );

      return (
        <div>          
          <div className="FlexContainer">
            { depts.map( (d, d_idx) => (
                <div key={d_idx} className="DepartmentItem">
                  <div>{Page.getLName(d.caption, sl)}</div>
                  {
                    contacts.contacts.filter( c => c.department === d.ruid ).map( (c, idx) => (
                      <div key={idx} className="ContactItem">
                        {c.caption && <div>{Page.getLName(c.caption, sl)}</div>}
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
          <div id="requisites">
            <ReactMarkdown source={mdr[sl.toLowerCase()]} />
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