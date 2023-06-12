import { Header } from './Header';
import { RollingSection } from './RollingSection';
import { Main } from './Main';
import { Component } from '../Component';

export class NewsStand extends Component {
  // header: Header;
  // rollingSection: RollingSection;
  // main: Main;

  render() {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';
  }

  mount() {
    const header = new Header(this.props);
    // const rollingSection = new RollingSection(this.props);
    // const main = new Main(this.props);
    this.element.append(header.element);
    // this.element.append(header.element, rollingSection.element, main.element);
  }
}
