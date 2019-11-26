import * as React from 'react';
import { Page, LoadMDFile, PageProps, IState } from '../Page';
import { IContacts, IDepartments } from '../../types';
import { contactsFile, departmentsFile, forcustomerRoot, addInfo } from '../../const';
import './contacts.css';
import * as ReactMarkdown from 'react-markdown';
import { languages } from '../../types';
import emailjs from 'emailjs-com';

export class Contacts extends Page<PageProps>  {

  constructor(options: PageProps) {
    super(options);
    this.state = {
      sendText: '',
      counter: 0
    };
  }

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

    languages.forEach((l, idx) =>
      {
        LoadMDFile(`${forcustomerRoot}requisites.` + l.toLowerCase() + `.md`, l, onLoadRequisitesMD);
      }
    )
  }

  onSend (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    emailjs.sendForm('user_Rn4LE1zUdsp5DZJkmLUUZ', 'template_YVRvH33n', '#contact-form', 'user_Rn4LE1zUdsp5DZJkmLUUZ')
    .then((response) => {
      this.setState({sendText: 'Сообщение отправлено!'})
    //  window.location.reload();
    }, (err) => {
      this.setState({sendText: 'Сообщение не было отправлено!' + err})
    //  window.location.reload();
    });
  }

  renderBody(): JSX.Element {
    const { contacts, departments, sl, requisitesMD } = this.props;

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      e.preventDefault();
      this.onSend(e);
    };

    const onClear = () => {
     if (this.state.sendText !== '') this.setState({sendText: ''})
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
          <div>
            <h1>Форма обратной связи</h1>
            <form id="contact-form" >
              <input type="hidden" name="contact_number"/>
              <div className="field-block">
                <label htmlFor="name">Ваше имя:</label>
                <input onClick={onClear} id="name" className="field" name="user_name" required type="text"/>
              </div>

              <div className="field-block">
                <label htmlFor="email">Ваш E-mail:</label>
                <input onClick={onClear} id="email" className="field" name="user_email" required type="email"/>
              </div>

              <div className="field-block">
                <label htmlFor="phone">Ваш телефон:</label>
                <input onClick={onClear} id="phone" className="field" name="user_phone" required type="text"/>
              </div>
              <div className="field-block">
                <label htmlFor="message">Текст сообщения:</label>
                <textarea onClick={onClear} id="message" className="field" required name="message_html" data-size="4"></textarea>
              </div>
              <button onClick={onClick} id='submit' className="button">Отправить</button>
              <div className="info">{this.state.sendText}</div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
           {addInfo.textLoading[sl].name}
        </div>
      );
    }
  }
}