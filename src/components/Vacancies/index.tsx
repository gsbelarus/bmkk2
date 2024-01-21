import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { addInfo, vacanciesFile, vacanciesRoot } from '../../const';
import { IVacancies, languages } from '../../types';
import { LoadMDFile, Page } from '../Page';
import './Vacancies.css';
export class Vacancies extends Page {

  componentDidMount() {
    super.componentDidMount();
    const { onLoadVacancies, onLoadVacanciesMD } = this.props;
    fetch(vacanciesFile)
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => onLoadVacancies(res as IVacancies))
      .catch(err => console.log(err));

    languages.forEach((l, idx) => {
      LoadMDFile(`${vacanciesRoot}vacancies.${l.toLowerCase()}.md`, l, onLoadVacanciesMD);
    }
    )
  }

  renderBody(): JSX.Element {
    const { vacancies, sl, vacanciesMD } = this.props;

    if (vacancies) {
      vacancies.vacancies.sort((a, b) => a.ordr - b.ordr);
      return (
        <div>
          {vacanciesMD && vacanciesMD[sl.toUpperCase()] &&
            <div >
              <ReactMarkdown source={vacanciesMD[sl.toUpperCase()].name} />
            </div>
          }
          <div className="VacancyBox FlexContainer">
            {vacancies.vacancies.map((vacancy, idx) => {
              const vacancyImg = vacancy.image.includes('/') ? vacancy.image
                : `${vacanciesRoot}${vacancy.image}`;
              return (
                <div key={idx} className="VacCard">
                  <div className="bg"></div>
                  <img src={vacancyImg} width={182} height={120} />
                  <div className="VacCaption">
                    <div className="VacText">
                      {Page.getLName(vacancy.caption, sl)}
                    </div>
                    <div className="VacSalary">
                      {Page.getLName(vacancy.salary, sl)}
                    </div>
                  </div>
                </div>
              );
            })}
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
