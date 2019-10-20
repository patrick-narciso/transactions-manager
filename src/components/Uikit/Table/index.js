import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const Table = () => {
  const { transactions } = useSelector(state => state.transactions);
  const sortedTransactions = transactions.sort((a, b) => b.date - a.date);

  const icons = {
    debit: 'arrow-down icon--negative',
    credit: 'arrow-up icon--positive',
  };

  const valueColors = {
    debit: 'value--negative',
    credit: 'value--positive',
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="a-text--small">Descrição</th>
          <th className="a-text--small">Valor (R$)</th>
          <th className="a-text--small">Data</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 &&
          sortedTransactions.map(transaction => (
            <tr>
              <td className="a-text--small">{transaction.description}</td>
              <td className={`a-text--small ${valueColors[transaction.type]}`}>
                <i className={`a-icon--size-small a-icon a-icon--${icons[transaction.type]}`} />
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.value)}
              </td>
              <td className="a-text--small">{new Date(transaction.date).toLocaleString()}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
