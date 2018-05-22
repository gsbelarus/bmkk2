import { Page, PageProps } from './Page';

export class Production extends Page {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      backClass: ''
    };
  }
}