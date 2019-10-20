import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import { Form, Tabs } from 'components/Uikit';

const Home = () => {
  const { balance } = useSelector(state => state.transactions);

  return (
    <div className="container">
      <Tabs tab1Title={`Saldo: R$ ${balance.toLocaleString('pt-BR')}`} tab1Content={<Form />} tab2Title="Transações" />
    </div>
  );
};

export default Home;
