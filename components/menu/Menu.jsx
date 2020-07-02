import {MenuItem} from "./MenuItem";

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.menu.sections.map(section => {
      <div className={'section'}>
        <h1>{section.name}</h1>
        {section.items.map(sectionItem => {
          <MenuItem sectionItem/>
        })}
      </div>
    })
    return <h1>Hello, {this.props.name}</h1>;
  }
}
