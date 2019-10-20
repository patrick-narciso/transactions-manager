import React from 'react';

const Tabs = ({ tab1Title, tab2Title, tab1Content, tab2Content }) => {
  return (
    <div style={{ margin: '25px' }} className="a-tabs a-tabs--horizontal">
      <input className="a-tabs__item" type="radio" id="tab21" name="tabs2" defaultChecked />
      <label className="a-tabs__label" htmlFor="tab21">
        <i className="a-icon a-icon--bank a-icon--size-small a-icon--space-right a-tabs__icon" />
        <span className="a-tabs__text">Cadastro</span>
      </label>
      <div className="a-tabs__content">
        <h2 id="tab1Title" className="a-title--small">
          {tab1Title}
        </h2>
        {tab1Content}
      </div>
      <input className="a-tabs__item" type="radio" id="tab22" name="tabs2" />
      <label className="a-tabs__label" htmlFor="tab22">
        <i className="a-icon a-icon--transactions a-icon--size-small a-icon--space-right a-tabs__icon" />
        <span className="a-tabs__text">Transações</span>
      </label>
      <div className="a-tabs__content">
        <h2 id="tab2Title" className="a-title--medium">
          {tab2Title}
        </h2>
        {tab2Content}
      </div>
      <div className="a-tabs__border" />
    </div>
  );
};

export default Tabs;
