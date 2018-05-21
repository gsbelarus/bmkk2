import * as React from 'react';
import './components.css';
import { languages, Language } from '../types';
import * as classNames from 'classnames';
import { SetLanguage } from '../actions';

export type LangSelectorProps = {
  selectedLang: Language;
  onSetLanguage: SetLanguage
};

export class LangSelector extends React.Component<LangSelectorProps, {}> {
  render() {
    const { selectedLang, onSetLanguage } = this.props;
    return (
      <div className="LangSelector">
        {
          languages.map(
            (l, idx) =>
              <span
                key={idx}
                className={classNames({ Selected: selectedLang === l })}
                onClick={() => onSetLanguage(l)}
              >
                {l}
              </span>
          )
        }
      </div>
    );
  }
}