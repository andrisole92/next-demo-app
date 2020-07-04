import {MenuItem} from "./MenuItem";

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.menu.sections.map(section =>
      <div className={'section'} key={section.name}>
        <h1 className={'section__title'}>{section.name}</h1>
        <div className={'section__items'}>
          {section.items.map(sectionItem =>
            <MenuItem key={sectionItem.title} menuItem={sectionItem}/>
          )}
        </div>
      </div>
    )
    return <div>
      {menu}
      <style jsx global>{`
        .section__title {
            background: blueviolet;
            width: 100%;
            color: white;
            padding: 2px 14px;
            border-radius: 4px;
        }
        .section__items > .menuItem:last-child > p {
          padding-bottom: .5rem;
        }
      `}</style>
    </div>;
  }
}
