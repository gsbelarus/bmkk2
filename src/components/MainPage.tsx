import { Page, PageProps } from './Page';

export class MainPage extends Page {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      backClass: 'BackImage'
    };
  }
}