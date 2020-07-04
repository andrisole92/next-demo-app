export const MenuItem = ({menuItem}) =>
  <div className={'menuItem'}>
    <div className={'double-trouble'}>
      <h2 className={'menuItem__title'}>{menuItem.title}</h2>
      <span className={'menuItem__price'}>1.99</span>
    </div>
    <p className={'menuItem__description'}>{menuItem.description}</p>
    {/*<input type={'checkbox'}/>*/}
    <style jsx>{`
      .menuItem__description {
        width: 80%;
        padding: 0 14px;
      }
      .double-trouble {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .double-trouble > * {
        margin: 0 !important;
        padding: .5rem;
      }
    `}</style>
  </div>

