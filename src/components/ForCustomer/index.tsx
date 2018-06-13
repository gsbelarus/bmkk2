import * as React from 'react';
import { Page } from '../Page';

export class ForCustomer extends Page {
  renderBody(): JSX.Element {
    const { selectedLang } = this.props;
    return (
      <div>
        {selectedLang}
      </div>
    );
  }
}